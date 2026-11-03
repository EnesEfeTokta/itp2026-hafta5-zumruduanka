/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Sunum & Uygulama Grubu: Nohut Dürüm (Tamer Çelik, Faruk Tazeoğlu, Muayad Jumaah)
 * Ders Sorumlusu: Doç. Dr. Hamza POLAT
 *
 * Git Grand Prix - Canlı Sınıf İçi Uygulama ve Şans Yarışı Motoru
 */

const VARSAYILAN_GRUPLAR = [
  {
    grupNo: 1,
    kod: 'sudo',
    grupAdi: 'Sudo',
    sunumHaftasi: 'Hafta 11',
    uyeler: ['Ahmet Can BOZKURT', 'Yusufcan KADAĞAN', 'Enes Efe TOKTA'],
    pistteMi: false,
    aracEmoji: '🏎️',
    renk: '#ef4444',
    slogan: 'Root yetkisiyle pistin hakimi!'
  },
  {
    grupNo: 2,
    kod: 'it-code',
    grupAdi: 'IT Code',
    sunumHaftasi: 'Hafta 13',
    uyeler: ['Yusuf Semih Halis', 'İrem İmancı', 'Muhammed Uğur Çetinkaya'],
    pistteMi: false,
    aracEmoji: '🚀',
    renk: '#3b82f6',
    slogan: 'Temiz kod, maksimum hız!'
  },
  {
    grupNo: 3,
    kod: 'rotbalance',
    grupAdi: 'RotBalance',
    sunumHaftasi: 'Hafta 3',
    uyeler: ['Umut Talha AKPINAR', 'Cafer YILDIRIM', 'Merve YILMAZ'],
    pistteMi: false,
    aracEmoji: '⚡',
    renk: '#eab308',
    slogan: 'Rot balans tamam, virajlarda rakip tanımaz!'
  },
  {
    grupNo: 4,
    kod: 'tdb',
    grupAdi: 'TDB',
    sunumHaftasi: 'Hafta 6',
    uyeler: ['Taha Sait Barışkan', 'Davut Erdin', 'Burak Bostancıoğlu'],
    pistteMi: false,
    aracEmoji: '🛸',
    renk: '#10b981',
    slogan: 'Asenkron hızda kesintisiz sürüş!'
  },
  {
    grupNo: 5,
    kod: 'itersolis',
    grupAdi: 'ITERSOLIS',
    sunumHaftasi: 'Hafta 9',
    uyeler: ['İrem Sıla Alav', 'Şevval Gündoğdu', 'Yaşar Can Sandallı'],
    pistteMi: false,
    aracEmoji: '☀️',
    renk: '#f97316',
    slogan: 'Güneşin enerjisiyle bitiş çizgisine!'
  },
  {
    grupNo: 6,
    kod: 'noctalia',
    grupAdi: 'Noctalia',
    sunumHaftasi: 'Hafta 12',
    uyeler: ['Muhammed Yusuf Yıldız', 'Mustafa Aykaç', 'Aziz Emre Yılmaz'],
    pistteMi: false,
    aracEmoji: '🦅',
    renk: '#8b5cf6',
    slogan: 'Gece karanlığında gerçek zamanlı fırtına!'
  },
  {
    grupNo: 7,
    kod: '404',
    grupAdi: '404',
    sunumHaftasi: 'Hafta 8',
    uyeler: ['Ahsen Nur YILDIRIM', 'Yeşim YİKİT', 'İlayda TOPAL'],
    pistteMi: false,
    aracEmoji: '👾',
    renk: '#ec4899',
    slogan: 'Error 404: Rakip Bulunamadı!'
  },
  {
    grupNo: 8,
    kod: 'hat',
    grupAdi: 'HAT',
    sunumHaftasi: 'Hafta 7',
    uyeler: ['Taha Efendioğlu', 'Harun Esat İrşi', 'Ahmet Kerim İnce'],
    pistteMi: false,
    aracEmoji: '🔥',
    renk: '#06b6d4',
    slogan: 'Tam gaz sunucu hızıyla öndeyiz!'
  },
  {
    grupNo: 9,
    kod: 'eib',
    grupAdi: 'EIB',
    sunumHaftasi: 'Hafta 10',
    uyeler: ['Ensar Kibaroğlu', 'İbrahim Budak', 'Burak Bahadur'],
    pistteMi: false,
    aracEmoji: '🏎️',
    renk: '#14b8a6',
    slogan: 'Bileşen tabanlı aerodinamik güç!'
  },
  {
    grupNo: 10,
    kod: 'soy-tech',
    grupAdi: 'SOY Tech',
    sunumHaftasi: 'Hafta 4',
    uyeler: ['Semih Beyaztaş', 'Ozan Hasköy', 'Yusuf Çırak'],
    pistteMi: false,
    aracEmoji: '⚡',
    renk: '#6366f1',
    slogan: 'Tip güvenli motor, sıfır hata!'
  }
];

// Nohut Dürüm Canlı Kodlama Demo Bilgisi (30 dk Gösterim için)
const NOHUT_DEMO_BILGISI = {
  grupNo: 11,
  kod: 'ornek-demo',
  grupAdi: 'Nohut Dürüm (Demo)',
  sunumHaftasi: 'Hafta 5 (Sunum Grubu)',
  uyeler: ['Tamer Çelik', 'Faruk Tazeoğlu', 'Muayad Jumaah'],
  pistteMi: true,
  aracEmoji: '🌯',
  renk: '#f59e0b',
  slogan: 'Git Grand Prix Hakem ve Güvenlik Aracı (Safety Car) Hazır! 🌯🏁'
};

// Rastgele Pist Olayları (Şans Faktörü)
const RASTGELE_OLAYLAR = [
  { etiket: '🌯 Nohut Dürüm Turbosu!', tip: 'boost', carpan: 2.35, mesaj: (g) => `🌯 ${g} yolda sıcak Nohut Dürüm ikramı aldı, TURBO açtı!` },
  { etiket: '✅ Actions Yeşil Işık!', tip: 'boost', carpan: 2.15, mesaj: (g) => `✅ ${g} GitHub Actions testini 0.01 saniyede geçti, hızlandı!` },
  { etiket: '🔀 git rebase Kestirmesi!', tip: 'boost', carpan: 2.25, mesaj: (g) => `🔀 ${g} git rebase ile virajı içten döndü, rakipleri solladı!` },
  { etiket: '🚀 Fast-Forward Merge!', tip: 'boost', carpan: 2.1, mesaj: (g) => `🚀 ${g} Fast-Forward birleştirmeyle roketledi!` },
  { etiket: '⚠️ Merge Conflict!', tip: 'slow', carpan: 0.25, mesaj: (g) => `⚠️ ${g} Merge Conflict çukuruna düştü, satırları çözmeye çalışıyor!` },
  { etiket: '🛑 .env Unutuldu!', tip: 'slow', carpan: 0.35, mesaj: (g) => `🛑 ${g} .gitignore dosyasını unuttu, node_modules ağırlık yapıyor!` },
  { etiket: '🐛 Lint Hatası!', tip: 'slow', carpan: 0.4, mesaj: (g) => `🐛 ${g} eksik virgül yüzünden yavaşladı, düzeltiyor!` }
];

