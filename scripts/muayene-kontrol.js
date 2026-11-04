/**
 * İTP 2026 - Hafta 5: Git, GitHub ve GitHub Actions
 * Nohut Dürüm Grubu (Tamer Çelik, Faruk Tazeoğlu, Muayad Jumaah)
 *
 * ZÜMRÜDÜANKA (THE GIT PHOENIX) - PARÇA DERLEYİCİ VE CI DOĞRULAMA MOTORU
 * Kullanım:
 *   npm run derle     -> parcalar/*.json dosyalarını okur, doğrular ve js/derlenen-parcalar.js üretir
 *   npm run sifirla   -> Tüm 10 parçayı başlangıç (BOŞ dosya) durumuna sıfırlar
 *   npm run tamamla   -> Test amacıyla tüm 10 parçayı aktif (aktif: true) durumuna getirir
 */

const fs = require('fs');
const path = require('path');

const PARCALAR_KLASORU = path.join(__dirname, '..', 'parcalar');
const DERLEME_CIKTI_YOLU = path.join(__dirname, '..', 'js', 'derlenen-parcalar.js');

const VARSAYILAN_GRUP_SABLONLARI = {
  'sudo.json': {
    parcaNo: 1,
    kod: 'sudo',
    grupAdi: 'Sudo',
    sunumHaftasi: 'Hafta 11',
    uyeler: ['Ahmet Can BOZKURT', 'Yusufcan KADAĞAN', 'Enes Efe TOKTA'],
    bolgeAdi: "Anka'nın Kalbi ve Kor Çekirdeği",
    bolgeKodu: 'CORE_HEART',
    anaRenk: '#ff2a5f',
    ikincilRenk: '#ffbe0b',
    aktifMühür: 'SUDO-KOR-ATESI-AKTIF',
    aktifMesaj: "Sudo grubu Anka'nın Kalbini ve Kor Çekirdeğini ateşledi!"
  },
  'it-code.json': {
    parcaNo: 2,
    kod: 'it-code',
    grupAdi: 'IT Code',
    sunumHaftasi: 'Hafta 13',
    uyeler: ['Yusuf Semih Halis', 'İrem İmancı', 'Muhammed Uğur Çetinkaya'],
    bolgeAdi: 'Asil Baş ve Altın Kraliyet Tacı',
    bolgeKodu: 'CROWN_HEAD',
    anaRenk: '#fbbf24',
    ikincilRenk: '#fef08a',
    aktifMühür: 'ITCODE-KRALIYET-TACI-AKTIF',
    aktifMesaj: "IT Code grubu Anka'nın Asil Başını ve Kraliyet Tacını uyandırdı!"
  },
  'rotbalance.json': {
    parcaNo: 3,
    kod: 'rotbalance',
    grupAdi: 'RotBalance',
    sunumHaftasi: 'Hafta 3',
    uyeler: ['Umut Talha AKPINAR', 'Cafer YILDIRIM', 'Merve YILMAZ'],
    bolgeAdi: 'Sol İç Kanat ve Alev Omuzları',
    bolgeKodu: 'LEFT_INNER_WING',
    anaRenk: '#f97316',
    ikincilRenk: '#fde047',
    aktifMühür: 'ROTBALANCE-SOL-KANAT-AKTIF',
    aktifMesaj: "RotBalance grubu Anka'nın Sol İç Kanadını ve Alev Omuzlarını açtı!"
  },
  'tdb.json': {
    parcaNo: 4,
    kod: 'tdb',
    grupAdi: 'TDB',
    sunumHaftasi: 'Hafta 6',
    uyeler: ['Taha Sait Barışkan', 'Davut Erdin', 'Burak Bostancıoğlu'],
    bolgeAdi: 'Sağ İç Kanat ve Alev Omuzları',
    bolgeKodu: 'RIGHT_INNER_WING',
    anaRenk: '#fb923c',
    ikincilRenk: '#fef9c3',
    aktifMühür: 'TDB-SAG-KANAT-AKTIF',
    aktifMesaj: "TDB grubu Anka'nın Sağ İç Kanadını ve Alev Omuzlarını ateşledi!"
  },
  'itersolis.json': {
    parcaNo: 5,
    kod: 'itersolis',
    grupAdi: 'ITERSOLIS',
    sunumHaftasi: 'Hafta 9',
    uyeler: ['İrem Sıla Alav', 'Şevval Gündoğdu', 'Yaşar Can Sandallı'],
    bolgeAdi: 'Sol Güneş Telekleri (Dış Kanat)',
    bolgeKodu: 'LEFT_OUTER_FEATHERS',
    anaRenk: '#f59e0b',
    ikincilRenk: '#fffbeb',
    aktifMühür: 'ITERSOLIS-GUNES-TELEKLERI-AKTIF',
    aktifMesaj: 'ITERSOLIS grubu Sol Güneş Teleklerini gökyüzüne açtı!'
  },
  'noctalia.json': {
    parcaNo: 6,
    kod: 'noctalia',
    grupAdi: 'Noctalia',
    sunumHaftasi: 'Hafta 12',
    uyeler: ['Muhammed Yusuf Yıldız', 'Mustafa Aykaç', 'Aziz Emre Yılmaz'],
    bolgeAdi: 'Sağ Yıldız Telekleri (Dış Kanat)',
    bolgeKodu: 'RIGHT_OUTER_FEATHERS',
    anaRenk: '#c084fc',
    ikincilRenk: '#fde68a',
    aktifMühür: 'NOCTALIA-YILDIZ-TELEKLERI-AKTIF',
    aktifMesaj: 'Noctalia grubu Sağ Yıldız Teleklerini gece ateşine dönüştürdü!'
  },
  '404.json': {
    parcaNo: 7,
    kod: '404',
    grupAdi: '404',
    sunumHaftasi: 'Hafta 8',
    uyeler: ['Ahsen Nur YILDIRIM', 'Yeşim YİKİT', 'İlayda TOPAL'],
    bolgeAdi: 'Mistik Göğüs Zırhı ve Boyun Tüyleri',
    bolgeKodu: 'MYSTIC_ARMOR',
    anaRenk: '#ec4899',
    ikincilRenk: '#fbcfe8',
    aktifMühür: '404-MISTIK-ZIRH-AKTIF',
    aktifMesaj: '404 grubu Mistik Göğüs Zırhını kusursuzca kuşandırdı!'
  },
  'hat.json': {
    parcaNo: 8,
    kod: 'hat',
    grupAdi: 'HAT',
    sunumHaftasi: 'Hafta 7',
    uyeler: ['Taha Efendioğlu', 'Harun Esat İrşi', 'Ahmet Kerim İnce'],
    bolgeAdi: 'Plazma Pençeler ve Ateş Dalgası',
    bolgeKodu: 'PLASMA_TALONS',
    anaRenk: '#06b6d4',
    ikincilRenk: '#a5f3fc',
    aktifMühür: 'HAT-PLAZMA-PENCELER-AKTIF',
    aktifMesaj: 'HAT grubu Plazma Pençeleri ve Ateş Dalgasını serbest bıraktı!'
  },
  'eib.json': {
    parcaNo: 9,
    kod: 'eib',
    grupAdi: 'EIB',
    sunumHaftasi: 'Hafta 10',
    uyeler: ['Ensar Kibaroğlu', 'İbrahim Budak', 'Burak Bahadur'],
    bolgeAdi: 'Efsanevi Beşli Kuyruk Alevi',
    bolgeKodu: 'TAIL_RIBBONS',
    anaRenk: '#10b981',
    ikincilRenk: '#fde047',
    aktifMühür: 'EIB-KUYRUK-ALEVI-AKTIF',
    aktifMesaj: 'EIB grubu Efsanevi Beşli Kuyruk Alevini rüzgarla buluşturdu!'
  },
  'soy-tech.json': {
    parcaNo: 10,
    kod: 'soy-tech',
    grupAdi: 'SOY Tech',
    sunumHaftasi: 'Hafta 4',
    uyeler: ['Semih Beyaztaş', 'Ozan Hasköy', 'Yusuf Çırak'],
    bolgeAdi: 'Kutsal Güneş Halesi ve Takımyıldız Aurası',
    bolgeKodu: 'ASCENSION_HALO',
    anaRenk: '#6366f1',
    ikincilRenk: '#fde047',
    aktifMühür: 'SOYTECH-KUTSAL-HALE-AKTIF',
    aktifMesaj: 'SOY Tech grubu Kutsal Güneş Halesini ve Takımyıldız Aurasını tamamladı!'
  }
};

