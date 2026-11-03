# 🏁 Git Grand Prix — Hafta 5 Sınıf İçi Uygulama Platformu

**Ders:** İnternet Tabanlı Programlama (2026–2027 Güz Dönemi)  
**Öğretim Elemanı:** Doç. Dr. Hamza POLAT  
**5. Hafta Konusu:** Git, GitHub ve GitHub Actions ile İş Akışı Otomasyonu  
**Sunum ve Uygulama Sorumlusu Grup:** **Nohut Dürüm** (*Tamer Çelik • Faruk Tazeoğlu • Muayad Jumaah*)

---

## 🎯 Etkinliğin Amacı

Bu uygulamada sınıftaki **10 proje grubu**, birbirlerinin kodlarıyla **çakışma (conflict) yaşamadan** aynı depo üzerinde paralel çalışmayı, kendi **dalını (`branch`)** açmayı, **Dönem Projesi Yönergesi Madde 13**'e uygun anlamlı **commit** atmayı ve **tek bir Pull Request (PR)** ile **GitHub Actions** otomatik muayenesinden geçerek yarış pistine çıkmayı deneyimleyecektir.

PR'ı birleştirilen (Merge edilen) tüm gruplar dev ekrandaki **Git Grand Prix** başlangıç çizgisine yerleşecek ve **%100 rastgele şans faktörüne** dayalı büyük yarışta şampiyonluk için yarışacaktır!

---

## 📋 Sınıftaki 10 Grup ve Düzenleyecekleri Dosyalar

> ⚠️ **ÖNEMLİ KURAL:** Çakışma (Merge Conflict) olmaması için her grup **yalnızca kendi grubuna ait olan JSON dosyasını** kendi dalında (`branch`) düzenlemelidir!

| Grup No | Grup Adı | Grup Üyeleri | Açılacak Dal (`branch`) | Düzenlenecek Dosya |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Sudo** | Ahmet Can BOZKURT, Yusufcan KADAĞAN, Enes Efe TOKTA | `grup/sudo` | `araclar/sudo.json` |
| **2** | **IT Code** | Yusuf Semih Halis, İrem İmancı, Muhammed Uğur Çetinkaya | `grup/it-code` | `araclar/it-code.json` |
| **3** | **RotBalance** | Umut Talha AKPINAR, Cafer YILDIRIM, Merve YILMAZ | `grup/rotbalance` | `araclar/rotbalance.json` |
| **4** | **TDB** | Taha Sait Barışkan, Davut Erdin, Burak Bostancıoğlu | `grup/tdb` | `araclar/tdb.json` |
| **5** | **ITERSOLIS** | İrem Sıla Alav, Şevval Gündoğdu, Yaşar Can Sandallı | `grup/itersolis` | `araclar/itersolis.json` |
| **6** | **Noctalia** | Muhammed Yusuf Yıldız, Mustafa Aykaç, Aziz Emre Yılmaz | `grup/noctalia` | `araclar/noctalia.json` |
| **7** | **404** | Ahsen Nur YILDIRIM, Yeşim YİKİT, İlayda TOPAL | `grup/404` | `araclar/404.json` |
| **8** | **HAT** | Taha Efendioğlu, Harun Esat İrşi, Ahmet Kerim İnce | `grup/hat` | `araclar/hat.json` |
| **9** | **EIB** | Ensar Kibaroğlu, İbrahim Budak, Burak Bahadur | `grup/eib` | `araclar/eib.json` |
| **10** | **SOY Tech** | Semih Beyaztaş, Ozan Hasköy, Yusuf Çırak | `grup/soy-tech` | `araclar/soy-tech.json` |

---

## 🚀 5 Adımda Tek PR Gönderme Rehberi (Her Gruptan 1 Temsilci)

### Adım 1: Depoyu Bilgisayarınıza İndirin (Clone)
```bash
git clone <DEPO_ADRESI>
cd <DEPO_KLASOR_ADI>
```

### Adım 2: Kendi Grubunuzun Dalını (Branch) Açın
*(Örnek olarak `sudo` gösterilmiştir; yukarıdaki tablodan kendi grup kodunuzu yazın)*
```bash
git checkout -b grup/sudo
```

### Adım 3: Kendi Araç Dosyanızı Düzenleyin
`araclar/<grup-kodunuz>.json` dosyasını VS Code ile açın ve:
1. `"pistteMi": false` değerini **`true`** yapın.
2. `"aracEmoji"`, `"renk"` ve `"slogan"` alanlarını grubunuza göre özelleştirip kaydedin:

```json
{
  "grupNo": 1,
  "kod": "sudo",
  "grupAdi": "Sudo",
  "sunumHaftasi": "Hafta 11",
  "uyeler": [
    "Ahmet Can BOZKURT",
    "Yusufcan KADAĞAN",
    "Enes Efe TOKTA"
  ],
  "pistteMi": true,
  "aracEmoji": "🏎️",
  "renk": "#ef4444",
  "slogan": "Root yetkisiyle pistin hakimi!"
}
```

### Adım 4: Anlamlı Commit Atın (Yönerge Madde 13 Biçimi)
```bash
git add araclar/sudo.json
git commit -m "ozellik(sudo): yaris araci piste cikti"
```

### Adım 5: Dalınızı Gönderin ve Tek Bir Pull Request (PR) Açın!
```bash
git push -u origin grup/sudo
```
Ardından GitHub depo sayfasında beliren **"Compare & pull request"** düğmesine tıklayıp PR'ınızı oluşturun. İşleminiz tamamlandı! 🎉

---

## 🤖 GitHub Actions Otomatik Teknik Muayene

Her PR açıldığında `.github/workflows/pr-kontrol-ve-yayin.yml` iş akışı otomatik olarak tetiklenir ve `scripts/muayene-kontrol.js` betiğini çalıştırır. Yerel bilgisayarda test etmek için:

```bash
npm test
```

