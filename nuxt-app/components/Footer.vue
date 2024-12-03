<template>
    <footer class="ticiFooterContent">
      <div class="ticiFooterTop">
        <div class="ticiContainer">
          <!-- Sosyal Medya -->
         
  
          <!-- Footer Menu -->
          <div class="ticiFooterCenter">
            <div class="ticiContainer">
              <div class="ticiFooterMenu footerRow">
                <!-- Kurumsal -->
                <div class="footerCol f-col-3">
                  <div class="fmenu-wrap">
                    <h3>Kurumsal</h3>
                    <ul class="List">
                      <li class="Item"><a class="Link" href="https://artukbey.com">Anasayfa</a></li>
                      <li class="Item"><a class="Link" href="/hakkimizda">Hakkımızda</a></li>
                      <li class="Item"><a class="Link" href="/bizeulasin/iletisim">Bize Ulaşın / İletişim</a></li>
                      <li class="Item"><a class="Link" href="/magazalarimiz1">Mağazalarımız</a></li>
                    </ul>
                  </div>
                </div>
  
                <!-- Müşteri İlişkileri -->
                <div class="footerCol f-col-3">
                  <div class="fmenu-wrap">
                    <h3>Müşteri İlişkileri</h3>
                    <ul class="List">
                      <li class="Item"><a class="Link" href="https://artukbey.com/UyeOl.aspx">Üyelik</a></li>
                      <li class="Item"><a class="Link" href="/iptalveiadekosullari">İptal ve İade Kargoları</a></li>
                      <li class="Item"><a class="Link" href="/gizliliksözlesmesi">Gizlilik Sözleşmesi</a></li>
                      <li class="Item"><a class="Link" href="/uzakmesafesatissozlesmesi">Uzak Mesafe Satış Sözleşmesi</a></li>
                      <li class="Item"><a class="Link" href="/kvkk">KVKK</a></li>
                    </ul>
                  </div>
                </div>
  
                <!-- Yardım -->
                <div class="footerCol f-col-3">
                  <div class="fmenu-wrap">
                    <h3>Yardım</h3>
                    <ul class="List">
                      <li class="Item"><a class="Link" href="/müşterihizmetleri">Müşteri Hizmetleri</a></li>
                      <li class="Item"><a class="Link" href="/sikcasorulansorular">Sıkça Sorulan Sorular</a></li>
                      <li class="Item"><a class="Link" href="/siparistakip.aspx">Kargo Takibi</a></li>
                    </ul>
                  </div>
                </div>
  
                <!-- Bülten -->
                <div class="footerCol f-col-3">
                  <div class="ticiBulten">
                    <h2>Bizden Haberler</h2>
                    <p>Bültenimize Üye Olun! Tüm İndirim ve Fırsatlardan İlk Sizin Haberiniz Olsun!</p>
                    <div class="ticiBultenContent">
                      <div id="divNewsLetter" class="newaslater">
                        <label>E-bültenimize kayıt olun!</label>
                        <div id="UpdatePanel1" class="newsletterContent">
                          <input
                            type="text"
                            class="newstext textbox"
                            name="txtbxNewsletterMail"
                            id="txtbxNewsletterMail"
                            placeholder="E-posta adresinizi yazın..."
                          />
                          <a
                            id="btnMailKaydet"
                            href="javascript:void(0)"
                            class="newsbutton button"
                            @click="saveNewsletter"
                            >Gönder</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Footer Alt -->
          <div class="ticiFooterBottom">
            <div class="ticiContainer">
              <div class="footerRow">
                <div class="footerCol f-col-8 f-col-xs-12">
                  <div class="ticiBankaLogo">
                    <img
                      alt=""
                      src="https://cdn.ticimax.com/Uploads/hazirSablonResimleri/footerImg/bankimg-2.png"
                    />
                  </div>
                </div>
                <div class="footerCol f-col-4 f-col-xs-12 fRight">
                  <div class="ticiCopyDiv">
                    © 2020 <strong>artukbey.com</strong> - Tüm Hakları Saklıdır.
                    SEO Hizmeti
                    <a href="https://magmamedya.com" target="_blank"><strong>Magma Medya</strong></a
                    >
                    tarafından sağlanmaktadır.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts" setup>
  function saveNewsletter() {
    alert("Bülten kaydı alındı!");
  }
  </script>
  
  <style scoped>
 .ticiFooterContent {
  background-color: #731e1d; /* Kırmızı arka plan */
  color: #fff;
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
}

.ticiFooterContent .ticiFooterMenu {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.footerCol h3 {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
}

.footerCol ul {
  list-style: none;
  padding: 0;
}

.footerCol ul li {
  margin-bottom: 10px;
}

.footerCol ul li a {
  color: #fff;
  text-decoration: none;
}

.footerCol ul li a:hover {
  text-decoration: underline;
}

.ticiBulten h3 {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

.ticiBulten p {
  margin-bottom: 20px;
  font-size: 14px;
}

.newsletterContent {
  display: flex;
  gap: 10px;
}

.newsletterContent input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.newsletterContent a {
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}

.newsletterContent a:hover {
  background-color: #c0392b;
}

.ticiFooterBottom {
  background-color: #5a1615;
  padding: 20px 0;
  color: #fff;
}

.ticiFooterBottom .footerRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.ticiFooterBottom .ticiBankaLogo img {
  max-width: 100%;
  height: auto;
}

.ticiFooterBottom .ticiCopyDiv {
  font-size: 12px;
}

.ticiFooterBottom .ticiCopyDiv a {
  color: #3498db;
  text-decoration: none;
}

.ticiFooterBottom .ticiCopyDiv a:hover {
  text-decoration: underline;
}

  </style>
  