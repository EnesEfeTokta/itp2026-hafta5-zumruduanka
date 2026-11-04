# 📱 Telefondan (veya Bilgisayardan) Kod Alma, Branch Açma ve PR Gönderme Rehberi

**Ders:** İnternet Tabanlı Programlama — Hafta 5 (Git, GitHub ve GitHub Actions)  
**Sunum Grubu:** **Nohut Dürüm** (*Tamer Çelik • Faruk Tazeoğlu • Muayad Jumaah*)

---

## 🎯 Etkinlikte Ne Yapıyoruz?

Şu anda depomuzdaki `parcalar/` klasöründe bulunan 10 grubun dosyalarının tamamı **`"aktif": false`** (yani **Kül / Uykuda**) durumundadır. Bu yüzden ekrandaki **Zümrüdüanka (Phoenix)** karanlıkta uyumaktadır.

Her gruptan **sadece 1 temsilci**, kendi **cep telefonundan (veya bilgisayarından)** bu sayfanın altındaki **Grubuna Özel Uyandırma Kodunu** kopyalayacak, kendi grubunun dalını (**`branch`**) açarak `parcalar/<grup-adi>.json` dosyasına yapıştıracak ve **1 adet Pull Request (PR)** gönderecektir!

---

## 📱 TELEFONDAN ADIM ADIM NASIL YAPILIR? (Hiçbir Program Kurmadan 1 Dakikada!)

### 1️⃣ Adım: GitHub Hesabınızla Giriş Yapın ve Kodu Kopyalayın
1. Telefonunuzun tarayıcısından (**Chrome** veya **Safari**) GitHub hesabınıza giriş yapın ve bu depo sayfasını açın.
2. Bu belgenin (`GRUP_KODLARI_VE_TELEFON_REHBERI.md`) alt kısmından **kendi grubunuzu bulun**.
3. Grubunuzun kutusunun sağ üst köşesindeki **📋 Kopyala (Copy)** simgesine dokunarak grubunuzun JSON kodunu kopyalayın.

---

### 2️⃣ Adım: Depoda Kendi Grubunuzun Dosyasını Açın
1. Deponun ana sayfasına dönün ve **`parcalar/`** klasörüne dokunun.
2. Kendi grubunuzun dosyasına dokunun:
   - **Grup 1 (Sudo):** `parcalar/sudo.json`
   - **Grup 2 (IT Code):** `parcalar/it-code.json`
   - **Grup 3 (RotBalance):** `parcalar/rotbalance.json`
   - **Grup 4 (TDB):** `parcalar/tdb.json`
   - **Grup 5 (ITERSOLIS):** `parcalar/itersolis.json`
   - **Grup 6 (Noctalia):** `parcalar/noctalia.json`
   - **Grup 7 (404):** `parcalar/404.json`
   - **Grup 8 (HAT):** `parcalar/hat.json`
   - **Grup 9 (EIB):** `parcalar/eib.json`
   - **Grup 10 (SOY Tech):** `parcalar/soy-tech.json`

---

### 3️⃣ Adım: Kalem (✏️) Simgesine Dokunun ve Kodu Yapıştırın
1. Dosya açıldığında sağ üst köşedeki **✏️ Kalem (Edit this file)** simgesine dokunun.
   *(Not: Eğer depoda Collaborator değilseniz GitHub otomatik olarak "Fork this repository and edit the file" diyecektir, onaylayın; bu işlem sizin için otomatik bir kopya ve dal açar).*
2. Dosyanın içindeki eski (`"aktif": false` olan) tüm yazıları silin (**Tümünü Seç → Sil**).
3. Az önce kopyaladığınız (`"aktif": true` olan) **Grubunuzun Uyandırma Kodunu** kutunun içine **Yapıştırın**.

---

### 4️⃣ Adım: Yeni Branch (Dal) Seçin ve Commit Atın!
1. Kodu yapıştırdıktan sonra sağ üstteki yeşil **"Commit changes..."** butonuna dokunun.
2. Karşınıza çıkan pencerede şu iki alanı doldurun:
   - **Commit message (Commit mesajı):** Dönem Projesi Yönergesi Madde 13'e uygun olarak şunu yazın:  
     `ozellik(grup-adiniz): anka kusu parcasi uyandirildi`  
     *(Örnek: `ozellik(sudo): anka kusu parcasi uyandirildi`)*
   - **Branch (Dal) Seçimi — ÇOK ÖNEMLİ:**
     - Eğer doğrudan bizim depoda düzenliyorsanız, alttaki iki seçenekten **2. seçeneği** işaretleyin:  
       🔘 **`Create a new branch for this commit and start a pull request`**
     - Açılan kutuya dal adı olarak **`grup/grup-adiniz`** yazın *(Örnek: `grup/sudo`, `grup/404`, `grup/tdb`)*.
