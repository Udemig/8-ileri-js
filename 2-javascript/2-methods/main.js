//* * String Methodları

// let metin1 = 'Bugün veritabanı sistemleri üzerine çalıştım';

// let metin2 = 'Javascript ile harika bir animasyon geliştirmişler';

// let metin3 = 'Selam, naber ?  Uzun, zamandır görüşmedik.';

// let metin4 = '       Selam, naber ?  Uzun zamandır görüşmedik.     ';

// //** indexOf  > kelime metnin kaçıncı sırasında olduğunu bulur
// var sira = metin1.indexOf('veritabanı');
// document.write('indexOf: ' + sira + '<br>');

// //** charAt > bir sıradki harfi bulmaya yarar
// var sira2 = metin2.charAt(5);
// document.write('charAt: ' + sira2 + '<br>');

// //** startsWith >  metin bu kelimeyle başlıyor mu kontrol etme
// var sonuc = metin2.startsWith('Javascript');
// document.write('startsWith: ' + sonuc + '<br>');

// //** endsWith >  metin bu kelimeyle bitiyor mu kontrol etme
// var sonuc2 = metin3.endsWith('görüşmedik.');
// document.write('endsWith: ' + sonuc2 + '<br>');

// //** includes >  metin bu kelimeyi içeriyor mu kontrol etme
// var sonuc3 = metin2.includes('harika');
// document.write('includes: ' + sonuc3 + '<br> <br>');

// //** concat >  iki metni birleştirme
// var yeniMetin = metin1.concat(metin2);
// document.write('concat: ' + yeniMetin + '<br> <br>');

// //** toLowerCase | toUpperCase > harfleri değiştirme
// var buyuk = metin1.toUpperCase();
// var kucuk = metin3.toLowerCase();
// document.write('<b>toUpperCase</b>: ' + buyuk + '<br> <br>');
// document.write('<b>toLowerCase</b>: ' + kucuk + '<br> <br>');

// //** trim > baş ve sondaki boşlukları siler
// console.log('Trimden Önce: ', metin4);
// console.log('Trimden Sonra: ', metin4.trim());

// //** replace > bir kelimeyi değiştirmye yarar
// const yeniMetin1 = metin1.replace('veritabanı', 'işletim');
// document.write('<b>replace</b>: ' + yeniMetin1 + '<br> <br>');

// //** split > diziye çevirme
// const parcalandi = metin3.split(' ');

// console.log(parcalandi);

// //** join > diziyi metne çevirir ve her parçanın devamına gelicek işreti belirler
// const birlesti = parcalandi.join('  :) ');

// console.log(birlesti);
// document.write('<b>join</b>: ' + birlesti + '<br> <br>');

// //** slice / substring / substr > belirli parçasını alma
// const deneme = metin2.slice(0, 10);
// document.write('<b>slice</b>: ' + deneme + '<br> <br>');

// const deneme2 = metin2.substring(0, 20);
// document.write('<b>substring</b>: ' + deneme2 + '<br> <br>');

// const deneme3 = metin2.substr(0, 30);
// document.write('<b>substr</b>: ' + deneme3 + '<br> <br>');

//! Sayı Methodları

//* Math > matematik ile alakalı değişkenlere ve methodları sahip js objesi
console.log(Math);

//** min/max > en büyük/küçük elemanı bulmaya yarar
const sonuc1 = Math.min(12, 545, 678, 12, 3796, 123, 43);
document.write('<b>Math.min()</b>: ' + sonuc1 + '<br> <br>');

const sonuc2 = Math.max(12, 545, 678, 12, 3796, 123, 43);
document.write('<b>Math.max()</b>: ' + sonuc2 + '<br> <br>');

//** sqrt > karekökü almaya yarar
const kok = Math.sqrt(25);
document.write('<b>Math.sqrt()</b>:', kok + '<br> <br>');

//** pow > üs almaya yarar
const us = Math.pow(2, 10);
document.write('<b>Math.pow()</b>:', us + '<br> <br>');

//** random > 0 ile 1 arasında rastgele sayı üretir
const rastgele = Math.random();
document.write('<b>Math.random()</b>:', rastgele * 10 + '<br> <br>');

//** floor(zemin) > sayıyi aşşağıya yuvarlar
const assagi = Math.floor(5.968);
document.write('<b>Math.floor()</b>:', assagi + '<br> <br>');

//** ceil(tavan) > sayiyi yukarıya yuvarlar
const yukari = Math.ceil(5.168);
document.write('<b>Math.floor()</b>:', yukari + '<br> <br>');

//** round > en yakın basamağa yuvarlar
const yuvarlama = Math.round(5.968);
document.write('<b>Math.round()</b>:', yuvarlama + '<br> <br>');

//* parseInt > veriyi tamsayıya çevirmeye yarar
const tamsayi = parseInt(5.92345);
const tamsayi2 = parseInt('126');
document.write('<b>parseInt()</b>:', tamsayi + '<br> <br>');
document.write('<b>parseInt()</b>:', tamsayi2 + '<br>');

//* toFixed > . dan sonraki basamak sayının belirliyoruz
const sayi9 = (7.65235).toFixed(3);
document.write('<b>toFixed()</b>:', sayi9 + '<br> <br>');

//* toPrecision > basamak sayının belirliyoruz
const sayi13 = (7.65235).toPrecision(3);
document.write('<b>toPrecision()</b>:', sayi13 + '<br> <br>');

// NaN > Not a Number > Sayı Değil

