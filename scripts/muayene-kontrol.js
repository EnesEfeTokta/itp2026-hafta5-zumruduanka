/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Nohut Dürüm Grubu (Tamer Çelik, Faruk Tazeoğlu, Muayad Jumaah)
 *
 * ZÜMRÜDÜANKA (THE GIT PHOENIX) - PARÇA DERLEYİCİ VE CI DOĞRULAMA MOTORU
 * Kullanım:
 *   npm run derle     -> 10 grubun parça kodlarını derler ve görseli günceller
 *   npm run sifirla   -> Tüm parçaları başlangıç (aktif: false) durumuna alır
 *   npm run tamamla   -> Tüm 10 parçayı aktif (aktif: true) durumuna alır
 */

const fs = require('fs');
const path = require('path');

const PARCALAR_KLASORU = path.join(__dirname, '..', 'parcalar');
const DERLEME_CIKTI_YOLU = path.join(__dirname, '..', 'js', 'derlenen-parcalar.js');

const BEKLENEN_PARCALAR = [
  'sudo.json',
  'it-code.json',
  'rotbalance.json',
  'tdb.json',
  'itersolis.json',
  'noctalia.json',
  '404.json',
  'hat.json',
  'eib.json',
  'soy-tech.json'
];

const arg = process.argv[2];

// Eğer --sifirla veya --tamamla bayrağı verildiyse dosyaları güncelle
if (arg === '--sifirla' || arg === '--tamamla') {
  const yeniDurum = arg === '--tamamla';
  for (const dosyaAdi of BEKLENEN_PARCALAR) {
    const tamYol = path.join(PARCALAR_KLASORU, dosyaAdi);
    if (fs.existsSync(tamYol)) {
      const veri = JSON.parse(fs.readFileSync(tamYol, 'utf8'));
      veri.aktif = yeniDurum;
      fs.writeFileSync(tamYol, JSON.stringify(veri, null, 2) + '\n', 'utf8');
    }
  }
  console.log(
    yeniDurum
      ? '🔥 Tüm 10 grup parçası AKTİF (aktif: true) duruma getirildi!'
      : '🌑 Tüm 10 grup parçası KÜL (aktif: false) durumuna sıfırlandı!'
  );
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
    console.log(
      `[${barDolu}] Parça #${veri.parcaNo} (${veri.grupAdi}) -> 🔥 AKTİF: ${veri.bolgeAdi}`
    );
    raporSatirlari.push(`| #${veri.parcaNo} | **${veri.grupAdi}** | ${veri.bolgeAdi} | 🔥 **Birleştirildi** |`);
  } else {
    console.log(
      `[${barDolu}] Parça #${veri.parcaNo} (${veri.grupAdi}) -> ⏳ BEKLENİYOR (${veri.bolgeAdi})`
    );
    raporSatirlari.push(`| #${veri.parcaNo} | ${veri.grupAdi} | ${veri.bolgeAdi} | ⏳ Bekleniyor |`);
  }
}

// Derlenen veriyi js/derlenen-parcalar.js dosyasına yaz
const derlemeIcerik = `/**
 * OTOMATİK DERLENEN ZÜMRÜDÜANKA PARÇA VERİSİ
 * Son Derleme: ${new Date().toLocaleString('tr-TR')}
 * Aktif Parça: ${aktifParcaSayisi} / 10
 */
window.DERLENEN_ANKA_PARCALARI = ${JSON.stringify(derlenenListe, null, 2)};
window.ANKA_DERLEME_ZAMANI = ${JSON.stringify(new Date().toLocaleTimeString('tr-TR'))};
`;

fs.writeFileSync(DERLEME_CIKTI_YOLU, derlemeIcerik, 'utf8');

if (aktifParcaSayisi === 10 && hataSayisi === 0) {
  console.log(`
            .       .
           /|\\     /|\\
          / | \\   / | \\
         /  |  \\_/  |  \\
        /   / \\   / \\   \\
       /   /   \\_/   \\   \\
       \\   \\  /   \\  /   /
        \\   \\/ 🔥  \\/   /
         \\     /|\\     /
          \\___/ | \\___/
              / | \\
             /  |  \\
  `);
  console.log('✨ MUHTEŞEM! 10 GRUBUN TAMAMI BİRLEŞTİRİLDİ! ZÜMRÜDÜANKA KÜLLERİNDEN DOĞDU! ✨');
} else {
  console.log(`\n📊 DERLEME SONUCU: ${aktifParcaSayisi} / 10 Parça Aktif | Hata: ${hataSayisi}`);
}

console.log(`📦 Çıktı üretildi: js/derlenen-parcalar.js\n`);

if (process.env.GITHUB_STEP_SUMMARY) {
  const md = [
    `## 🔥 Zümrüdüanka (The Git Phoenix) - Derleme Raporu`,
    `- **Birleşen Parça Sayısı:** \`${aktifParcaSayisi} / 10\``,
    `- **Durum:** ${hataSayisi === 0 ? '✅ **Derleme Başarılı**' : '❌ **Hata Var**'}`,
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