// Uygulama Durumu (State)
let gruplar = JSON.parse(JSON.stringify(VARSAYILAN_GRUPLAR));
let seciliRehberGrupKod = 'sudo';
let sesAcik = true;
let yarisDevamEdiyor = false;
let yarisAnimasyonId = null;
let yerelNodeSunucuAktif = false;
let bagliGithubRepo = localStorage.getItem('itp_github_repo') || 'Faruk-T/itp2026-hafta5-git-grand-prix';

// Hakem paneli yerel geçersiz kılmaları (file:// veya GitHub Pages ortamı için)
let hakemOverrides = {};
try {
  const kayitli = localStorage.getItem('itp_hakem_overrides');
  if (kayitli) hakemOverrides = JSON.parse(kayitli);
} catch (_) {}

// =========================================================================
// SES EFEKTLERİ MOTORU (Web Audio API - Harici Dosya Gerektirmez)
// =========================================================================
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  return audioCtx;
}

function sesCal(tip) {
  if (!sesAcik) return;
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (tip === 'beep') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (tip === 'go') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    } else if (tip === 'boost') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(720, now + 0.22);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (tip === 'win') {
      const notalar = [523.25, 659.25, 783.99, 1046.5];
      notalar.forEach((frekans, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.setValueAtTime(frekans, now + idx * 0.11);
        g.gain.setValueAtTime(0.14, now + idx * 0.11);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.11 + 0.35);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(now + idx * 0.11);
        o.stop(now + idx * 0.11 + 0.35);
      });
    }
  } catch (_) {}
}

// =========================================================================
// BİLDİRİM (TOAST) YARDIMCISI
// =========================================================================
function bildirimGoster(mesaj) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = mesaj;
  container.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 3400);
}

// =========================================================================
// VERİ OKUMA VE KAYDETME MOTORU (file://, localhost:3000, GitHub Pages)
// =========================================================================
function sunucuDurumRozetiniGuncelle(modMetni) {
  const textEl = document.getElementById('serverModeText');
  if (textEl) textEl.textContent = modMetni;
}

async function aracDosyalariniOku(sessiz = false) {
  const oncekiHazirSayisi = gruplar.filter((g) => g.pistteMi).length;
  const isFileProtocol = window.location.protocol === 'file:';

  // 1) Eğer HTTP/HTTPS üzerinden açıldıysa önce yerel Node.js API'sini (/api/araclar) dene
  let apiBasarili = false;
  if (!isFileProtocol) {
    try {
      const apiRes = await fetch(`/api/araclar?t=${Date.now()}`, { cache: 'no-store' });
      if (apiRes.ok) {
        const veri = await apiRes.json();
        if (veri && Array.isArray(veri.araclar)) {
          yerelNodeSunucuAktif = true;
          apiBasarili = true;
          sunucuDurumRozetiniGuncelle('🟢 Yerel Sunucu Aktif (Canlı Disk)');

          veri.araclar.forEach((dosyaAraci) => {
            const hedef = gruplar.find((g) => g.kod === dosyaAraci.kod);
            if (hedef) {
              hedef.pistteMi = Boolean(dosyaAraci.pistteMi);
              if (dosyaAraci.aracEmoji) hedef.aracEmoji = dosyaAraci.aracEmoji;
              if (dosyaAraci.renk) hedef.renk = dosyaAraci.renk;
              if (dosyaAraci.slogan) hedef.slogan = dosyaAraci.slogan;
            }
          });
        }
      }
    } catch (_) {
      yerelNodeSunucuAktif = false;
    }
  }

  // 2) Eğer Node.js API yoksa fakat Live Server veya GitHub Pages üzerindeysek statik araclar/*.json oku
  if (!apiBasarili && !isFileProtocol) {
    sunucuDurumRozetiniGuncelle('🌐 Web / Live Server Modu');
    for (let i = 0; i < gruplar.length; i++) {
      const g = gruplar[i];
      try {
        const res = await fetch(`araclar/${g.kod}.json?t=${Date.now()}`, { cache: 'no-store' });
        if (res.ok) {
          const dosyaVerisi = await res.json();
          g.pistteMi = Boolean(dosyaVerisi.pistteMi);
          if (dosyaVerisi.aracEmoji) g.aracEmoji = dosyaVerisi.aracEmoji;
          if (dosyaVerisi.renk) g.renk = dosyaVerisi.renk;
          if (dosyaVerisi.slogan) g.slogan = dosyaVerisi.slogan;
        }
      } catch (_) {}

      if (hakemOverrides[g.kod]) {
        const ov = hakemOverrides[g.kod];
        if (typeof ov.pistteMi === 'boolean') g.pistteMi = ov.pistteMi;
        if (ov.aracEmoji) g.aracEmoji = ov.aracEmoji;
        if (ov.renk) g.renk = ov.renk;
        if (ov.slogan) g.slogan = ov.slogan;
      }
    }
  }

  // 3) Eğer doğrudan çift tıklanarak (file://) açıldıysa konsolda CORS hatası üretmeden yerel hafızayı kullan
  if (isFileProtocol) {
    sunucuDurumRozetiniGuncelle('💻 Çevrimdışı Dosya Modu');
    gruplar.forEach((g) => {
      if (hakemOverrides[g.kod]) {
        const ov = hakemOverrides[g.kod];
        if (typeof ov.pistteMi === 'boolean') g.pistteMi = ov.pistteMi;
        if (ov.aracEmoji) g.aracEmoji = ov.aracEmoji;
        if (ov.renk) g.renk = ov.renk;
        if (ov.slogan) g.slogan = ov.slogan;
      }
    });
  }

  const yeniHazirSayisi = gruplar.filter((g) => g.pistteMi).length;
  if (yeniHazirSayisi > oncekiHazirSayisi) {
    sesCal('boost');
    bildirimGoster(`🎉 Yeni grup piste katıldı! Pistte hazır: ${yeniHazirSayisi} / 10`);
  } else if (!sessiz) {
    bildirimGoster(`🔄 Araç verileri güncellendi (${yeniHazirSayisi} / 10 grup pistte).`);
  }

  arayuzuGuncelle();
}

async function grupAraciniKaydet(kod, degisiklikler) {
  const g = gruplar.find((item) => item.kod === kod);
  if (!g) return;

  if (typeof degisiklikler.pistteMi === 'boolean') g.pistteMi = degisiklikler.pistteMi;
  if (degisiklikler.aracEmoji) g.aracEmoji = degisiklikler.aracEmoji;
  if (degisiklikler.renk) g.renk = degisiklikler.renk;
  if (degisiklikler.slogan) g.slogan = degisiklikler.slogan;

  // Yerel hafızaya da kaydet
  hakemOverrides[kod] = {
    pistteMi: g.pistteMi,
    aracEmoji: g.aracEmoji,
    renk: g.renk,
    slogan: g.slogan
  };
  try {
    localStorage.setItem('itp_hakem_overrides', JSON.stringify(hakemOverrides));
  } catch (_) {}

  // Eğer yerel Node.js sunucusu aktifse gerçek araclar/<kod>.json dosyasına da yaz!
  if (yerelNodeSunucuAktif) {
    try {
      await fetch('/api/arac-guncelle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kod: g.kod,
          pistteMi: g.pistteMi,
          aracEmoji: g.aracEmoji,
          renk: g.renk,
          slogan: g.slogan
        })
      });
    } catch (_) {}
  }

  arayuzuGuncelle();
}