3. Yeşil **"Propose changes"** (veya **"Commit changes"**) butonuna dokunun.

---

### 5️⃣ Adım: Pull Request (PR) Oluşturun!
1. Karşınıza otomatik olarak **"Open a pull request"** ekranı gelecektir.
2. En alttaki yeşil **"Create pull request"** butonuna dokunun!
3. **TEBRİKLER! 🎉** PR'ınızı açtığınız anda **GitHub Actions** botumuz gönderdiğiniz kodu otomatik olarak muayene edecek ve **✅ Yeşil Onay** verecektir. Ardından **Nohut Dürüm** ekibi PR'ınızı tahtada birleştirecek (`Merge`) ve projeyi derlediğimizde Zümrüdüanka'nın sizin grubunuza ait olan parçası ateşlenecektir!

---
---

# 🔥 10 GRUBUN KOPYALAYIP YAPIŞTIRACAĞI KODLAR

> Her grup temsilcisi **yalnızca kendi grubunun altındaki kodu** kopyalayıp ilgili `parcalar/<grup>.json` dosyasına yapıştırmalıdır. *(Dilerseniz `"mesaj"` kısmına kendi grup sloganınızı yazabilirsiniz!)*

---

## 1️⃣ GRUP 1: Sudo
- **Grup Üyeleri:** Ahmet Can BOZKURT, Yusufcan KADAĞAN, Enes Efe TOKTA
- **Düzenlenecek Dosya:** `parcalar/sudo.json`
- **Açılacak Dal (Branch):** `grup/sudo`
- **Commit Mesajı:** `ozellik(sudo): anka kalbi uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 1,
  "kod": "sudo",
  "grupAdi": "Sudo",
  "sunumHaftasi": "Hafta 11",
  "uyeler": [
    "Ahmet Can BOZKURT",
    "Yusufcan KADAĞAN",
    "Enes Efe TOKTA"
  ],
  "bolgeAdi": "Anka'nın Kalbi ve Kor Çekirdeği",
  "bolgeKodu": "CORE_HEART",
  "aktif": true,
  "anaRenk": "#ff2a5f",
  "ikincilRenk": "#ffbe0b",
  "enerjiSeviyesi": 100,
  "mühür": "SUDO-CORE-01",
  "mesaj": "Root yetkisiyle Anka'nın kalbine yaşam ateşi verildi!"
}
```

---

## 2️⃣ GRUP 2: IT Code
- **Grup Üyeleri:** Yusuf Semih Halis, İrem İmancı, Muhammed Uğur Çetinkaya
- **Düzenlenecek Dosya:** `parcalar/it-code.json`
- **Açılacak Dal (Branch):** `grup/it-code`
- **Commit Mesajı:** `ozellik(it-code): anka taci uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 2,
  "kod": "it-code",
  "grupAdi": "IT Code",
  "sunumHaftasi": "Hafta 13",
  "uyeler": [
    "Yusuf Semih Halis",
    "İrem İmancı",
    "Muhammed Uğur Çetinkaya"
  ],
  "bolgeAdi": "Asil Baş ve Altın Kraliyet Tacı",
  "bolgeKodu": "CROWN_HEAD",
  "aktif": true,
  "anaRenk": "#fbbf24",
  "ikincilRenk": "#fef08a",
  "enerjiSeviyesi": 100,
  "mühür": "ITCODE-CROWN-02",
  "mesaj": "Bilgelik tacı ve keskin bakışlar kodlandı!"
}
```

---

