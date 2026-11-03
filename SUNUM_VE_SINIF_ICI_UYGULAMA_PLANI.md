# 🌯 Nohut Dürüm — 5. Hafta Sistematik Ders ve Uygulama Akış Planı

**Ders:** İnternet Tabanlı Programlama — Hafta 5  
**Konu:** Git, GitHub ve GitHub Actions ile İş Akışı Otomasyonu  
**Öğretim Elemanı:** Doç. Dr. Hamza POLAT  
**Grup Üyeleri (Nohut Dürüm):**
1. **Tamer Çelik**
2. **Faruk Tazeoğlu**
3. **Muayad Jumaah**

---

## 📊 İzlenceye Uygun Zaman ve Görev Dağılımı Özeti

Ders izlencesinin 3. ve 4. sayfasındaki rubriğe göre oturum bölümleri ve grup içi görev dağılımı aşağıdaki gibi planlanmıştır:

| Sıra | Oturum Bölümü | Süre | Sorumlu Üyeler | Yapılacak İşlem |
| :---: | :--- | :---: | :--- | :--- |
| **1** | **Açılış ve Konu Bağlantısı** | 10 dk | Doç. Dr. Hamza POLAT | Önceki haftanın değerlendirmesi ve 5. haftaya giriş |
| **2** | **Kuramsal Anlatım (Slayt + Kavram Haritası)** | 40 dk | Tamer • Faruk • Muayad | Git temelleri, Branch/Merge, PR kültürü ve GitHub Actions |
| **3** | **Uygulamalı Gösterim (VS Code Canlı Kodlama)** | 30 dk | Tamer • Faruk • Muayad | `araclar/ornek-demo.json` üzerinden canlı Branch, Commit, Conflict, PR ve Actions gösterimi |
| **4** | **Sınıf İçi Uygulama ("Git Grand Prix")** | 45 dk | Tüm Sınıf + Nohut Dürüm | 10 grubun tek PR göndermesi, garaj takibi ve canlı şans yarışı |
| **5** | **Değerlendirme ve Soru–Cevap** | 25 dk | Doç. Dr. Hamza POLAT + Grup | Yarış ödül töreni, soru-cevap ve haftanın ödev bağlantısı |

---

## 🧭 Adım Adım "Tık Tık" İlerleyecek Sunum Kılavuzu

### AŞAMA 1: Derse Başlamadan 15 Dakika Önce Hazırlık (Kontrol Listesi)
1. Bu klasördeki tüm dosyaları GitHub'da açtığınız **`itp2026-hafta5-git-grand-prix`** adlı herkese açık (Public) depoya yükleyin (`main` dalına).
2. GitHub deponuzda **Settings → Pages** menüsüne girip **Build and deployment → Source** kısmını **`GitHub Actions`** olarak seçin.
3. **10 Grubun Yetkilendirilmesi (En Pratik İki Yöntemden Birini Seçin):**
   - **Yöntem A (Doğrudan Branch Push - Önerilen):** Derse girmeden önce her gruptan **1 temsilcinin** GitHub kullanıcı adını depoda **Settings → Collaborators → Add people** kısmından ekleyin. Böylece gruplar doğrudan `git clone` yapıp `git push -u origin grup/<kod>` çalıştırabilir.
   - **Yöntem B (Fork & PR):** Collaborator eklemekle uğraşmak istemezseniz, her grup temsilcisi GitHub sayfasından sağ üstteki **Fork** tuşuna basar, kendi dalında düzenleyip tek tıkla sizin deponuza **Pull Request** açar.
4. Projeksiyon ekranında `index.html` sayfasını (VS Code **Live Server** ile veya GitHub Pages adresinden) tam ekran açın.

---

### AŞAMA 2: 30 Dakikalık Canlı Kodlama (Live Coding) Senaryosu
> 💡 **Çok Önemli:** Canlı kodlama sırasında sınıftaki 10 grubun dosyalarına (`sudo.json`, `404.json` vb.) **dokunmayın!** Sadece sizin için özel hazırladığımız **`araclar/ornek-demo.json`** dosyasını kullanın.

1. **Dakika 00–08 (Depo ve Branch Gösterimi):**
   - VS Code terminalini açın ve `git status`, `git branch` komutlarını gösterin.
   - `git checkout -b ozellik/safety-car` komutuyla yeni bir dal açın.
   - `araclar/ornek-demo.json` dosyasındaki `"mesaj"` alanını değiştirin.
