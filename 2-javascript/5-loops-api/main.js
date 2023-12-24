//! Döngü Nedir ?
//* Bilgisayara programlamawsında  bir döngü, belirli bir görevin
//* bir koşulu sağladığı sürece tekrar etmesini sağlayan yapıdır.
//* Javascripte farklı döngü çseşitleri bulunur

// 1) For Döngüsü:

// koşul alanı
for (let sayac = 0; sayac < 10; sayac++) {
  // işlev alanı
  console.log(sayac + ' döngü tekrar etti');
}

// diziler için for:
const kullanicilar = [
  'aras',
  'bora',
  'davut',
  'emir',
  'kerem',
  'yasin',
  'emir',
  'kerem',
  'yasin',
]; // 6

for (let i = 0; i < kullanicilar.length; i++) {
  console.log('kullanıcı bulundu:', kullanicilar[i], i);
}

// 2) while döngüsü
let i = 0;
while (i < 5) {
  console.log(i);

  i++;
}

// diziler ile while kullanımı
let sayi = 0;
while (sayi < kullanicilar.length) {
  console.log(kullanicilar[sayi]);

  sayi++;
}

// 3) do while
let sayi2 = 0;

do {
  console.log(sayi2);
  sayi2++;
} while (sayi2 < 10);

// 4) forEach > sadece dizilerde kullanılır
kullanicilar.forEach(function (kullanici) {
  console.log(kullanici);
});

// VERİ İSTEKLERİ
// fetch iki parametre ister
// 1. hangi api istek atıcağımız url'i
// 2. istek methodu, ve diğer ayarlar

function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  })
    // istek başarılı olursa yapılacaklar:
    .then(function (cevap) {
      return cevap.json();
    })
    // işlenen cevabı alma
    .then(function (veri) {
      console.log(veri);
    })
    // eğerki olursa hatayı yakalar
    .catch(function (hata) {
      console.log('yakalnan hata>>>', hata);
    });
}

getData();
