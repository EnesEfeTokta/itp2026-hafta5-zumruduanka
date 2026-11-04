/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Sunum & Uygulama Grubu: Nohut Dürüm (Tamer Çelik • Faruk Tazeoğlu • Muayad Jumaah)
 * Ders Sorumlusu: Doç. Dr. Hamza POLAT
 *
 * ZÜMRÜDÜANKA (THE GIT PHOENIX) - GÖRSELLEŞTİRME VE PARÇACIK MOTORU
 * Not: Parçalar elle arayüzden değil, grupların GitHub üzerinden parcalar/*.json
 * dosyalarına gönderdiği PR'ların derlenmesiyle (npm run derle) aktifleşir!
 */

const GRUP_UYANDIRMA_SABLONLARI = [
  {
    parcaNo: 1,
    kod: 'sudo',
    grupAdi: 'Sudo',
    sunumHaftasi: 'Hafta 11',
    uyeler: ['Ahmet Can BOZKURT', 'Yusufcan KADAĞAN', 'Enes Efe TOKTA'],
    bolgeAdi: "Anka'nın Kalbi ve Kor Çekirdeği",
    bolgeKodu: 'CORE_HEART',
    aktif: true,
    anaRenk: '#ff2a5f',
    ikincilRenk: '#ffbe0b',
    enerjiSeviyesi: 100,
    mühür: 'SUDO-CORE-01',
    mesaj: "Root yetkisiyle Anka'nın kalbine yaşam ateşi verildi!"
  },
  {
    parcaNo: 2,
    kod: 'it-code',
    grupAdi: 'IT Code',
    sunumHaftasi: 'Hafta 13',
    uyeler: ['Yusuf Semih Halis', 'İrem İmancı', 'Muhammed Uğur Çetinkaya'],
    bolgeAdi: 'Asil Baş ve Altın Kraliyet Tacı',
    bolgeKodu: 'CROWN_HEAD',
    aktif: true,
    anaRenk: '#fbbf24',
    ikincilRenk: '#fef08a',
    enerjiSeviyesi: 100,
    mühür: 'ITCODE-CROWN-02',
    mesaj: 'Bilgelik tacı ve keskin bakışlar kodlandı!'
  },
  {
    parcaNo: 3,
    kod: 'rotbalance',
    grupAdi: 'RotBalance',
    sunumHaftasi: 'Hafta 3',
    uyeler: ['Umut Talha AKPINAR', 'Cafer YILDIRIM', 'Merve YILMAZ'],
    bolgeAdi: 'Sol İç Kanat ve Alev Omuzları',
    bolgeKodu: 'LEFT_INNER_WING',
    aktif: true,
    anaRenk: '#f97316',
    ikincilRenk: '#fde047',
    enerjiSeviyesi: 100,
    mühür: 'ROTBALANCE-LWING-03',
    mesaj: 'Sol iç kanat dengesi ve ateş kalkanı aktif!'
  },
  {
    parcaNo: 4,
    kod: 'tdb',
    grupAdi: 'TDB',
    sunumHaftasi: 'Hafta 6',
    uyeler: ['Taha Sait Barışkan', 'Davut Erdin', 'Burak Bostancıoğlu'],
    bolgeAdi: 'Sağ İç Kanat ve Alev Omuzları',
    bolgeKodu: 'RIGHT_INNER_WING',
    aktif: true,
    anaRenk: '#fb923c',
    ikincilRenk: '#fef9c3',
    enerjiSeviyesi: 100,
    mühür: 'TDB-RWING-04',
    mesaj: 'Sağ iç kanat senkronize edildi, yükseliş başlıyor!'
  },
  {
    parcaNo: 5,
    kod: 'itersolis',
    grupAdi: 'ITERSOLIS',
    sunumHaftasi: 'Hafta 9',
    uyeler: ['İrem Sıla Alav', 'Şevval Gündoğdu', 'Yaşar Can Sandallı'],
    bolgeAdi: 'Sol Güneş Telekleri (Dış Kanat)',
    bolgeKodu: 'LEFT_OUTER_FEATHERS',
    aktif: true,
    anaRenk: '#f59e0b',
    ikincilRenk: '#fffbeb',
    enerjiSeviyesi: 100,
    mühür: 'ITERSOLIS-SOLAR-05',
    mesaj: 'Güneşin altın telekleri sol kanatta parlıyor!'
  },
  {
    parcaNo: 6,
    kod: 'noctalia',
    grupAdi: 'Noctalia',
    sunumHaftasi: 'Hafta 12',
    uyeler: ['Muhammed Yusuf Yıldız', 'Mustafa Aykaç', 'Aziz Emre Yılmaz'],
    bolgeAdi: 'Sağ Yıldız Telekleri (Dış Kanat)',
    bolgeKodu: 'RIGHT_OUTER_FEATHERS',
    aktif: true,
    anaRenk: '#c084fc',
    ikincilRenk: '#fde68a',
    enerjiSeviyesi: 100,
    mühür: 'NOCTALIA-STAR-06',
    mesaj: 'Gece yıldızlarının gücü sağ kanat teleklerinde!'
  },
  {
    parcaNo: 7,
    kod: '404',
    grupAdi: '404',
    sunumHaftasi: 'Hafta 8',
    uyeler: ['Ahsen Nur YILDIRIM', 'Yeşim YİKİT', 'İlayda TOPAL'],
    bolgeAdi: 'Mistik Göğüs Zırhı ve Boyun Tüyleri',
    bolgeKodu: 'MYSTIC_ARMOR',
    aktif: true,
    anaRenk: '#ec4899',
    ikincilRenk: '#fbcfe8',
    enerjiSeviyesi: 100,
    mühür: '404-ARMOR-07',
    mesaj: '404: Kusur Bulunamadı! Kristal göğüs zırhı tamamlandı!'
  },
  {
    parcaNo: 8,
    kod: 'hat',
    grupAdi: 'HAT',
    sunumHaftasi: 'Hafta 7',
    uyeler: ['Taha Efendioğlu', 'Harun Esat İrşi', 'Ahmet Kerim İnce'],
    bolgeAdi: 'Plazma Pençeler ve Ateş Dalgası',
    bolgeKodu: 'PLASMA_TALONS',
    aktif: true,
    anaRenk: '#06b6d4',
    ikincilRenk: '#a5f3fc',
    enerjiSeviyesi: 100,
    mühür: 'HAT-TALON-08',
    mesaj: 'Plazma pençeler ve enerji halkaları ateşlendi!'
  },
  {
    parcaNo: 9,
    kod: 'eib',
    grupAdi: 'EIB',
    sunumHaftasi: 'Hafta 10',
    uyeler: ['Ensar Kibaroğlu', 'İbrahim Budak', 'Burak Bahadur'],
    bolgeAdi: 'Efsanevi Beşli Kuyruk Alevi',
    bolgeKodu: 'TAIL_RIBBONS',
    aktif: true,
    anaRenk: '#10b981',
    ikincilRenk: '#fde047',
    enerjiSeviyesi: 100,
    mühür: 'EIB-TAIL-09',
    mesaj: 'Kuyruk telekleri rüzgarda alev şeritleri gibi dalgalanıyor!'
  },
  {
    parcaNo: 10,
    kod: 'soy-tech',
    grupAdi: 'SOY Tech',
    sunumHaftasi: 'Hafta 4',
    uyeler: ['Semih Beyaztaş', 'Ozan Hasköy', 'Yusuf Çırak'],
    bolgeAdi: 'Kutsal Güneş Halesi ve Takımyıldız Aurası',
    bolgeKodu: 'ASCENSION_HALO',
    aktif: true,
    anaRenk: '#6366f1',
    ikincilRenk: '#fde047',
    enerjiSeviyesi: 100,
    mühür: 'SOYTECH-HALO-10',
    mesaj: '10 grubu birbirine bağlayan kutsal yükseliş halesi tamamlandı!'
  }
];