async function topluDurumDegistir(pistteMiDegeri) {
  gruplar.forEach((g) => {
    g.pistteMi = pistteMiDegeri;
    hakemOverrides[g.kod] = { ...hakemOverrides[g.kod], pistteMi: pistteMiDegeri };
  });
  try {
    localStorage.setItem('itp_hakem_overrides', JSON.stringify(hakemOverrides));
  } catch (_) {}

  if (yerelNodeSunucuAktif) {
    try {
      await fetch('/api/toplu-durum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pistteMi: pistteMiDegeri })
      });
    } catch (_) {}
  }

  if (pistteMiDegeri) sesCal('boost');
  arayuzuGuncelle();
}

// =========================================================================
// SEKME 1: GÖREV REHBERİ VE KOMUT ÜRETİCİ RENDER
// =========================================================================
function rehberSekmesiniHazirla() {
  const selectorGrid = document.getElementById('groupSelectorButtons');
  if (!selectorGrid) return;

  selectorGrid.innerHTML = '';

  // 10 Yarışçı Grup Butonu
  gruplar.forEach((g) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `group-chip ${g.kod === seciliRehberGrupKod ? 'active' : ''}`;
    btn.dataset.kod = g.kod;
    btn.innerHTML = `<span>${g.aracEmoji}</span> <span>#${g.grupNo} ${g.grupAdi}</span>`;
    btn.addEventListener('click', () => {
      seciliRehberGrupKod = g.kod;
      seciliGrubaGoreRehberiGuncelle();
    });
    selectorGrid.appendChild(btn);
  });

  // 11. Buton: Nohut Dürüm Canlı Kodlama Demo Butonu
  const demoBtn = document.createElement('button');
  demoBtn.type = 'button';
  demoBtn.className = `group-chip ${seciliRehberGrupKod === 'ornek-demo' ? 'active' : ''}`;
  demoBtn.dataset.kod = 'ornek-demo';
  demoBtn.style.gridColumn = 'span 2';
  demoBtn.innerHTML = `<span>🌯</span> <span>Nohut Dürüm (Canlı Kodlama Demo)</span>`;
  demoBtn.addEventListener('click', () => {
    seciliRehberGrupKod = 'ornek-demo';
    seciliGrubaGoreRehberiGuncelle();
  });
  selectorGrid.appendChild(demoBtn);

  seciliGrubaGoreRehberiGuncelle();
}

function seciliGrubaGoreRehberiGuncelle() {
  const isDemo = seciliRehberGrupKod === 'ornek-demo';
  const g = isDemo
    ? NOHUT_DEMO_BILGISI
    : gruplar.find((item) => item.kod === seciliRehberGrupKod) || gruplar[0];

  // Aktif chip işaretle
  document.querySelectorAll('#groupSelectorButtons .group-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.kod === g.kod);
  });

  // Grup bilgi afişi
  const banner = document.getElementById('selectedGroupBanner');
  if (banner) {
    banner.style.borderLeftColor = g.renk;
    banner.innerHTML = `
      <div>
        <strong>${isDemo ? '🌯 Canlı Kodlama Örneği:' : `Grup #${g.grupNo}:`} ${g.grupAdi}</strong> <span class="mono-tag">(${g.sunumHaftasi})</span>
        <div style="font-size:0.82rem; color:#cbd5e1; margin-top:2px;">
          👥 Üyeler: ${g.uyeler.join(' • ')}
        </div>
      </div>
      <div>
        <span class="badge ${g.pistteMi ? 'badge-green' : 'badge-orange'}">
          ${isDemo ? '🌯 Sunum Demo Dosyası' : g.pistteMi ? '🟢 Pistte Hazır!' : '⏳ PR Bekleniyor'}
        </span>
      </div>
    `;
  }

  const repoUrlOrnek = bagliGithubRepo
    ? `https://github.com/${bagliGithubRepo}.git`
    : `https://github.com/Faruk-T/itp2026-hafta5-git-grand-prix.git`;

  const dalAdi = isDemo ? 'ozellik/safety-car' : `grup/${g.kod}`;

  // 5 Adımlık Komut Listesi
  const adimlar = [
    {
      baslik: '1️⃣ Depoyu Bilgisayarına İndir (Clone)',
      komut: `git clone ${repoUrlOrnek}`
    },
    {
      baslik: `2️⃣ Çakışma Olmaması İçin Kendi Dalını (Branch) Aç`,
      komut: `git checkout -b ${dalAdi}`
    },
    {
      baslik: `3️⃣ Sadece Kendi Dosyanı Düzenle: araclar/${g.kod}.json`,
      komut: `code araclar/${g.kod}.json`
    },
    {
      baslik: '4️⃣ Değişikliği Kaydet ve Anlamlı Commit At (Yönerge Madde 13)',
      komut: `git add araclar/${g.kod}.json && git commit -m "ozellik(${g.kod}): yaris araci piste cikti"`
    },
    {
      baslik: "5️⃣ Dalını GitHub'a Gönder ve Tek Bir Pull Request (PR) Aç!",
      komut: `git push -u origin ${dalAdi}`
    }
  ];

  const timeline = document.getElementById('commandTimeline');
  if (timeline) {
    timeline.innerHTML = adimlar
      .map(
        (a) => `
      <div class="timeline-item">
        <div class="timeline-head">
          <span class="timeline-title">${a.baslik}</span>
          <button type="button" class="btn btn-sm btn-outline copy-cmd-btn" data-cmd="${a.komut.replace(/"/g, '&quot;')}">
            📋 Kopyala
          </button>
        </div>
        <div class="cmd-row">
          <code>${a.komut}</code>
        </div>
      </div>
    `
      )
      .join('');

    timeline.querySelectorAll('.copy-cmd-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(btn.getAttribute('data-cmd'));
        bildirimGoster('📋 Komut panoya kopyalandı!');
      });
    });
  }

  // Sağ taraftaki JSON Üreticiyi seçili gruba göre doldur
  const colorInput = document.getElementById('builderColor');
  const colorHex = document.getElementById('builderColorHex');
  const sloganInput = document.getElementById('builderSlogan');
  const targetBadge = document.getElementById('targetJsonFileBadge');
  const previewName = document.getElementById('previewFileName');

  if (colorInput) colorInput.value = g.renk;
  if (colorHex) colorHex.textContent = g.renk;
  if (sloganInput) sloganInput.value = g.slogan;
  if (targetBadge) targetBadge.textContent = `araclar/${g.kod}.json`;
  if (previewName) previewName.textContent = `araclar/${g.kod}.json`;

  document.querySelectorAll('#emojiPicker .emoji-btn').forEach((eb) => {
    eb.classList.toggle('selected', eb.getAttribute('data-emoji') === g.aracEmoji);
  });

  jsonOnizlemesiniGuncelle();
}

