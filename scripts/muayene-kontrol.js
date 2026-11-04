/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Nohut Dürüm Grubu (Tamer Çelik, Faruk Tazeoğlu, Muayad Jumaah)
 *
 * ZÜMRÜDÜANKA (THE GIT PHOENIX) - PARÇA DERLEYİCİ VE CI DOĞRULAMA MOTORU
 * Kullanım:
 *   npm run derle     -> parcalar/*.json dosyalarını okur, doğrular ve js/derlenen-parcalar.js üretir
 *   npm run sifirla   -> Tüm 10 parçayı başlangıç (aktif: false) durumuna sıfırlar
 *   npm run tamamla   -> Test amacıyla tüm 10 parçayı aktif (aktif: true) durumuna getirir
 */

const fs = require('fs');
const path = require('path');

const PARCALAR_KLASORU = path.join(__dirname, '..', 'parcalar');
const DERLEME_CIKTI_YOLU = path.join(__dirname, '..', 'js', 'derlenen-parcalar.js');

const TAM_PARCA_VERILERI = {
  'sudo.json': { mühür: 'SUDO-CORE-01', mesaj: "Root yetkisiyle Anka'nın kalbine yaşam ateşi verildi!" },
  'it-code.json': { mühür: 'ITCODE-CROWN-02', mesaj: 'Bilgelik tacı ve keskin bakışlar kodlandı!' },
  'rotbalance.json': { mühür: 'ROTBALANCE-LWING-03', mesaj: 'Sol iç kanat dengesi ve ateş kalkanı aktif!' },
  'tdb.json': { mühür: 'TDB-RWING-04', mesaj: 'Sağ iç kanat senkronize edildi, yükseliş başlıyor!' },
  'itersolis.json': { mühür: 'ITERSOLIS-SOLAR-05', mesaj: 'Güneşin altın telekleri sol kanatta parlıyor!' },
  'noctalia.json': { mühür: 'NOCTALIA-STAR-06', mesaj: 'Gece yıldızlarının gücü sağ kanat teleklerinde!' },
  '404.json': { mühür: '404-ARMOR-07', mesaj: '404: Kusur Bulunamadı! Kristal göğüs zırhı tamamlandı!' },
  'hat.json': { mühür: 'HAT-TALON-08', mesaj: 'Plazma pençeler ve enerji halkaları ateşlendi!' },
  'eib.json': { mühür: 'EIB-TAIL-09', mesaj: 'Kuyruk telekleri rüzgarda alev şeritleri gibi dalgalanıyor!' },
  'soy-tech.json': { mühür: 'SOYTECH-HALO-10', mesaj: '10 grubu birbirine bağlayan kutsal yükseliş halesi tamamlandı!' }
};

const BEKLENEN_PARCALAR = Object.keys(TAM_PARCA_VERILERI);
const arg = process.argv[2];

if (arg === '--sifirla' || arg === '--tamamla') {
  const aktifMi = arg === '--tamamla';
  for (const dosyaAdi of BEKLENEN_PARCALAR) {
    const tamYol = path.join(PARCALAR_KLASORU, dosyaAdi);
    if (fs.existsSync(tamYol)) {
      const veri = JSON.parse(fs.readFileSync(tamYol, 'utf8'));
      veri.aktif = aktifMi;
      veri.enerjiSeviyesi = aktifMi ? 100 : 0;
      veri.mühür = aktifMi ? TAM_PARCA_VERILERI[dosyaAdi].mühür : 'BEKLENIYOR';
      veri.mesaj = aktifMi
        ? TAM_PARCA_VERILERI[dosyaAdi].mesaj
        : `Bu parça henüz uyandırılmadı. ${veri.grupAdi} grubunun PR göndermesi bekleniyor...`;
      fs.writeFileSync(tamYol, JSON.stringify(veri, null, 2) + '\n', 'utf8');
    }
  }
}

console.log('======================================================================');
console.log('🔥 ZÜMRÜDÜANKA (THE GIT PHOENIX) - KOD DERLEME VE CI MUAYENE MOTORU 🔥');
console.log('🌯 Sunum Grubu: Nohut Dürüm (Tamer Çelik • Faruk Tazeoğlu • Muayad Jumaah)');
console.log('======================================================================\n');