## 3️⃣ GRUP 3: RotBalance
- **Grup Üyeleri:** Umut Talha AKPINAR, Cafer YILDIRIM, Merve YILMAZ
- **Düzenlenecek Dosya:** `parcalar/rotbalance.json`
- **Açılacak Dal (Branch):** `grup/rotbalance`
- **Commit Mesajı:** `ozellik(rotbalance): sol ic kanat uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 3,
  "kod": "rotbalance",
  "grupAdi": "RotBalance",
  "sunumHaftasi": "Hafta 3",
  "uyeler": [
    "Umut Talha AKPINAR",
    "Cafer YILDIRIM",
    "Merve YILMAZ"
  ],
  "bolgeAdi": "Sol İç Kanat ve Alev Omuzları",
  "bolgeKodu": "LEFT_INNER_WING",
  "aktif": true,
  "anaRenk": "#f97316",
  "ikincilRenk": "#fde047",
  "enerjiSeviyesi": 100,
  "mühür": "ROTBALANCE-LWING-03",
  "mesaj": "Sol iç kanat dengesi ve ateş kalkanı aktif!"
}
```

---

## 4️⃣ GRUP 4: TDB
- **Grup Üyeleri:** Taha Sait Barışkan, Davut Erdin, Burak Bostancıoğlu
- **Düzenlenecek Dosya:** `parcalar/tdb.json`
- **Açılacak Dal (Branch):** `grup/tdb`
- **Commit Mesajı:** `ozellik(tdb): sag ic kanat uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 4,
  "kod": "tdb",
  "grupAdi": "TDB",
  "sunumHaftasi": "Hafta 6",
  "uyeler": [
    "Taha Sait Barışkan",
    "Davut Erdin",
    "Burak Bostancıoğlu"
  ],
  "bolgeAdi": "Sağ İç Kanat ve Alev Omuzları",
  "bolgeKodu": "RIGHT_INNER_WING",
  "aktif": true,
  "anaRenk": "#fb923c",
  "ikincilRenk": "#fef9c3",
  "enerjiSeviyesi": 100,
  "mühür": "TDB-RWING-04",
  "mesaj": "Sağ iç kanat senkronize edildi, yükseliş başlıyor!"
}
```

---

## 5️⃣ GRUP 5: ITERSOLIS
- **Grup Üyeleri:** İrem Sıla Alav, Şevval Gündoğdu, Yaşar Can Sandallı
- **Düzenlenecek Dosya:** `parcalar/itersolis.json`
- **Açılacak Dal (Branch):** `grup/itersolis`
- **Commit Mesajı:** `ozellik(itersolis): sol gunes telekleri uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 5,
  "kod": "itersolis",
  "grupAdi": "ITERSOLIS",
  "sunumHaftasi": "Hafta 9",
  "uyeler": [
    "İrem Sıla Alav",
    "Şevval Gündoğdu",
    "Yaşar Can Sandallı"
  ],
  "bolgeAdi": "Sol Güneş Telekleri (Dış Kanat)",
  "bolgeKodu": "LEFT_OUTER_FEATHERS",
  "aktif": true,
  "anaRenk": "#f59e0b",
  "ikincilRenk": "#fffbeb",
  "enerjiSeviyesi": 100,
  "mühür": "ITERSOLIS-SOLAR-05",
  "mesaj": "Güneşin altın telekleri sol kanatta parlıyor!"
}
```

---

## 6️⃣ GRUP 6: Noctalia
- **Grup Üyeleri:** Muhammed Yusuf Yıldız, Mustafa Aykaç, Aziz Emre Yılmaz
- **Düzenlenecek Dosya:** `parcalar/noctalia.json`
- **Açılacak Dal (Branch):** `grup/noctalia`
- **Commit Mesajı:** `ozellik(noctalia): sag yildiz telekleri uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 6,
  "kod": "noctalia",
  "grupAdi": "Noctalia",
  "sunumHaftasi": "Hafta 12",
  "uyeler": [
    "Muhammed Yusuf Yıldız",
    "Mustafa Aykaç",
    "Aziz Emre Yılmaz"
  ],
  "bolgeAdi": "Sağ Yıldız Telekleri (Dış Kanat)",
  "bolgeKodu": "RIGHT_OUTER_FEATHERS",
  "aktif": true,
  "anaRenk": "#c084fc",
  "ikincilRenk": "#fde68a",
  "enerjiSeviyesi": 100,
  "mühür": "NOCTALIA-STAR-06",
  "mesaj": "Gece yıldızlarının gücü sağ kanat teleklerinde!"
}
```

---