function jsonOnizlemesiniGuncelle() {
  const isDemo = seciliRehberGrupKod === 'ornek-demo';
  const g = isDemo
    ? NOHUT_DEMO_BILGISI
    : gruplar.find((item) => item.kod === seciliRehberGrupKod) || gruplar[0];

  const seciliEmojiEl = document.querySelector('#emojiPicker .emoji-btn.selected');
  const emoji = seciliEmojiEl ? seciliEmojiEl.getAttribute('data-emoji') : g.aracEmoji;
  const renk = document.getElementById('builderColor')?.value || g.renk;
  const slogan = document.getElementById('builderSlogan')?.value || g.slogan;

  const ornekNesne = isDemo
    ? {
        organizatorGrup: 'Nohut Dürüm (Hafta 5)',
        uyeler: g.uyeler,
        demoHazirMi: true,
        mesaj: slogan
      }
    : {
        grupNo: g.grupNo,
        kod: g.kod,
        grupAdi: g.grupAdi,
        sunumHaftasi: g.sunumHaftasi,
        uyeler: g.uyeler,
        pistteMi: true,
        aracEmoji: emoji,
        renk: renk,
        slogan: slogan
      };

  const previewBlock = document.getElementById('jsonPreviewBlock');
  if (previewBlock) {
    previewBlock.textContent = JSON.stringify(ornekNesne, null, 2);
  }
}

