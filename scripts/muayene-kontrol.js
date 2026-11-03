/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Nohut Dürüm Grubu (Tamer Çelik, Faruk Tazeoğlu, Muayad Jumaah)
 *
 * Git Grand Prix - Otomatik Teknik Muayene (CI Doğrulama) Betiği
 * Her Pull Request (PR) ve Push işleminde GitHub Actions tarafından otomatik çalıştırılır.
 */

const fs = require('fs');
const path = require('path');

const ARACLAR_KLASORU = path.join(__dirname, '..', 'araclar');

const BEKLENEN_GRUPLAR = [
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

let hataSayisi = 0;
let pisttekiGrupSayisi = 0;
const raporSatirlari = [];

console.log('==============================================================');
console.log('🏁 GİT GRAND PRIX - GITHUB ACTIONS TEKNİK MUAYENE BAŞLADI 🏁');
console.log('🌯 Hakem Heyeti: Nohut Dürüm (Tamer, Faruk, Muayad)');
console.log('==============================================================\n');

for (const dosyaAdi of BEKLENEN_GRUPLAR) {
  const dosyaYolu = path.join(ARACLAR_KLASORU, dosyaAdi);

  if (!fs.existsSync(dosyaYolu)) {
    console.error(`❌ [HATA] ${dosyaAdi} dosyası bulunamadı!`);
    hataSayisi++;
    raporSatirlari.push(`| \`${dosyaAdi}\` | - | ❌ Dosya Eksik | - |`);
    continue;
  }

  let veri;
  try {
    const hamIcerik = fs.readFileSync(dosyaYolu, 'utf8');
    veri = JSON.parse(hamIcerik);
  } catch (err) {
    console.error(`❌ [JSON SÖZDİZİMİ HATASI] ${dosyaAdi}: Virgül veya tırnak işaretlerini kontrol edin! (${err.message})`);
    hataSayisi++;
    raporSatirlari.push(`| \`${dosyaAdi}\` | - | ❌ JSON Hatası | Sözdizimi bozuk |`);
    continue;
  }

  // Zorunlu alan kontrolleri
  const eksikler = [];
  if (typeof veri.grupAdi !== 'string' || !veri.grupAdi.trim()) eksikler.push('grupAdi (metin olmalı)');
  if (!Array.isArray(veri.uyeler) || veri.uyeler.length === 0) eksikler.push('uyeler (liste olmalı)');
  if (typeof veri.pistteMi !== 'boolean') eksikler.push('pistteMi (true veya false olmalı, tırnak içinde yazılmamalı)');
  if (typeof veri.aracEmoji !== 'string' || !veri.aracEmoji.trim()) eksikler.push('aracEmoji (boş olamaz)');
  if (typeof veri.renk !== 'string' || !veri.renk.trim()) eksikler.push('renk (boş olamaz)');
  if (typeof veri.slogan !== 'string' || !veri.slogan.trim()) eksikler.push('slogan (boş olamaz)');

  if (eksikler.length > 0) {
    console.error(`❌ [DOĞRULAMA HATASI] ${dosyaAdi}: Hatalı alanlar -> ${eksikler.join(', ')}`);
    hataSayisi++;
    raporSatirlari.push(`| \`${dosyaAdi}\` | ${veri.grupAdi || '-'} | ❌ Eksik Alan | ${eksikler.join(', ')} |`);
    continue;
  }

  if (veri.slogan.length > 140) {
    console.error(`❌ [SLOGAN ÇOK UZUN] ${dosyaAdi}: Slogan en fazla 140 karakter olabilir.`);
    hataSayisi++;
    raporSatirlari.push(`| \`${dosyaAdi}\` | ${veri.grupAdi} | ❌ Slogan Uzun | Max 140 karakter |`);
    continue;
  }

  if (veri.pistteMi) {
    pisttekiGrupSayisi++;
    console.log(`✅ [PİSTTE HAZIR] Grup #${veri.grupNo || '?'} ${veri.grupAdi} (${veri.aracEmoji}) -> "${veri.slogan}"`);
    raporSatirlari.push(`| \`${dosyaAdi}\` | **${veri.grupAdi}** | 🟢 **Pistte Hazır!** | ${veri.aracEmoji} *"${veri.slogan}"* |`);
  } else {
    console.log(`⏳ [GARAJDA BEKLİYOR] Grup #${veri.grupNo || '?'} ${veri.grupAdi} (Henüz PR birleştirilmedi / pistteMi: false)`);
    raporSatirlari.push(`| \`${dosyaAdi}\` | ${veri.grupAdi} | ⏳ Garajda Bekliyor | ${veri.aracEmoji} *PR Bekleniyor* |`);
  }
}

// Örnek demo dosyasını da kontrol et
const demoYolu = path.join(ARACLAR_KLASORU, 'ornek-demo.json');
if (fs.existsSync(demoYolu)) {
  try {
    JSON.parse(fs.readFileSync(demoYolu, 'utf8'));
    console.log(`\n🌯 [SAFETY CAR] ornek-demo.json (Nohut Dürüm Canlı Kodlama Dosyası) geçerli.`);
  } catch (err) {
    console.error(`❌ [JSON HATASI] ornek-demo.json: ${err.message}`);
    hataSayisi++;
  }
}

console.log('\n--------------------------------------------------------------');
console.log(`📊 ÖZET: Toplam 10 Gruptan ${pisttekiGrupSayisi} tanesi başlangıç çizgisinde hazır!`);
console.log(`🔍 Hata Sayısı: ${hataSayisi}`);
console.log('--------------------------------------------------------------\n');

// GitHub Actions ortamındaysak şık bir Markdown özeti oluştur
if (process.env.GITHUB_STEP_SUMMARY) {
  const ozetMd = [
    `## 🏁 Git Grand Prix - Teknik Muayene Raporu (Nohut Dürüm CI)`,
    ``,
    `- **Pistte Hazır Grup Sayısı:** \`${pisttekiGrupSayisi} / 10\``,
    `- **Teknik Muayene Durumu:** ${hataSayisi === 0 ? '✅ **BAŞARILI (Sıfır Hata)**' : `❌ **BAŞARISIZ (${hataSayisi} Hata Bulundu)**`}`,
    ``,
    `| Dosya | Grup Adı | Durum | Araç & Slogan |`,
    `| :--- | :--- | :--- | :--- |`,
    ...raporSatirlari,
    ``
  ].join('\n');

  try {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, ozetMd, 'utf8');
  } catch (_) {
    // Özet yazılamazsa sessizce geç
  }
}

if (hataSayisi > 0) {
  console.error('🚨 Teknik muayene başarısız oldu! Lütfen yukarıdaki JSON hatalarını düzeltip tekrar commit atın.');
  process.exit(1);
} else {
  console.log('🎉 Tüm araç dosyaları teknik muayeneden başarıyla geçti! Yarışa hazır!');
  process.exit(0);
}