// Derlenen gerçek durumu js/derlenen-parcalar.js dosyasından oku
let parcalar = Array.isArray(window.DERLENEN_ANKA_PARCALARI)
  ? JSON.parse(JSON.stringify(window.DERLENEN_ANKA_PARCALARI))
  : GRUP_UYANDIRMA_SABLONLARI.map((p) => ({ ...p, aktif: false, enerjiSeviyesi: 0, mühür: 'BEKLENIYOR' }));

let seciliPortalGrupKod = 'sudo';
let sesAcik = true;

// =========================================================================
// MİSTİK SES SENTEZLEYİCİ (Web Audio API)
// =========================================================================
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  return audioCtx;
}

function mistikSesCal(tip) {
  if (!sesAcik) return;
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;

    if (tip === 'rebirth') {
      const akor = [220, 277.18, 329.63, 440, 554.37, 659.25, 880];
      akor.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f * 0.5, now);
        osc.frequency.exponentialRampToValueAtTime(f, now + 0.45 + i * 0.06);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + 2.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 2.2);
      });
    }
  } catch (_) {}
}

function bildirimGoster(mesaj) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'toast';
  div.textContent = mesaj;
  container.appendChild(div);
  setTimeout(() => div.remove(), 3600);
}

// =========================================================================
// GERÇEK ZAMANLI ATEŞ, KIVILCIM, ENERJİ KÜRELERİ VE ŞOK DALGASI (CANVAS)
// =========================================================================
const canvas = document.getElementById('phoenixCanvas');
const canvasCtx = canvas ? canvas.getContext('2d') : null;