// =========================================================================
// SEKME 2: CANLI GARAJ VE PR LOBİSİ RENDER
// =========================================================================
function garajSekmesiniRenderEt() {
  const hazirSayisi = gruplar.filter((g) => g.pistteMi).length;
  const readyCountText = document.getElementById('readyCountText');
  const progressBar = document.getElementById('garageProgressBar');

  if (readyCountText) readyCountText.textContent = `${hazirSayisi} / 10`;
  if (progressBar) progressBar.style.width = `${(hazirSayisi / 10) * 100}%`;

  const grid = document.getElementById('garageCardsGrid');
  if (!grid) return;

  grid.innerHTML = gruplar
    .map(
      (g) => `
    <div class="garage-card ${g.pistteMi ? 'ready' : ''}">
      <div>
        <div class="garage-card-top">
          <div class="garage-car-avatar" style="border-color: ${g.renk}">
            ${g.aracEmoji}
          </div>
          <span class="badge ${g.pistteMi ? 'badge-green' : 'badge-orange'}">
            ${g.pistteMi ? '🟢 PİSTTE HAZIR' : '⏳ PR BEKLENİYOR'}
          </span>
        </div>
        <div style="margin-top: 10px;">
          <div class="garage-group-title" style="color: ${g.renk}">
            #${g.grupNo} ${g.grupAdi}
          </div>
          <small style="color:#94a3b8">${g.sunumHaftasi} • <code>araclar/${g.kod}.json</code></small>
        </div>
        <ul class="garage-members" style="margin-top: 8px;">
          ${g.uyeler.map((u) => `<li>👤 ${u}</li>`).join('')}
        </ul>
      </div>

      <div>
        <div class="garage-slogan">"${g.slogan}"</div>
        <div class="garage-card-footer" style="margin-top: 8px;">
          <small style="color:#94a3b8">Dal: <code>grup/${g.kod}</code></small>
          <button type="button" class="btn btn-sm ${g.pistteMi ? 'btn-outline' : 'btn-primary'} toggle-ready-btn" data-kod="${g.kod}">
            ${g.pistteMi ? 'Garaja Çek' : 'Piste Çıkar'}
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  grid.querySelectorAll('.toggle-ready-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const kod = btn.getAttribute('data-kod');
      const grup = gruplar.find((item) => item.kod === kod);
      if (!grup) return;
      const yeniDurum = !grup.pistteMi;
      if (yeniDurum) sesCal('boost');
      grupAraciniKaydet(kod, { pistteMi: yeniDurum });
    });
  });
}

// =========================================================================
// SEKME 3: GİT GRAND PRIX YARIŞ PİSTİ VE %100 RASTGELE ŞANS MOTORU
// =========================================================================
function pistKulvarlariniCiz(yarisDurumu = null) {
  const container = document.getElementById('trackLanesContainer');
  if (!container) return;

  const filtreModu = document.getElementById('raceFilterMode')?.value || 'all';

  container.innerHTML = gruplar
    .map((g, index) => {
      const aktifMi = filtreModu === 'all' ? true : g.pistteMi;
      const durum = yarisDurumu ? yarisDurumu[index] : { ilerleme: 0, sira: index + 1, aktifOlay: null };
      const ilerlemeYuzde = Math.min(100, Math.max(0, durum.ilerleme));
      const solPozisyon = 3 + (ilerlemeYuzde / 100) * 94;

      let rankSinifi = '';
      if (durum.sira === 1) rankSinifi = 'rank-1';
      else if (durum.sira === 2) rankSinifi = 'rank-2';
      else if (durum.sira === 3) rankSinifi = 'rank-3';

      return `
      <div class="track-lane ${aktifMi ? '' : 'inactive-lane'}" id="lane-${g.kod}">
        <div class="lane-info" style="border-left: 4px solid ${g.renk}">
          <div class="lane-group-meta">
            <span class="lane-group-name">${g.aracEmoji} #${g.grupNo} ${g.grupAdi}</span>
            <span class="lane-group-members" title="${g.uyeler.join(', ')}">${g.uyeler.join(', ')}</span>
          </div>
          <div class="lane-rank-badge ${rankSinifi}" id="rank-${g.kod}">
            ${aktifMi ? durum.sira : '-'}
          </div>
        </div>

        <div class="lane-road">
          <div class="lane-progress-trail" id="trail-${g.kod}" style="width: ${ilerlemeYuzde}%; background: ${g.renk};"></div>
          <div class="lane-car" id="car-${g.kod}" style="left: ${solPozisyon}%;">
            <span class="car-emoji-sprite">${g.aracEmoji}</span>
            <span id="event-pill-${g.kod}">
              ${
                durum.aktifOlay
                  ? `<span class="car-event-pill ${durum.aktifOlay.tip === 'boost' ? 'event-boost' : 'event-slow'}">${durum.aktifOlay.etiket}</span>`
                  : ''
              }
            </span>
          </div>
        </div>

        <div class="lane-finish-line"></div>
      </div>
    `;
    })
    .join('');

  canliSiralamayiGuncelle(yarisDurumu);
}

function canliSiralamayiGuncelle(yarisDurumu = null) {
  const lb = document.getElementById('liveLeaderboard');
  if (!lb) return;

  const liste = gruplar.map((g, idx) => ({
    grup: g,
    ilerleme: yarisDurumu ? yarisDurumu[idx].ilerleme : 0,
    bitisZamani: yarisDurumu ? yarisDurumu[idx].bitisZamani : null,
    aktifMi: yarisDurumu ? yarisDurumu[idx].aktifMi : true
  }));

  liste.sort((a, b) => {
    if (a.aktifMi !== b.aktifMi) return a.aktifMi ? -1 : 1;
    if (a.bitisZamani && b.bitisZamani) return a.bitisZamani - b.bitisZamani;
    if (a.bitisZamani) return -1;
    if (b.bitisZamani) return 1;
    return b.ilerleme - a.ilerleme;
  });

  lb.innerHTML = liste
    .map((item, siraIdx) => {
      const madalya = siraIdx === 0 ? '🥇' : siraIdx === 1 ? '🥈' : siraIdx === 2 ? '🥉' : `${siraIdx + 1}.`;
      return `
      <div class="lb-row" style="border-left: 3px solid ${item.grup.renk}">
        <div class="lb-left">
          <span>${madalya}</span>
          <span>${item.grup.aracEmoji} ${item.grup.grupAdi}</span>
        </div>
        <span class="lb-pct">%${Math.floor(item.ilerleme)}</span>
      </div>
    `;
    })
    .join('');
}

function adilRastgele() {
  if (window.crypto && window.crypto.getRandomValues) {
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    return arr[0] / (0xffffffff + 1);
  }
  return Math.random();
}

function yarisiBaslat() {
  if (yarisDevamEdiyor) return;

  const filtreModu = document.getElementById('raceFilterMode')?.value || 'all';
  const katilanGruplar = gruplar.filter((g) => (filtreModu === 'all' ? true : g.pistteMi));

  if (katilanGruplar.length < 2) {
    bildirimGoster('⚠️ Yarış için en az 2 grup gerekli! ("Tüm 10 Grubu Yarıştır" modunu seçebilirsiniz)');
    return;
  }

  yarisDevamEdiyor = true;
  document.getElementById('startRaceBtn').disabled = true;
  document.getElementById('resetRaceBtn').disabled = true;
  document.getElementById('podiumModal')?.classList.add('hidden');

  const eventLog = document.getElementById('raceEventLog');
  if (eventLog) eventLog.innerHTML = '';

  const overlay = document.getElementById('countdownOverlay');
  const countNum = document.getElementById('countdownNumber');
  overlay.classList.remove('hidden');

  let sayac = 3;
  countNum.textContent = '3';
  sesCal('beep');

  const geriSayimTimer = setInterval(() => {
    sayac--;
    if (sayac > 0) {
      countNum.textContent = String(sayac);
      sesCal('beep');
    } else if (sayac === 0) {
      countNum.textContent = '🏁 GO!';
      sesCal('go');
    } else {
      clearInterval(geriSayimTimer);
      overlay.classList.add('hidden');
      gercekYarisDongusunuCalistir();
    }
  }, 750);
}

function gercekYarisDongusunuCalistir() {
  const filtreModu = document.getElementById('raceFilterMode')?.value || 'all';
  const hizModu = document.getElementById('raceSpeedMode')?.value || 'normal';

  const temelHizCarpani = hizModu === 'fast' ? 1.65 : hizModu === 'epic' ? 0.68 : 1.0;

  const yarisDurumu = gruplar.map((g, idx) => ({
    idx,
    grup: g,
    aktifMi: filtreModu === 'all' ? true : g.pistteMi,
    ilerleme: 0,
    aktifOlay: null,
    olayBitisZamani: 0,
    bitisZamani: null,
    sira: idx + 1
  }));

  pistKulvarlariniCiz(yarisDurumu);

  const baslangicZamani = performance.now();
  let sonKareZamani = baslangicZamani;
  let sonOlayZamani = baslangicZamani;
  let sonSpikerDegisimi = 0;

  const spikerEl = document.getElementById('liveCommentaryText');
  const timerEl = document.getElementById('raceTimerDisplay');

  if (spikerEl) {
    spikerEl.textContent = '🚦 BAYRAK İNDİ! 10 grup aynı anda gaza bastı! Bakalım şans kime gülecek?!';
  }

  function kareGuncelle(simdi) {
    const dt = (simdi - sonKareZamani) / 1000;
    sonKareZamani = simdi;
    const gecenSure = (simdi - baslangicZamani) / 1000;

    if (timerEl) timerEl.textContent = `${gecenSure.toFixed(1)}s`;

    const aktifler = yarisDurumu.filter((d) => d.aktifMi);
    const ortIlerleme = aktifler.reduce((acc, d) => acc + d.ilerleme, 0) / Math.max(1, aktifler.length);

    if (simdi - sonOlayZamani > 1100 && ortIlerleme < 92) {
      sonOlayZamani = simdi;
      const devamEdenler = aktifler.filter((d) => !d.bitisZamani && d.ilerleme > 6 && d.ilerleme < 93);
      if (devamEdenler.length > 0) {
        const secilenYarisci = devamEdenler[Math.floor(adilRastgele() * devamEdenler.length)];
        const rastgeleOlay = RASTGELE_OLAYLAR[Math.floor(adilRastgele() * RASTGELE_OLAYLAR.length)];

        secilenYarisci.aktifOlay = rastgeleOlay;
        secilenYarisci.olayBitisZamani = simdi + 1600;

        const duyuru = rastgeleOlay.mesaj(secilenYarisci.grup.grupAdi);
        if (spikerEl) spikerEl.textContent = duyuru;
        olayGunluguneEkle(duyuru, rastgeleOlay.tip);
        if (rastgeleOlay.tip === 'boost') sesCal('boost');
      }
    }

    yarisDurumu.forEach((d) => {
      if (!d.aktifMi || d.bitisZamani) return;

      if (d.aktifOlay && simdi > d.olayBitisZamani) {
        d.aktifOlay = null;
      }

      const rastgeleAtilim = 1.6 + adilRastgele() * 6.8;
      const olayCarpani = d.aktifOlay ? d.aktifOlay.carpan : 1.0;

      let dengeCarpani = 1.0;
      if (d.ilerleme < 82) {
        const fark = ortIlerleme - d.ilerleme;
        dengeCarpani = Math.max(0.65, Math.min(1.45, 1 + fark * 0.035));
      } else {
        dengeCarpani = 0.75 + adilRastgele() * 0.85;
      }

      const artis = rastgeleAtilim * olayCarpani * dengeCarpani * temelHizCarpani * dt;
      d.ilerleme = Math.min(100, d.ilerleme + artis);

      if (d.ilerleme >= 100 && !d.bitisZamani) {
        d.ilerleme = 100;
        d.bitisZamani = simdi + adilRastgele() * 0.001;
      }
    });

    const sirali = [...yarisDurumu].sort((a, b) => {
      if (a.aktifMi !== b.aktifMi) return a.aktifMi ? -1 : 1;
      if (a.bitisZamani && b.bitisZamani) return a.bitisZamani - b.bitisZamani;
      if (a.bitisZamani) return -1;
      if (b.bitisZamani) return 1;
      return b.ilerleme - a.ilerleme;
    });

    sirali.forEach((item, sIdx) => {
      item.sira = sIdx + 1;
    });

    if (simdi - sonSpikerDegisimi > 2400 && sirali[0] && sirali[0].ilerleme > 80 && !sirali[0].bitisZamani) {
      sonSpikerDegisimi = simdi;
      if (spikerEl) {
        spikerEl.textContent = `🔥 SON DÜZLÜK! ${sirali[0].grup.grupAdi} ("${sirali[0].grup.slogan}") lider götürüyor ama fark çok az!`;
      }
    }

    yarisDurumu.forEach((d) => {
      const g = d.grup;
      const solPozisyon = 3 + (d.ilerleme / 100) * 94;
      const carEl = document.getElementById(`car-${g.kod}`);
      const trailEl = document.getElementById(`trail-${g.kod}`);
      const rankEl = document.getElementById(`rank-${g.kod}`);
      const pillEl = document.getElementById(`event-pill-${g.kod}`);

      if (carEl) carEl.style.left = `${solPozisyon}%`;
      if (trailEl) trailEl.style.width = `${d.ilerleme}%`;
      if (rankEl && d.aktifMi) {
        rankEl.textContent = String(d.sira);
        rankEl.className = `lane-rank-badge ${
          d.sira === 1 ? 'rank-1' : d.sira === 2 ? 'rank-2' : d.sira === 3 ? 'rank-3' : ''
        }`;
      }
      if (pillEl) {
        pillEl.innerHTML = d.aktifOlay
          ? `<span class="car-event-pill ${d.aktifOlay.tip === 'boost' ? 'event-boost' : 'event-slow'}">${d.aktifOlay.etiket}</span>`
          : '';
      }
    });

    canliSiralamayiGuncelle(yarisDurumu);

    const bitirenSayisi = aktifler.filter((d) => d.bitisZamani !== null).length;
    if (bitirenSayisi === aktifler.length) {
      yarisiBitirVePodyumuGoster(sirali.filter((d) => d.aktifMi));
      return;
    }

    yarisAnimasyonId = requestAnimationFrame(kareGuncelle);
  }

  yarisAnimasyonId = requestAnimationFrame(kareGuncelle);
}

function olayGunluguneEkle(metin, tip) {
  const list = document.getElementById('raceEventLog');
  if (!list) return;
  const div = document.createElement('div');
  div.className = `event-item ${tip}`;
  div.textContent = metin;
  list.prepend(div);
}

function konfetiYagdir() {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  container.innerHTML = '';
  const renkler = ['#fbbf24', '#ef4444', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'];
  for (let i = 0; i < 55; i++) {
    const parca = document.createElement('div');
    parca.className = 'confetti-piece';
    parca.style.left = `${Math.random() * 100}%`;
    parca.style.backgroundColor = renkler[i % renkler.length];
    parca.style.animationDuration = `${1.8 + Math.random() * 2.2}s`;
    parca.style.animationDelay = `${Math.random() * 0.6}s`;
    container.appendChild(parca);
  }
}

function yarisiBitirVePodyumuGoster(siraliSonuclar) {
  yarisDevamEdiyor = false;
  document.getElementById('startRaceBtn').disabled = false;
  document.getElementById('resetRaceBtn').disabled = false;

  sesCal('win');
  konfetiYagdir();

  const birinci = siraliSonuclar[0]?.grup;
  const ikinci = siraliSonuclar[1]?.grup;
  const ucuncu = siraliSonuclar[2]?.grup;

  const spikerEl = document.getElementById('liveCommentaryText');
  if (spikerEl && birinci) {
    spikerEl.textContent = `🏆 ŞAMPİYON BELLİ OLDU! 1. ${birinci.grupAdi} 🥇 | 2. ${ikinci?.grupAdi || '-'} 🥈 | 3. ${ucuncu?.grupAdi || '-'} 🥉`;
  }

  const stage = document.getElementById('podiumStage');
  if (stage) {
    const podyumSirasi = [
      { yer: 2, madalya: '🥈 2.LİK', veri: ikinci },
      { yer: 1, madalya: '🥇 ŞAMPİYON', veri: birinci },
      { yer: 3, madalya: '🥉 3.LÜK', veri: ucuncu }
    ].filter((p) => p.veri);

    stage.innerHTML = podyumSirasi
      .map(
        (p) => `
      <div class="podium-pillar place-${p.yer}">
        <div class="podium-medal">${p.madalya}</div>
        <div class="podium-car">${p.veri.aracEmoji}</div>
        <div class="podium-group-name" style="color: ${p.veri.renk}">
          #${p.veri.grupNo} ${p.veri.grupAdi}
        </div>
        <div class="podium-members">${p.veri.uyeler.join(' • ')}</div>
        <div class="podium-slogan">"${p.veri.slogan}"</div>
      </div>
    `
      )
      .join('');
  }

  const digerSonuclar = document.getElementById('podiumFullResults');
  if (digerSonuclar) {
    digerSonuclar.innerHTML = siraliSonuclar
      .slice(3)
      .map(
        (d, idx) => `
      <span class="result-chip">
        <strong>${idx + 4}.</strong> ${d.grup.aracEmoji} ${d.grup.grupAdi}
      </span>
    `
      )
      .join('');
  }

  setTimeout(() => {
    document.getElementById('podiumModal')?.classList.remove('hidden');
  }, 550);
}

// =========================================================================
// SEKME 4: CANLI GİT/CI TERMİNALİ, MERGE CONFLICT SİMÜLATÖRÜ & HAKEM TABLOSU
// =========================================================================
async function ciMuayeneCalistir() {
  const outEl = document.getElementById('liveTerminalOutput');
  if (!outEl) return;

  if (yerelNodeSunucuAktif) {
    outEl.textContent = '⏳ node scripts/muayene-kontrol.js çalıştırılıyor...';
    try {
      const res = await fetch('/api/muayene');
      const veri = await res.json();
      outEl.textContent = veri.cikti || 'Tamamlandı.';
      sesCal('boost');
      return;
    } catch (_) {}
  }

  // Çevrimdışı / Statik modda simülasyon çıktısı üret
  const hazirSayisi = gruplar.filter((g) => g.pistteMi).length;
  const satirlar = [
    '==============================================================',
    '🏁 GİT GRAND PRIX - GITHUB ACTIONS TEKNİK MUAYENE BAŞLADI 🏁',
    '🌯 Hakem Heyeti: Nohut Dürüm (Tamer, Faruk, Muayad)',
    '==============================================================',
    '',
    ...gruplar.map((g) =>
      g.pistteMi
        ? `✅ [PİSTTE HAZIR] Grup #${g.grupNo} ${g.grupAdi} (${g.aracEmoji}) -> "${g.slogan}"`
        : `⏳ [GARAJDA BEKLİYOR] Grup #${g.grupNo} ${g.grupAdi} (pistteMi: false)`
    ),
    '',
    '--------------------------------------------------------------',
    `📊 ÖZET: Toplam 10 Gruptan ${hazirSayisi} tanesi başlangıç çizgisinde hazır!`,
    '🔍 Hata Sayısı: 0',
    '🎉 Tüm araç dosyaları teknik muayeneden başarıyla geçti!'
  ];
  outEl.textContent = satirlar.join('\n');
  sesCal('boost');
}