## 7️⃣ GRUP 7: 404
- **Grup Üyeleri:** Ahsen Nur YILDIRIM, Yeşim YİKİT, İlayda TOPAL
- **Düzenlenecek Dosya:** `parcalar/404.json`
- **Açılacak Dal (Branch):** `grup/404`
- **Commit Mesajı:** `ozellik(404): mistik gogus zirhi uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 7,
  "kod": "404",
  "grupAdi": "404",
  "sunumHaftasi": "Hafta 8",
  "uyeler": [
    "Ahsen Nur YILDIRIM",
    "Yeşim YİKİT",
    "İlayda TOPAL"
  ],
  "bolgeAdi": "Mistik Göğüs Zırhı ve Boyun Tüyleri",
  "bolgeKodu": "MYSTIC_ARMOR",
  "aktif": true,
  "anaRenk": "#ec4899",
  "ikincilRenk": "#fbcfe8",
  "enerjiSeviyesi": 100,
  "mühür": "404-ARMOR-07",
  "mesaj": "404: Kusur Bulunamadı! Kristal göğüs zırhı tamamlandı!"
}
```

---

## 8️⃣ GRUP 8: HAT
- **Grup Üyeleri:** Taha Efendioğlu, Harun Esat İrşi, Ahmet Kerim İnce
- **Düzenlenecek Dosya:** `parcalar/hat.json`
- **Açılacak Dal (Branch):** `grup/hat`
- **Commit Mesajı:** `ozellik(hat): plazma penceler uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 8,
  "kod": "hat",
  "grupAdi": "HAT",
  "sunumHaftasi": "Hafta 7",
  "uyeler": [
    "Taha Efendioğlu",
    "Harun Esat İrşi",
    "Ahmet Kerim İnce"
  ],
  "bolgeAdi": "Plazma Pençeler ve Ateş Dalgası",
  "bolgeKodu": "PLASMA_TALONS",
  "aktif": true,
  "anaRenk": "#06b6d4",
  "ikincilRenk": "#a5f3fc",
  "enerjiSeviyesi": 100,
  "mühür": "HAT-TALON-08",
  "mesaj": "Plazma pençeler ve enerji halkaları ateşlendi!"
}
```

---

## 9️⃣ GRUP 9: EIB
- **Grup Üyeleri:** Ensar Kibaroğlu, İbrahim Budak, Burak Bahadur
- **Düzenlenecek Dosya:** `parcalar/eib.json`
- **Açılacak Dal (Branch):** `grup/eib`
- **Commit Mesajı:** `ozellik(eib): besli kuyruk alevi uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 9,
  "kod": "eib",
  "grupAdi": "EIB",
  "sunumHaftasi": "Hafta 10",
  "uyeler": [
    "Ensar Kibaroğlu",
    "İbrahim Budak",
    "Burak Bahadur"
  ],
  "bolgeAdi": "Efsanevi Beşli Kuyruk Alevi",
  "bolgeKodu": "TAIL_RIBBONS",
  "aktif": true,
  "anaRenk": "#10b981",
  "ikincilRenk": "#fde047",
  "enerjiSeviyesi": 100,
  "mühür": "EIB-TAIL-09",
  "mesaj": "Kuyruk telekleri rüzgarda alev şeritleri gibi dalgalanıyor!"
}
```

---

## 🔟 GRUP 10: SOY Tech
- **Grup Üyeleri:** Semih Beyaztaş, Ozan Hasköy, Yusuf Çırak
- **Düzenlenecek Dosya:** `parcalar/soy-tech.json`
- **Açılacak Dal (Branch):** `grup/soy-tech`
- **Commit Mesajı:** `ozellik(soy-tech): kutsal gunes halesi uyandirildi`
- **Yapıştırılacak Kod:**

```json
{
  "parcaNo": 10,
  "kod": "soy-tech",
  "grupAdi": "SOY Tech",
  "sunumHaftasi": "Hafta 4",
  "uyeler": [
    "Semih Beyaztaş",
    "Ozan Hasköy",
    "Yusuf Çırak"
  ],
  "bolgeAdi": "Kutsal Güneş Halesi ve Takımyıldız Aurası",
  "bolgeKodu": "ASCENSION_HALO",
  "aktif": true,
  "anaRenk": "#6366f1",
  "ikincilRenk": "#fde047",
  "enerjiSeviyesi": 100,
  "mühür": "SOYTECH-HALO-10",
  "mesaj": "10 grubu birbirine bağlayan kutsal yükseliş halesi tamamlandı!"
}
```