let hataSayisi = 0;
let aktifParcaSayisi = 0;
const derlenenListe = [];
const raporSatirlari = [];

for (let i = 0; i < BEKLENEN_PARCALAR.length; i++) {
  const dosyaAdi = BEKLENEN_PARCALAR[i];
  const dosyaYolu = path.join(PARCALAR_KLASORU, dosyaAdi);

  if (!fs.existsSync(dosyaYolu)) {
    console.error(`❌ [EKSİK DOSYA] parcalar/${dosyaAdi} bulunamadı!`);
    hataSayisi++;
    continue;
  }

  let veri;
  try {
    veri = JSON.parse(fs.readFileSync(dosyaYolu, 'utf8'));
  } catch (err) {
    console.error(`❌ [JSON SÖZDİZİMİ HATASI] parcalar/${dosyaAdi}: ${err.message}`);
    hataSayisi++;
    continue;
  }

  if (typeof veri.grupAdi !== 'string' || typeof veri.bolgeKodu !== 'string' || typeof veri.aktif !== 'boolean') {
    console.error(`❌ [ŞEMA HATASI] parcalar/${dosyaAdi}: Zorunlu alanlar eksik veya hatalı.`);
    hataSayisi++;
    continue;
  }

  derlenenListe.push(veri);

  const barDolu = '█'.repeat(i + 1) + '░'.repeat(9 - i);
  if (veri.aktif) {
    aktifParcaSayisi++;
    console.log(`[${barDolu}] Parça #${veri.parcaNo} (${veri.grupAdi}) -> 🔥 AKTİF: ${veri.bolgeAdi}`);
    raporSatirlari.push(`| #${veri.parcaNo} | **${veri.grupAdi}** | ${veri.bolgeAdi} | 🔥 **PR Birleştirildi (Aktif)** |`);
  } else {
    console.log(`[${barDolu}] Parça #${veri.parcaNo} (${veri.grupAdi}) -> ⏳ PR BEKLENİYOR (${veri.bolgeAdi})`);
    raporSatirlari.push(`| #${veri.parcaNo} | ${veri.grupAdi} | ${veri.bolgeAdi} | ⏳ PR Bekleniyor |`);
  }
}

const derlemeIcerik = `/**
 * OTOMATİK DERLENEN ZÜMRÜDÜANKA PARÇA VERİSİ
 * Son Derleme: ${new Date().toLocaleString('tr-TR')}
 * Aktif Parça: ${aktifParcaSayisi} / 10
 */
window.DERLENEN_ANKA_PARCALARI = ${JSON.stringify(derlenenListe, null, 2)};
window.ANKA_DERLEME_ZAMANI = ${JSON.stringify(new Date().toLocaleTimeString('tr-TR'))};
`;

fs.writeFileSync(DERLEME_CIKTI_YOLU, derlemeIcerik, 'utf8');

console.log(`\n📊 DERLEME SONUCU: ${aktifParcaSayisi} / 10 Parça Aktif | Hata: ${hataSayisi}`);
console.log(`📦 Çıktı üretildi: js/derlenen-parcalar.js\n`);

if (process.env.GITHUB_STEP_SUMMARY) {
  const md = [
    `## 🔥 Zümrüdüanka (The Git Phoenix) - GitHub Actions Muayene Raporu`,
    `- **Birleşen Parça Sayısı:** \`${aktifParcaSayisi} / 10\``,
    `- **JSON Sözdizimi Kontrolü:** ${hataSayisi === 0 ? '✅ **BAŞARILI**' : '❌ **HATALI**'}`,
    ``,
    `| Parça | Grup | Anka Kuşu Bölgesi | Durum |`,
    `| :--- | :--- | :--- | :--- |`,
    ...raporSatirlari
  ].join('\n');
  try {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md, 'utf8');
  } catch (_) {}
}

process.exit(hataSayisi > 0 ? 1 : 0);