async function gitDurumunuGoster() {
  const outEl = document.getElementById('liveTerminalOutput');
  if (!outEl) return;

  if (yerelNodeSunucuAktif) {
    outEl.textContent = '⏳ Git depo bilgileri okunuyor...';
    try {
      const res = await fetch('/api/git-durum');
      const veri = await res.json();
      outEl.textContent = [
        '🌿 AKTİF DALLAR (git branch -a):',
        veri.dallar || '  * main',
        '',
        '📜 SON COMMİTLER (git log --oneline):',
        veri.sonCommitler || '  Henüz commit yok',
        '',
        '🌐 UZAK DEPO (git remote -v):',
        veri.uzakDepo || '  Henüz uzak depo bağlanmadı'
      ].join('\n');
      return;
    } catch (_) {}
  }

  outEl.textContent = [
    '🌿 AKTİF DALLAR (git branch -a):',
    '  * main',
    '    ozellik/safety-car',
    '',
    '🌐 UZAK DEPO:',
    `  origin  https://github.com/${bagliGithubRepo}.git (fetch/push)`
  ].join('\n');
}

function conflictSimulatorunuHazirla() {
  const codeEl = document.getElementById('conflictCodeDisplay');
  const statusEl = document.getElementById('conflictStatusMsg');
  if (!codeEl || !statusEl) return;

  const cakismaMetni = `{
  "organizatorGrup": "Nohut Dürüm (Hafta 5)",
  "uyeler": ["Tamer Çelik", "Faruk Tazeoğlu", "Muayad Jumaah"],
<<<<<<< HEAD (main dalı)
  "mesaj": "Git Grand Prix Güvenlik Aracı Hazır! 🏁"
=======
  "mesaj": "Nohut Dürüm Turbo Güvenlik Aracı Pistte! 🌯🚀"
>>>>>>> ozellik/turbo-mesaj (gelen dal)
}`;

  const cozumler = {
    reset: {
      kod: cakismaMetni,
      durum: '⚠️ <strong>Çakışma Algılandı!</strong> İki dal aynı satırı (<code>"mesaj"</code>) değiştirdiği için Git otomatik birleştiremedi. Yukarıdan bir çözüm seçin.'
    },
    current: {
      kod: `{
  "organizatorGrup": "Nohut Dürüm (Hafta 5)",
  "uyeler": ["Tamer Çelik", "Faruk Tazeoğlu", "Muayad Jumaah"],
  "mesaj": "Git Grand Prix Güvenlik Aracı Hazır! 🏁"
}`,
      durum: '✅ <strong>Çakışma Çözüldü (Mevcut Dal Seçildi):</strong> <code><<<<<<<</code>, <code>=======</code> ve <code>>>>>>>></code> işaretleri temizlendi, commit atılmaya hazır!'
    },
    incoming: {
      kod: `{
  "organizatorGrup": "Nohut Dürüm (Hafta 5)",
  "uyeler": ["Tamer Çelik", "Faruk Tazeoğlu", "Muayad Jumaah"],
  "mesaj": "Nohut Dürüm Turbo Güvenlik Aracı Pistte! 🌯🚀"
}`,
      durum: '✅ <strong>Çakışma Çözüldü (Gelen Dal Seçildi):</strong> Yeni özellik dalındaki değişiklik kabul edildi ve işaretler temizlendi!'
    },
    both: {
      kod: `{
  "organizatorGrup": "Nohut Dürüm (Hafta 5)",
  "uyeler": ["Tamer Çelik", "Faruk Tazeoğlu", "Muayad Jumaah"],
  "mesaj": "Git Grand Prix & Nohut Dürüm Turbo Güvenlik Aracı Pistte! 🌯🏁🚀"
}`,
      durum: '✅ <strong>Çakışma Çözüldü (İki Dal Birleştirildi):</strong> Her iki ekip arkadaşının katkısı tek satırda harmanlandı!'
    }
  };

  codeEl.textContent = cozumler.reset.kod;
  statusEl.innerHTML = cozumler.reset.durum;

  document.querySelectorAll('[data-resolve]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tip = btn.getAttribute('data-resolve');
      const secim = cozumler[tip] || cozumler.reset;
      codeEl.textContent = secim.kod;
      statusEl.innerHTML = secim.durum;
      if (tip !== 'reset') sesCal('boost');
    });
  });
}