const BEKLENEN_PARCALAR = Object.keys(VARSAYILAN_GRUP_SABLONLARI);
const arg = process.argv[2];

function pasifVeriUret(sablon) {
  return {
    parcaNo: sablon.parcaNo,
    kod: sablon.kod,
    grupAdi: sablon.grupAdi,
    sunumHaftasi: sablon.sunumHaftasi,
    uyeler: sablon.uyeler,
    bolgeAdi: sablon.bolgeAdi,
    bolgeKodu: sablon.bolgeKodu,
    aktif: false,
    anaRenk: sablon.anaRenk,
    ikincilRenk: sablon.ikincilRenk,
    enerjiSeviyesi: 0,
    mühür: 'BEKLENIYOR',
    mesaj: `Bu parça henüz uyandırılmadı. ${sablon.grupAdi} grubunun PR göndermesi bekleniyor...`
  };
}

function aktifVeriUret(sablon) {
  return {
    parcaNo: sablon.parcaNo,
    kod: sablon.kod,
    grupAdi: sablon.grupAdi,
    sunumHaftasi: sablon.sunumHaftasi,
    uyeler: sablon.uyeler,
    bolgeAdi: sablon.bolgeAdi,
    bolgeKodu: sablon.bolgeKodu,
    aktif: true,
    anaRenk: sablon.anaRenk,
    ikincilRenk: sablon.ikincilRenk,
    enerjiSeviyesi: 100,
    mühür: sablon.aktifMühür,
    mesaj: sablon.aktifMesaj
  };
}

