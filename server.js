/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Nohut Dürüm Grubu (Tamer Çelik, Faruk Tazeoğlu, Muayad Jumaah)
 *
 * ZÜMRÜDÜANKA (THE GIT PHOENIX) - YEREL DERLEME VE SUNUM SUNUCUSU
 * Çalıştırmak için: npm start  ->  http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const PARCALAR_DIR = path.join(ROOT_DIR, 'parcalar');

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

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  // =========================================================================
  // API 1: Tüm parcalar/*.json dosyalarını oku (GET /api/parcalar)
  // =========================================================================
  if (pathname === '/api/parcalar' && req.method === 'GET') {
    try {
      const dosyalar = fs.readdirSync(PARCALAR_DIR).filter((f) => f.endsWith('.json'));
      const liste = [];
      for (const dosya of dosyalar) {
        try {
          const icerik = JSON.parse(fs.readFileSync(path.join(PARCALAR_DIR, dosya), 'utf8'));
          liste.push(icerik);
        } catch (err) {
          liste.push({ dosya, hata: err.message });
        }
      }
      liste.sort((a, b) => (a.parcaNo || 99) - (b.parcaNo || 99));
      return sendJson(res, 200, { sunucuAktif: true, parcalar: liste });
    } catch (err) {
      return sendJson(res, 500, { hata: err.message });
    }
  }

  // =========================================================================
  // API 2: Bir grubun yapıştırdığı kodu kaydet ve derle (POST /api/parca-kaydet)
  // =========================================================================
  if (pathname === '/api/parca-kaydet' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        const veri = JSON.parse(body);
        const kod = String(veri.kod || '').replace(/[^a-z0-9-]/gi, '');
        if (!kod) return sendJson(res, 400, { hata: 'Geçersiz grup kodu' });

        const hedefYol = path.join(PARCALAR_DIR, `${kod}.json`);
        if (!fs.existsSync(hedefYol)) {
          return sendJson(res, 404, { hata: `${kod}.json bulunamadı` });
        }

        const mevcut = JSON.parse(fs.readFileSync(hedefYol, 'utf8'));
        const guncel = {
          ...mevcut,
          aktif: typeof veri.aktif === 'boolean' ? veri.aktif : true,
          anaRenk: veri.anaRenk || mevcut.anaRenk,
          ikincilRenk: veri.ikincilRenk || mevcut.ikincilRenk,
          mesaj: veri.mesaj || mevcut.mesaj
        };

        fs.writeFileSync(hedefYol, JSON.stringify(guncel, null, 2) + '\n', 'utf8');
        const derlemeSonuc = await runCommand('node scripts/muayene-kontrol.js');
        return sendJson(res, 200, { basarili: true, parca: guncel, derlemeCikti: derlemeSonuc.cikti });
      } catch (err) {
        return sendJson(res, 500, { hata: err.message });
      }
    });
    return;
  }

  // =========================================================================
  // API 3: Toplu Durum Değiştir ve Derle (POST /api/toplu-durum)
  // =========================================================================
  if (pathname === '/api/toplu-durum' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        const { aktif } = JSON.parse(body);
        const bayrak = aktif ? '--tamamla' : '--sifirla';
        const derlemeSonuc = await runCommand(`node scripts/muayene-kontrol.js ${bayrak}`);
        return sendJson(res, 200, { basarili: true, aktif: Boolean(aktif), cikti: derlemeSonuc.cikti });
      } catch (err) {
        return sendJson(res, 500, { hata: err.message });
      }
    });
    return;
  }

  // =========================================================================
  // API 4: Projeyi Şimdi Derle (GET /api/derle)
  // =========================================================================
  if (pathname === '/api/derle' && req.method === 'GET') {
    const sonuc = await runCommand('node scripts/muayene-kontrol.js');
    return sendJson(res, 200, sonuc);
  }

  // Statik Dosya Sunucusu
  let safePath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.join(ROOT_DIR, safePath);

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
  console.log('======================================================================');
  console.log(`🔥 ZÜMRÜDÜANKA (THE GIT PHOENIX) SUNUCUSU ÇALIŞIYOR!`);
  console.log(`🌐 Tarayıcıdan Açın: http://localhost:${PORT}`);
  console.log(`🌯 Sunum Grubu: Nohut Dürüm (Tamer Çelik • Faruk Tazeoğlu • Muayad Jumaah)`);
  console.log('======================================================================');
});