function hakemTablosunuRenderEt() {
  const tbody = document.getElementById('refereeTableBody');
  if (!tbody) return;

  tbody.innerHTML = gruplar
    .map(
      (g) => `
    <tr>
      <td><strong>#${g.grupNo}</strong></td>
      <td><strong style="color:${g.renk}">${g.grupAdi}</strong><br/><small style="color:#94a3b8">${g.uyeler.join(', ')}</small></td>
      <td>${g.aracEmoji}</td>
      <td><input type="text" class="ref-slogan-input" data-kod="${g.kod}" value="${g.slogan.replace(/"/g, '&quot;')}" style="padding:5px 8px; font-size:0.8rem;" /></td>
      <td>
        <button type="button" class="btn btn-sm ${g.pistteMi ? 'btn-success' : 'btn-outline'} ref-toggle-btn" data-kod="${g.kod}">
          ${g.pistteMi ? '🟢 Pistte (True)' : '⏳ Garajda (False)'}
        </button>
      </td>
    </tr>
  `
    )
    .join('');

  tbody.querySelectorAll('.ref-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const kod = btn.getAttribute('data-kod');
      const g = gruplar.find((item) => item.kod === kod);
      if (!g) return;
      grupAraciniKaydet(kod, { pistteMi: !g.pistteMi });
    });
  });

  tbody.querySelectorAll('.ref-slogan-input').forEach((inp) => {
    inp.addEventListener('change', () => {
      const kod = inp.getAttribute('data-kod');
      const g = gruplar.find((item) => item.kod === kod);
      if (!g) return;
      const yeniSlogan = inp.value.trim() || g.slogan;
      grupAraciniKaydet(kod, { slogan: yeniSlogan });
      bildirimGoster(`✏️ ${g.grupAdi} sloganı kaydedildi!`);
    });
  });
}

// =========================================================================
// TÜM ARAYÜZÜ GÜNCELLE
// =========================================================================
function arayuzuGuncelle() {
  seciliGrubaGoreRehberiGuncelle();
  garajSekmesiniRenderEt();
  if (!yarisDevamEdiyor) {
    pistKulvarlariniCiz();
  }
  hakemTablosunuRenderEt();
}