if (arg === '--sifirla') {
  for (const dosyaAdi of BEKLENEN_PARCALAR) {
    const tamYol = path.join(PARCALAR_KLASORU, dosyaAdi);
    // GitHub Mobile uygulamasının "Edit file" butonunu göstermesi için en az 1 karakter ("{}") bulunmalıdır
    fs.writeFileSync(tamYol, '{}\n', 'utf8');
  }
} else if (arg === '--tamamla') {
  for (const dosyaAdi of BEKLENEN_PARCALAR) {
    const tamYol = path.join(PARCALAR_KLASORU, dosyaAdi);
    const sablon = VARSAYILAN_GRUP_SABLONLARI[dosyaAdi];
    fs.writeFileSync(tamYol, JSON.stringify(aktifVeriUret(sablon), null, 2) + '\n', 'utf8');
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
  const sablon = VARSAYILAN_GRUP_SABLONLARI[dosyaAdi];

  if (!fs.existsSync(dosyaYolu)) {
    console.error(`❌ [EKSİK DOSYA] parcalar/${dosyaAdi} bulunamadı!`);
    hataSayisi++;
    continue;
  }

  const hamMetin = fs.readFileSync(dosyaYolu, 'utf8').trim();
  let veri;

  // Eğer dosya boşsa (henüz grup kendi kodunu yapıştırıp PR atmadıysa), pasif (aktif: false) olarak kabul et
  if (hamMetin === '' || hamMetin === '{}') {
    veri = pasifVeriUret(sablon);
  } else {
    try {
      veri = JSON.parse(hamMetin);
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
  }

  derlenenListe.push(veri);

  const barDolu = '█'.repeat(i + 1) + '░'.repeat(9 - i);
  if (veri.aktif) {
    aktifParcaSayisi++;
    console.log(`[${barDolu}] Parça #${veri.parcaNo} (${veri.grupAdi}) -> 🔥 AKTİF: ${veri.bolgeAdi}`);
    raporSatirlari.push(`| #${veri.parcaNo} | **${veri.grupAdi}** | ${veri.bolgeAdi} | 🔥 **PR Birleştirildi (Aktif)** |`);
  } else {
    console.log(`[${barDolu}] Parça #${veri.parcaNo} (${veri.grupAdi}) -> ⏳ PR BEKLENİYOR (Dosya Boş - ${veri.bolgeAdi})`);
    raporSatirlari.push(`| #${veri.parcaNo} | ${veri.grupAdi} | ${veri.bolgeAdi} | ⏳ PR Bekleniyor (Boş) |`);
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