let kivilcimlar = [];
let enerjiKureleri = [];
let sokDalgalari = [];
let yildizlar = [];

function canvasBoyutlandir() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  arkaPlanYildizlariniOlustur();
}

function arkaPlanYildizlariniOlustur() {
  if (!canvas) return;
  yildizlar = [];
  for (let i = 0; i < 95; i++) {
    yildizlar.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.6 + Math.random() * 1.6,
      faz: Math.random() * Math.PI * 2,
      hiz: 0.015 + Math.random() * 0.03
    });
  }
}

function kivilcimUret(merkezX, merkezY, yogunluk = 2) {
  const aktifParcalar = parcalar.filter((p) => p.aktif);
  if (aktifParcalar.length === 0) return;

  for (let i = 0; i < yogunluk; i++) {
    const rastgeleParca = aktifParcalar[Math.floor(Math.random() * aktifParcalar.length)];
    const yayilimX = (Math.random() - 0.5) * 520 * (aktifParcalar.length / 10);
    const yayilimY = (Math.random() - 0.5) * 260;

    kivilcimlar.push({
      x: merkezX + yayilimX,
      y: merkezY + yayilimY,
      vx: (Math.random() - 0.5) * 1.4,
      vy: -(1.0 + Math.random() * 2.8),
      boyut: 1.8 + Math.random() * 4.2,
      alfa: 0.85 + Math.random() * 0.15,
      azalma: 0.008 + Math.random() * 0.014,
      renk: Math.random() > 0.4 ? rastgeleParca.anaRenk : rastgeleParca.ikincilRenk
    });
  }
}

function patlamaKivilcimlariUret(x, y, renk1 = '#fbbf24', renk2 = '#ff2a5f', adet = 120) {
  for (let i = 0; i < adet; i++) {
    const aci = Math.random() * Math.PI * 2;
    const hiz = 1.5 + Math.random() * 9.5;
    kivilcimlar.push({
      x,
      y,
      vx: Math.cos(aci) * hiz,
      vy: Math.sin(aci) * hiz,
      boyut: 2.2 + Math.random() * 5,
      alfa: 1,
      azalma: 0.012 + Math.random() * 0.018,
      renk: i % 2 === 0 ? renk1 : renk2
    });
  }
}

function sinematikDogusAnimasyonuBaslat() {
  if (!canvas) return;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  const aktifler = parcalar.filter((p) => p.aktif);
  if (aktifler.length === 0) {
    bildirimGoster('⏳ Henüz hiçbir grubun PR kodu birleştirilmedi (0 / 10).');
    return;
  }

  enerjiKureleri = [];
  aktifler.forEach((p, idx) => {
    const aci = (idx / aktifler.length) * Math.PI * 2 - Math.PI / 2;
    const baslangicUzaklik = Math.min(canvas.width, canvas.height) * 0.44;
    enerjiKureleri.push({
      x: cx + Math.cos(aci) * baslangicUzaklik,
      y: cy + Math.sin(aci) * baslangicUzaklik,
      hedefX: cx,
      hedefY: cy - 20,
      ilerleme: 0,
      hiz: 0.018 + idx * 0.0012,
      renk: p.anaRenk,
      etiket: p.grupAdi
    });
  });

  mistikSesCal('rebirth');

  const wrapper = document.getElementById('phoenixSvgWrapper');
  if (wrapper) {
    wrapper.classList.remove('rebirth-burst');
    void wrapper.offsetWidth;
    wrapper.classList.add('rebirth-burst');
  }

  setTimeout(() => {
    sokDalgalari.push({ x: cx, y: cy - 20, r: 10, maxR: 680, alfa: 1, renk: '#fbbf24' });
    sokDalgalari.push({ x: cx, y: cy - 20, r: 5, maxR: 520, alfa: 0.9, renk: '#ff2a5f' });
    patlamaKivilcimlariUret(cx, cy - 20, '#fef08a', '#f97316', 180);
  }, 620);
}