// =========================================================================
// OLAY DİNLEYİCİLERİ VE BAŞLATMA
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Sekme geçişleri
  document.querySelectorAll('.step-tab').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const hedefId = tabBtn.getAttribute('data-tab');
      document.querySelectorAll('.step-tab').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      tabBtn.classList.add('active');
      document.getElementById(hedefId)?.classList.add('active');
    });
  });

  document.getElementById('goToRaceFromGarageBtn')?.addEventListener('click', () => {
    document.querySelector('.step-tab[data-tab="tab-yaris"]')?.click();
  });

  document.getElementById('garageActivateAllBtn')?.addEventListener('click', () => {
    topluDurumDegistir(true);
    bildirimGoster('✅ Tüm 10 grup piste çıkarıldı!');
  });

  // Ses Aç/Kapat
  const soundBtn = document.getElementById('soundToggleBtn');
  soundBtn?.addEventListener('click', () => {
    sesAcik = !sesAcik;
    soundBtn.textContent = sesAcik ? '🔊 Ses Açık' : '🔇 Ses Kapalı';
  });

  // Verileri yenile
  document.getElementById('syncFilesBtn')?.addEventListener('click', () => {
    aracDosyalariniOku(false);
  });

  // Git Pull butonu
  document.getElementById('gitPullBtn')?.addEventListener('click', async () => {
    if (yerelNodeSunucuAktif) {
      bildirimGoster('⬇️ git pull çalıştırılıyor...');
      try {
        const res = await fetch('/api/git-pull', { method: 'POST' });
        const veri = await res.json();
        bildirimGoster(veri.basarili ? '✅ GitHub\'dan güncel PR değişiklikleri çekildi!' : 'ℹ️ Yerel depo güncel.');
      } catch (_) {}
    }
    aracDosyalariniOku(false);
  });

  // JSON Builder olayları
  document.querySelectorAll('#emojiPicker .emoji-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#emojiPicker .emoji-btn').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      jsonOnizlemesiniGuncelle();
    });
  });

  document.getElementById('builderColor')?.addEventListener('input', (e) => {
    const hexEl = document.getElementById('builderColorHex');
    if (hexEl) hexEl.textContent = e.target.value;
    jsonOnizlemesiniGuncelle();
  });

  document.getElementById('builderSlogan')?.addEventListener('input', () => {
    jsonOnizlemesiniGuncelle();
  });

  document.getElementById('copyJsonBtn')?.addEventListener('click', () => {
    const kod = document.getElementById('jsonPreviewBlock')?.textContent || '';
    navigator.clipboard.writeText(kod);
    bildirimGoster('📋 JSON kodu kopyalandı! Dosyanıza yapıştırıp kaydedebilirsiniz.');
  });

  document.getElementById('saveJsonToDiskBtn')?.addEventListener('click', () => {
    if (seciliRehberGrupKod === 'ornek-demo') {
      bildirimGoster('🌯 Nohut Dürüm Safety Car demo ayarları güncellendi!');
      return;
    }
    const seciliEmojiEl = document.querySelector('#emojiPicker .emoji-btn.selected');
    const emoji = seciliEmojiEl ? seciliEmojiEl.getAttribute('data-emoji') : '🏎️';
    const renk = document.getElementById('builderColor')?.value || '#ef4444';
    const slogan = document.getElementById('builderSlogan')?.value || 'Pistin hakimi!';

    sesCal('boost');
    grupAraciniKaydet(seciliRehberGrupKod, {
      pistteMi: true,
      aracEmoji: emoji,
      renk: renk,
      slogan: slogan
    });
    bildirimGoster(`💾 araclar/${seciliRehberGrupKod}.json kaydedildi ve grup piste çıkarıldı!`);
  });

  // Yarış Kontrolleri
  document.getElementById('startRaceBtn')?.addEventListener('click', yarisiBaslat);

  document.getElementById('resetRaceBtn')?.addEventListener('click', () => {
    if (yarisAnimasyonId) cancelAnimationFrame(yarisAnimasyonId);
    yarisDevamEdiyor = false;
    document.getElementById('startRaceBtn').disabled = false;
    document.getElementById('raceTimerDisplay').textContent = '00.0s';
    document.getElementById('liveCommentaryText').textContent =
      'Pist sıfırlandı! Yeni şans yarışı için başlangıç çizgisi hazır!';
    pistKulvarlariniCiz();
  });

  document.getElementById('raceFilterMode')?.addEventListener('change', () => {
    if (!yarisDevamEdiyor) pistKulvarlariniCiz();
  });

  document.getElementById('raceAgainBtn')?.addEventListener('click', () => {
    document.getElementById('podiumModal')?.classList.add('hidden');
    yarisiBaslat();
  });

  document.getElementById('closePodiumBtn')?.addEventListener('click', () => {
    document.getElementById('podiumModal')?.classList.add('hidden');
  });

  // Sekme 4: Canlı Terminal Butonları
  document.getElementById('runCiTestBtn')?.addEventListener('click', ciMuayeneCalistir);
  document.getElementById('runGitStatusBtn')?.addEventListener('click', gitDurumunuGoster);

  // Hakem Paneli Hızlı Butonları
  document.getElementById('markAllReadyBtn')?.addEventListener('click', () => {
    topluDurumDegistir(true);
    bildirimGoster('✅ Tüm 10 grup "Pistte Hazır" durumuna getirildi!');
  });

  document.getElementById('markAllWaitingBtn')?.addEventListener('click', () => {
    topluDurumDegistir(false);
    bildirimGoster('⏳ Tüm gruplar "Garajda Bekliyor" durumuna alındı.');
  });

  document.getElementById('resetLocalStorageBtn')?.addEventListener('click', () => {
    hakemOverrides = {};
    localStorage.removeItem('itp_hakem_overrides');
    gruplar = JSON.parse(JSON.stringify(VARSAYILAN_GRUPLAR));
    topluDurumDegistir(false);
    bildirimGoster('🧹 Tüm araçlar başlangıç ayarlarına sıfırlandı.');
  });

  // GitHub Repo Bağlantısı
  const repoInput = document.getElementById('githubRepoInput');
  if (repoInput && bagliGithubRepo) repoInput.value = bagliGithubRepo;

  document.getElementById('connectGithubBtn')?.addEventListener('click', () => {
    bagliGithubRepo = (repoInput?.value || '')
      .trim()
      .replace(/^https?:\/\/github\.com\//, '')
      .replace(/\.git$/, '');
    localStorage.setItem('itp_github_repo', bagliGithubRepo);
    const statusEl = document.getElementById('githubSyncStatus');
    if (statusEl) {
      statusEl.innerHTML = bagliGithubRepo
        ? `🟢 Aktif GitHub Deposu: <code>${bagliGithubRepo}</code>`
        : `Varsayılan yerel <code>araclar/*.json</code> dosyaları kullanılıyor.`;
    }
    seciliGrubaGoreRehberiGuncelle();
    aracDosyalariniOku(false);
  });

  // Otomatik dosya kontrolü (3.5 saniyede bir, file:// protokolünde değilse)
  setInterval(() => {
    const autoCheck = document.getElementById('autoPollCheckbox');
    if (autoCheck && autoCheck.checked && !yarisDevamEdiyor && window.location.protocol !== 'file:') {
      aracDosyalariniOku(true);
    }
  }, 3500);

  // İlk Yükleme
  rehberSekmesiniHazirla();
  conflictSimulatorunuHazirla();
  aracDosyalariniOku(true);
});
