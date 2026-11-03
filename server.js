/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Nohut Dürüm Grubu (Tamer Çelik, Faruk Tazeoğlu, Muayad Jumaah)
 *
 * Yerel Geliştirme ve Canlı Sunum Sunucusu (Zero-Dependency Node.js HTTP Server)
 * Çalıştırmak için: npm start  ->  http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const ARACLAR_DIR = path.join(ROOT_DIR, 'araclar');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(data, null, 2));
}

function runCommand(cmd) {
  return new Promise((resolve) => {
    exec(cmd, { cwd: ROOT_DIR, encoding: 'utf8' }, (error, stdout, stderr) => {
      resolve({
        basarili: !error,
        kod: error ? error.code : 0,
        cikti: (stdout || '') + (stderr ? `\n${stderr}` : '')
      });
    });
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  // =========================================================================
  // API 1: Tüm araç JSON dosyalarını tek seferde oku (GET /api/araclar)
  // =========================================================================
  if (pathname === '/api/araclar' && req.method === 'GET') {
    try {
      const dosyalar = fs.readdirSync(ARACLAR_DIR).filter((f) => f.endsWith('.json') && f !== 'ornek-demo.json');
      const liste = [];
      for (const dosya of dosyalar) {
        try {
          const icerik = JSON.parse(fs.readFileSync(path.join(ARACLAR_DIR, dosya), 'utf8'));
          liste.push(icerik);
        } catch (err) {
          liste.push({ dosya, hata: err.message });
        }
      }
      liste.sort((a, b) => (a.grupNo || 99) - (b.grupNo || 99));
      return sendJson(res, 200, { sunucuAktif: true, araclar: liste });
    } catch (err) {
      return sendJson(res, 500, { hata: err.message });
    }
  }

  // =========================================================================
  // API 2: Bir grubun araç JSON dosyasını doğrudan diske kaydet (POST /api/arac-guncelle)
  // =========================================================================
  if (pathname === '/api/arac-guncelle' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const veri = JSON.parse(body);
        const kod = String(veri.kod || '').replace(/[^a-z0-9-]/gi, '');
        if (!kod) return sendJson(res, 400, { hata: 'Geçersiz grup kodu' });

        const hedefYol = path.join(ARACLAR_DIR, `${kod}.json`);
        if (!fs.existsSync(hedefYol)) {
          return sendJson(res, 404, { hata: `${kod}.json bulunamadı` });
        }

        const mevcut = JSON.parse(fs.readFileSync(hedefYol, 'utf8'));
        const guncel = {
          grupNo: mevcut.grupNo,
          kod: mevcut.kod,
          grupAdi: mevcut.grupAdi,
          sunumHaftasi: mevcut.sunumHaftasi,
          uyeler: mevcut.uyeler,
          pistteMi: typeof veri.pistteMi === 'boolean' ? veri.pistteMi : mevcut.pistteMi,
          aracEmoji: veri.aracEmoji || mevcut.aracEmoji,
          renk: veri.renk || mevcut.renk,
          slogan: veri.slogan || mevcut.slogan
        };

        fs.writeFileSync(hedefYol, JSON.stringify(guncel, null, 2) + '\n', 'utf8');
        return sendJson(res, 200, { basarili: true, arac: guncel });
      } catch (err) {
        return sendJson(res, 500, { hata: err.message });
      }
    });
    return;
  }

  // =========================================================================
  // API 3: Tüm 10 grubun pistteMi durumunu toplu güncelle (POST /api/toplu-durum)
  // =========================================================================
  if (pathname === '/api/toplu-durum' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { pistteMi } = JSON.parse(body);
        const dosyalar = fs.readdirSync(ARACLAR_DIR).filter((f) => f.endsWith('.json') && f !== 'ornek-demo.json');
        for (const dosya of dosyalar) {
          const tamYol = path.join(ARACLAR_DIR, dosya);
          const mevcut = JSON.parse(fs.readFileSync(tamYol, 'utf8'));
          mevcut.pistteMi = Boolean(pistteMi);
          fs.writeFileSync(tamYol, JSON.stringify(mevcut, null, 2) + '\n', 'utf8');
        }
        return sendJson(res, 200, { basarili: true, pistteMi: Boolean(pistteMi) });
      } catch (err) {
        return sendJson(res, 500, { hata: err.message });
      }
    });
    return;
  }

  // =========================================================================
  // API 4: Teknik Muayene (CI) Betiğini Çalıştır (GET /api/muayene)
  // =========================================================================
  if (pathname === '/api/muayene' && req.method === 'GET') {
    const sonuc = await runCommand('node scripts/muayene-kontrol.js');
    return sendJson(res, 200, sonuc);
  }

  // =========================================================================
  // API 5: Canlı Git Durumu, Dallar ve Son Commitler (GET /api/git-durum)
  // =========================================================================
  if (pathname === '/api/git-durum' && req.method === 'GET') {
    const [branchRes, logRes, statusRes, remoteRes] = await Promise.all([
      runCommand('git branch -a'),
      runCommand('git log --oneline -n 8'),
      runCommand('git status -s'),
      runCommand('git remote -v')
    ]);
    return sendJson(res, 200, {
      dallar: branchRes.cikti.trim(),
      sonCommitler: logRes.cikti.trim(),
      degisiklikler: statusRes.cikti.trim(),
      uzakDepo: remoteRes.cikti.trim()
    });
  }

  // =========================================================================
  // API 6: Git Pull Çalıştır (POST /api/git-pull)
  // =========================================================================
  if (pathname === '/api/git-pull' && req.method === 'POST') {
    const pullRes = await runCommand('git pull --rebase');
    return sendJson(res, 200, pullRes);
  }

  // =========================================================================
  // STATİK DOSYA SUNUCUSU (index.html, css/, js/, araclar/)
  // =========================================================================
  let safePath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.join(ROOT_DIR, safePath);

  // Güvenlik: kök dizin dışına çıkılmasını engelle
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    return res.end('Erisim engellendi');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 - Dosya bulunamadi');
  }
});

server.listen(PORT, () => {
  console.log('==============================================================');
  console.log(`🏁 GİT GRAND PRIX YEREL SUNUCUSU ÇALIŞIYOR!`);
  console.log(`🌐 Tarayıcıdan Açın: http://localhost:${PORT}`);
  console.log(`🌯 Sunum Grubu: Nohut Dürüm (Tamer, Faruk, Muayad)`);
  console.log('==============================================================');
});