function canvasDongusu() {
  const ctx = canvasCtx;
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // 1) Arka plan kozmik yıldızlar
  yildizlar.forEach((y) => {
    y.faz += y.hiz;
    const parilti = 0.25 + ((Math.sin(y.faz) + 1) / 2) * 0.65;
    ctx.fillStyle = `rgba(254, 240, 138, ${parilti})`;
    ctx.beginPath();
    ctx.arc(y.x, y.y, y.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // 2) Sürekli yükselen Zümrüdüanka ateş kıvılcımları (Sadece aktif parçalar varsa!)
  const aktifSayi = parcalar.filter((p) => p.aktif).length;
  if (aktifSayi > 0) {
    kivilcimUret(cx, cy + 40, Math.ceil(aktifSayi / 3));
  }

  for (let i = kivilcimlar.length - 1; i >= 0; i--) {
    const k = kivilcimlar[i];
    k.x += k.vx;
    k.y += k.vy;
    k.alfa -= k.azalma;

    if (k.alfa <= 0) {
      kivilcimlar.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = Math.max(0, k.alfa);
    ctx.fillStyle = k.renk;
    ctx.shadowColor = k.renk;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(k.x, k.y, k.boyut, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 3) Merkeze uçan Grup Enerji Küreleri
  for (let i = enerjiKureleri.length - 1; i >= 0; i--) {
    const ek = enerjiKureleri[i];
    ek.ilerleme += ek.hiz;
    if (ek.ilerleme >= 1) {
      enerjiKureleri.splice(i, 1);
      continue;
    }

    const t = ek.ilerleme;
    const curX = ek.x + (ek.hedefX - ek.x) * (t * t);
    const curY = ek.y + (ek.hedefY - ek.y) * (t * t);

    ctx.save();
    ctx.fillStyle = ek.renk;
    ctx.shadowColor = ek.renk;
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.arc(curX, curY, 9, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fffbeb';
    ctx.font = 'bold 12px Segoe UI';
    ctx.fillText(ek.etiket, curX + 14, curY + 4);
    ctx.restore();
  }

  // 4) Şok Dalgaları
  for (let i = sokDalgalari.length - 1; i >= 0; i--) {
    const sd = sokDalgalari[i];
    sd.r += 14;
    sd.alfa -= 0.022;
    if (sd.alfa <= 0 || sd.r >= sd.maxR) {
      sokDalgalari.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.strokeStyle = sd.renk;
    ctx.globalAlpha = Math.max(0, sd.alfa);
    ctx.lineWidth = 4;
    ctx.shadowColor = sd.renk;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(sd.x, sd.y, sd.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  requestAnimationFrame(canvasDongusu);
}

// =========================================================================
// ZÜMRÜDÜANKA SVG PARÇALARINI VE 10 GRUP KARTINI GÜNCELLEME
// =========================================================================
function sahneyiGuncelle() {
  const aktifSayisi = parcalar.filter((p) => p.aktif).length;

  const countEl = document.getElementById('activePartsCount');
  if (countEl) countEl.textContent = `${aktifSayisi} / 10`;

  const mainTitle = document.getElementById('phoenixMainTitle');
  const subTitle = document.getElementById('phoenixSubTitle');
  const wrapper = document.getElementById('phoenixSvgWrapper');

  if (aktifSayisi === 10) {
    if (mainTitle) mainTitle.textContent = '10 GRUP BİRLEŞTİ — ZÜMRÜDÜANKA KÜLLERİNDEN DOĞDU!';
    if (subTitle)
      subTitle.textContent =
        'Sudo • IT Code • RotBalance • TDB • ITERSOLIS • Noctalia • 404 • HAT • EIB • SOY Tech tek bir ruhta birleşti!';
    wrapper?.classList.add('awakened');
  } else if (aktifSayisi === 0) {
    if (mainTitle) mainTitle.textContent = 'ANKA KUŞU KÜLLERİNDE UYUYOR (0 / 10 PARÇA)';
    if (subTitle)
      subTitle.textContent =
        'Gruplar telefondan/bilgisayardan GitHub üzerinden kendi dalını (branch) açıp PR gönderdikçe ve derlendikçe Zümrüdüanka uyanacak!';
    wrapper?.classList.remove('awakened');
  } else {
    if (mainTitle) mainTitle.textContent = `ZÜMRÜDÜANKA UYANIYOR (${aktifSayisi} / 10 PARÇA BİRLEŞTİ)`;
    if (subTitle)
      subTitle.textContent = `Tam doğuş için ${10 - aktifSayisi} grubun daha GitHub üzerinden PR göndermesi bekleniyor...`;
    wrapper?.classList.add('awakened');
  }

  parcalar.forEach((p) => {
    const svgPart = document.getElementById(`part-${p.kod}`);
    if (svgPart) {
      svgPart.classList.toggle('dormant', !p.aktif);
    }
  });

  const solCol = document.getElementById('leftConstellation');
  const sagCol = document.getElementById('rightConstellation');

  if (solCol && sagCol) {
    solCol.innerHTML = parcalar.slice(0, 5).map(grupKartHtmlUret).join('');
    sagCol.innerHTML = parcalar.slice(5, 10).map(grupKartHtmlUret).join('');

    document.querySelectorAll('.group-seal-card').forEach((card) => {
      const kod = card.getAttribute('data-kod');
      card.addEventListener('mouseenter', () => parcaVurgula(kod, true));
      card.addEventListener('mouseleave', () => parcaVurgula(kod, false));
      card.addEventListener('click', () => {
        seciliPortalGrupKod = kod;
        portaliAc();
      });
    });
  }

  portalIceriginiGuncelle();
}

function grupKartHtmlUret(p) {
  return `
    <div class="group-seal-card ${p.aktif ? 'active-part' : 'dormant-part'}" data-kod="${p.kod}" style="border-left: 4px solid ${p.anaRenk}">
      <div class="seal-top">
        <span class="seal-title" style="color: ${p.anaRenk}">#${p.parcaNo} ${p.grupAdi}</span>
        <span class="seal-status ${p.aktif ? 'on' : 'off'}">
          ${p.aktif ? '🔥 Birleşti' : '⏳ PR Bekleniyor'}
        </span>
      </div>
      <div class="seal-part-name">🪶 ${p.bolgeAdi}</div>
      <div class="seal-members">👥 ${p.uyeler.join(' • ')}</div>
    </div>
  `;
}

function parcaVurgula(kod, aktifMi) {
  const p = parcalar.find((item) => item.kod === kod);
  const svgPart = document.getElementById(`part-${kod}`);
  const infoBar = document.getElementById('hoveredPartInfo');

  if (svgPart) {
    svgPart.classList.toggle('highlighted', aktifMi);
  }

  if (infoBar && p && aktifMi) {
    infoBar.innerHTML = `🔥 <strong>Grup #${p.parcaNo} ${p.grupAdi}</strong> (${p.uyeler.join(', ')}) → <strong>${p.bolgeAdi}</strong> | Durum: <strong>${p.aktif ? 'PR Birleştirildi' : 'PR Bekleniyor'}</strong>`;
  }
}

// =========================================================================
// TELEFONDAN PR REHBERİ VE 10 GRUP KODU GÖRÜNTÜLEYİCİ
// =========================================================================
function portaliAc() {
  portalIceriginiGuncelle();
  document.getElementById('portalBackdrop')?.classList.remove('hidden');
}

function portaliKapat() {
  document.getElementById('portalBackdrop')?.classList.add('hidden');
}

function portalIceriginiGuncelle() {
  const grid = document.getElementById('portalGroupGrid');
  if (!grid) return;

  grid.innerHTML = GRUP_UYANDIRMA_SABLONLARI.map((sablon) => {
    const canliDurum = parcalar.find((p) => p.kod === sablon.kod);
    const aktifMi = canliDurum ? canliDurum.aktif : false;
    return `
      <button type="button" class="portal-group-btn ${sablon.kod === seciliPortalGrupKod ? 'active' : ''}" data-kod="${sablon.kod}">
        #${sablon.parcaNo} ${sablon.grupAdi} ${aktifMi ? '🔥' : '⏳'}
      </button>
    `;
  }).join('');

  grid.querySelectorAll('.portal-group-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      seciliPortalGrupKod = btn.getAttribute('data-kod');
      portalIceriginiGuncelle();
    });
  });

  const seciliSablon =
    GRUP_UYANDIRMA_SABLONLARI.find((s) => s.kod === seciliPortalGrupKod) || GRUP_UYANDIRMA_SABLONLARI[0];

  const guideFile = document.getElementById('guideFileName');
  const guideCommit = document.getElementById('guideCommitMsg');
  const guideBranch = document.getElementById('guideBranchName');

  if (guideFile) guideFile.textContent = `parcalar/${seciliSablon.kod}.json`;
  if (guideCommit) guideCommit.textContent = `ozellik(${seciliSablon.kod}): anka parcasi uyandirildi`;
  if (guideBranch) guideBranch.textContent = `grup/${seciliSablon.kod}`;

  const infoCard = document.getElementById('portalSelectedGroupInfo');
  if (infoCard) {
    infoCard.style.borderLeftColor = seciliSablon.anaRenk;
    infoCard.innerHTML = `
      <div><strong>Grup #${seciliSablon.parcaNo}: ${seciliSablon.grupAdi}</strong> (${seciliSablon.sunumHaftasi}) — <strong>🪶 ${seciliSablon.bolgeAdi}</strong></div>
      <div style="color:#cbd5e1; margin-top:3px;">👥 Üyeler: ${seciliSablon.uyeler.join(' • ')}</div>
      <div style="color:#fde68a; margin-top:4px;">📂 Düzenlenecek Dosya: <code>parcalar/${seciliSablon.kod}.json</code> | 🌿 Dal: <code>grup/${seciliSablon.kod}</code></div>
    `;
  }

  const templateBox = document.getElementById('templateCodeBox');
  if (templateBox) {
    templateBox.textContent = JSON.stringify(seciliSablon, null, 2);
  }
}

// =========================================================================
// GERÇEK DOSYALARI OKU (parcalar/*.json veya /api/parcalar)
// =========================================================================
async function gercekDosyalariOku(animasyonOynat = false) {
  if (window.location.protocol !== 'file:') {
    let okundu = false;
    try {
      const apiRes = await fetch(`/api/parcalar?t=${Date.now()}`, { cache: 'no-store' });
      if (apiRes.ok) {
        const veri = await apiRes.json();
        if (veri && Array.isArray(veri.parcalar)) {
          parcalar = veri.parcalar;
          okundu = true;
        }
      }
    } catch (_) {}

    if (!okundu) {
      for (let i = 0; i < parcalar.length; i++) {
        const kod = parcalar[i].kod;
        try {
          const res = await fetch(`parcalar/${kod}.json?t=${Date.now()}`, { cache: 'no-store' });
          if (res.ok) {
            parcalar[i] = await res.json();
          }
        } catch (_) {}
      }
    }
  } else if (Array.isArray(window.DERLENEN_ANKA_PARCALARI)) {
    parcalar = JSON.parse(JSON.stringify(window.DERLENEN_ANKA_PARCALARI));
  }

  sahneyiGuncelle();
  if (animasyonOynat) {
    sinematikDogusAnimasyonuBaslat();
  }
}

// =========================================================================
// BAŞLATMA VE OLAY DİNLEYİCİLERİ
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  canvasBoyutlandir();
  window.addEventListener('resize', canvasBoyutlandir);
  requestAnimationFrame(canvasDongusu);

  document.querySelectorAll('.phoenix-part').forEach((el) => {
    const kod = el.getAttribute('data-grup');
    el.addEventListener('mouseenter', () => parcaVurgula(kod, true));
    el.addEventListener('mouseleave', () => parcaVurgula(kod, false));
    el.addEventListener('click', () => {
      seciliPortalGrupKod = kod;
      portaliAc();
    });
  });

  document.getElementById('compileAndAwakenBtn')?.addEventListener('click', () => {
    gercekDosyalariOku(true);
  });

  document.getElementById('togglePortalBtn')?.addEventListener('click', portaliAc);
  document.getElementById('closePortalBtn')?.addEventListener('click', portaliKapat);

  const soundBtn = document.getElementById('soundBtn');
  soundBtn?.addEventListener('click', () => {
    sesAcik = !sesAcik;
    soundBtn.textContent = sesAcik ? '🔊' : '🔇';
  });

  document.getElementById('zenModeBtn')?.addEventListener('click', () => {
    document.body.classList.add('zen-mode');
    document.getElementById('exitZenBtn')?.classList.remove('hidden');
  });

  document.getElementById('exitZenBtn')?.addEventListener('click', () => {
    document.body.classList.remove('zen-mode');
    document.getElementById('exitZenBtn')?.classList.add('hidden');
  });

  document.getElementById('copyTemplateCodeBtn')?.addEventListener('click', () => {
    const metin = document.getElementById('templateCodeBox')?.textContent || '';
    navigator.clipboard.writeText(metin);
    bildirimGoster('📋 Grup parça kodu panoya kopyalandı!');
  });

  gercekDosyalariOku(false);
});
