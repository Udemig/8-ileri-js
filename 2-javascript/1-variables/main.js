//! Değişkenler - Variables

// metin- string
var oyuncu_isim = 'ahmetxx';

// sayi - number
var dusman_can = 400;

// mantıksal - boolean
var boss_mu = true;
var bildirim_verildi_mi = false;

// dizi - array
var karakterler = ['sonic', 'mario', 'ken'];

// nense - object
var dusman = {
  isim: 'Greg',
  can: 950,
  hasar: 120,
  boss_mu: true,
  saldirilar: ['kılıç savurma', 'takla', 'dönme'],
  saldir: function () {
    document.write('Kılıcını savurdu ve hasar verdi.... <br>');
  },
};

// objenin içindeki değere erişme
document.write('dusman.isim: ', dusman.isim + '<br>');
document.write('dusman.saldirilar: ', dusman.saldirilar + '<br>');

// objenin içindeki işleve (fonksiyona) erişme
dusman.saldir();
// dizinin içindeki değerlere erişme
document.write(karakterler[1] + '<br>');

//! Koşullar

var yas = 29;

// Karşılaştırma operatörleri
// > , < , >= , <= , != , !== , == , ===

if (yas >= 18) {
  // yaş değeri 18'den büyük veya eşitse bu kodlar çalışsın
  document.write(
    'Ehliyenizi sisteme giriş yaparak alabilrisiniz <br>'
  );
} else {
  // değilse bu kodlar çalısın
  document.write(
    "Yaşınız 18'den küçük daha sonra tekrar deneyiniz <br>"
  );
}

// == sadece değer kontrolü yapar
if ('33' == 33) {
  document.write(' "33" == 33 koşulu doğru çıktı <br>');
}

// === hem değer hem de tip kontrolü yapar
if ('66' === 66) {
  document.write('"66" === 66 doğru çıktı');
} else {
  document.write('"66" === 66 doğru çıkmadı <br>');
}

// Birden fazla koşulu sıralama
const number = 34;

document.write('Girilen Yaş: ', number + '<br>');

if (number >= 10 && number < 100) {
  document.write('İki basmaklı bir sayı <br>');
} else if (number > 0) {
  document.write('Pozitif bir sayı');
} else if (typeof number == 'number') {
  document.write('negatif bir sayı');
} else {
  document.write('BU BİR SAYI DEĞİLDİR!!!');
}

/*
 ! Fonksiyonlar
 * Belirli bir görevi yerine getiren
 * veya sonuç üreten yeniden kullaıbilen
 * kod blokları
 * 
 * () : parametreler > fonksiyonun dışarıdan değer almasını sağlar
 * {} : fonksiyon tetiklenince çalışıcak kodlar
*/

function selamla(isim) {
  document.write(
    'Merhabalar ' + isim + ' , Hesabınıza hoşgeldiniz! <br>'
  );
}

selamla('Ahmet');
selamla('Kerem');
selamla('Davur');
selamla('Bora');

// Sonuç üreten fonksiyonlar hesaplamalar yapar ve elde
// ettiği sonucu fonksiyonun  çağrıldığı yere gönderir (döndürür)

function alanBul(uzun, kisa) {
  var alan = uzun * kisa;
  // return fonksiyonun çağrıldığı yere değer göndermeye yarar
  return alan;
}

// fonksiyonun ürettiği sonucu elde etmek
var alan = alanBul(50, 30);

document.write('Kısa kenar 30 ve uzun kenar 50 ise alan: ' + alan);

// Strşng Methodları