2. **Dakika 08–15 (Anlamlı Commit ve Teknik Muayene Testi):**
   - Terminalde `npm test` (veya `node scripts/muayene-kontrol.js`) çalıştırarak JSON muayenesinin nasıl çalıştığını gösterin.
   - Bilerek bir virgülü silip tekrar `npm test` çalıştırın ve kırmızı hata mesajını sınıfa gösterin, ardından virgülü düzeltin.
   - Dönem Projesi Yönergesi Madde 13'e uygun commit atın:
     ```bash
     git add araclar/ornek-demo.json
     git commit -m "ozellik(demo): safety car mesaji guncellendi"
     ```
3. **Dakika 15–22 (Merge Conflict / Çakışma Çözümü Gösterimi):**
   - Uygulamanın **4. Sekmesini ("Conflict Demo & Hakem Paneli")** açın.
   - Sol taraftaki **Canlı Merge Conflict Simülatörü** üzerinde `<<<<<<< HEAD`, `=======` ve `>>>>>>>` işaretlerinin ne anlama geldiğini ve nasıl çözüldüğünü tek tıkla görsel olarak gösterin.
4. **Dakika 22–30 (Pull Request, GitHub Actions ve GitHub Pages):**
   - `git push -u origin ozellik/safety-car` ile dalı GitHub'a gönderin.
   - GitHub üzerinden canlı olarak Pull Request açın.
   - PR altında **GitHub Actions ("🔧 Araç Teknik Muayenesi")** botunun otomatik çalışıp **✅ Yeşil Tik** verdiğini sınıfa izletin ve **Merge Pull Request** tuşuna basın!

---

### AŞAMA 3: 45 Dakikalık Sınıf İçi Uygulama ("Git Grand Prix")

1. **Dakika 00–05 (Görev Dağıtımı — Sekme 1):**
   - Projeksiyonda uygulamanın **1. Sekmesini ("1. Görev & Komut Üretici")** açın.
   - Her gruptan sadece **1 temsilcinin** kendi grubunun dalını (`grup/sudo`, `grup/tdb` vb.) açıp `araclar/<grup>.json` dosyasında `"pistteMi": true` yapacağını ve kendi sloganını/emojisini seçip **sadece 1 adet PR** göndereceğini açıklayın.
2. **Dakika 05–30 (Canlı Garaj Lobisi & Rehberlik — Sekme 2):**
   - Projeksiyonda **2. Sekmeyi ("2. Canlı Garaj & PR Lobisi")** açın.
   - Tamer, Faruk ve Muayad sınıfta gezerek gruplara rehberlik eder.
   - GitHub'a düşen PR'ları projeksiyonda canlı olarak inceleyip **Merge** edin.
   - Siz Merge ettikçe (ve yerel klasörde `git pull` yaptıkça veya 4. sekmeden GitHub reponuzu bağladıysanız otomatik olarak) tahtadaki Garaj ekranında grupların kartları ses efektiyle **🟢 PİSTTE HAZIR** durumuna geçer!
   - *(Acil Durum İpucu: Eğer bir grubun internetinde sorun çıkarsa, 4. Sekmedeki **Nohut Dürüm Hakem Paneli**'nden o grubun sloganını yazıp tek tıkla "Pistte (True)" yapabilirsiniz; böylece hiçbir grup dışarıda kalmaz!)*
3. **Dakika 30–45 (Büyük Final: Git Grand Prix Şans Yarışı! — Sekme 3):**
   - Tüm gruplar hazır olduğunda **3. Sekmeye ("3. Git Grand Prix Pisti 🏁")** geçin.
   - Sınıfla birlikte geri sayım yaparak **"🏁 YARIŞI BAŞLAT!"** butonuna basın!
   - Yarış sırasında rastgele çıkan *Nohut Dürüm Turbosu*, *Merge Conflict Çukuru* ve *GitHub Actions Nitrosu* olaylarını spiker bandından sesli okuyarak sınıfı coşturun.
   - Yarış bittiğinde açılan **Şampiyonluk Podyumu** ekranında 1. 🥇, 2. 🥈 ve 3. 🥉 olan grupları alkışlatın (vaktiniz kalırsa **"🎲 Yeni Şans Yarışı Başlat (Rövanş!)"** butonuyla 1-2 tur daha yarıştırabilirsiniz!).

