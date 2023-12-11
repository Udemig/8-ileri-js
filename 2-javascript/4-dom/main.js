//! DOM
// Document Object Model
// HTML belgeisni javascriipt'de temsil eden yapıdır.
// Bu html belgesindeki içeriğre dinamik olaarka
// javascript'ten erişimimizi sağlar
// DOM sayesinde html'e eklemeler çıkarmala güncellemeler yapabiliriz.
// HTML yapısına js'den erişmek için "document" objesini kullanırız

// HTML'de tanımaldığımız elemaları js'ye çağırmaya yarayan fonksiyonlar
// bu fonksiyon geriye htlm elemanın bütün bilgilerini içeren bir obje döndürür

// 1) Verdiğimiz id ile eşleşen 1 elemanı getirir
var baslik = document.getElementById('baslik');

// 2) Verdiğimiz class ile eşleşen bütün elemanları getirir.(dizi içerisnde)
var paragraflar = document.getElementsByClassName('parag');

console.log(paragraflar);

// 3) Veriğimiz etiket ismiyle eşeleşn bütün elşemanları getirir.(dizi içerisinde)
var sectionlar = document.getElementsByTagName('section');

console.log(sectionlar);

// 4) CSS seçicisine göre 1 eleman seçemeye yarar
var kutu = document.querySelector('.kutu');
var baslik = document.querySelector('#baslik');
var div = document.querySelector('div');

console.log(kutu, baslik, div);

// 5) CSS seçicisine göre bütün elemanları seçemeye yarar
const paragraf = document.querySelectorAll('p');
console.log(paragraf);

// Seçtiğimiz HTML elemanlarını hangi özelliklerini değiştirebilir?
// HER özelliğini değiştirebiliyoruz. (İçerik,style,class,src)

// 1) Yazı İçeriği Değitirme
baslik.innerText = 'DOM (Document Object Model)';

// 2) HTML İçeriği Değiştirme
var parag1 = document.querySelector('.parag1');
parag1.innerHTML = 'Lorem <b>Naber</b>  <i>Nasılsın</i> ? ';

// 3) Stillerini değiştirme
var parag2 = document.querySelector('.parag2');
parag2.style.padding = '20px';
parag2.style.borderRadius = '20px';
parag2.style.backgroundColor = 'red';

console.log('---------------------------');

// 4) Class'larını değiştirme
// ClassList'de byulunan methodlarını kullanarak güncelleme yaparız:
var kutucuk = document.querySelector('#kutu');
console.log(kutucuk.classList);

// add > yeni bir class ekler
kutucuk.classList.add('mavi');

// remove > varolan class'ı kaldırma
kutucuk.classList.remove('yesil');

// toggle > class yoksa ekler varsa kaldırır
kutucuk.classList.toggle('mavi');
kutucuk.classList.toggle('yesil');

// contains > class varmı kontrol eder
console.log(kutucuk.classList.contains('mavi'));
console.log(kutucuk.classList.contains('kose'));

// 5) Javascript'te  eleleman oluşturup html'e gönderme
// a) createElement: yeni eleman oluşturur
var yeniDiv = document.createElement('div');

yeniDiv.innerText = "BU JS'den oluştuurlan bir div";
yeniDiv.classList.add('mavi', 'bosluk', 'kose');

// b) appendChild: oluşturlkan elemanı html'e gönderiri
var yer = document.querySelector('#burasi');
yer.appendChild(yeniDiv);

// 6) Elemanlar gerçekleşen olayları izleme
// Kullanıcların gerçekleştirği aksiyonlara göre içerği değiştrimek
// isteyebilir bu yyüzden bu akssiyonları izlememiz gerekir.
// aksiyonlar: click, doubleClik, mouseover, mouseout, keydown, input, submit, change, load, DOMContentLoaded, resize

// 1- izlemek isteidğimiz olay
// 2- olay gerçekelşince çalışıcak fonksiyon
// note: tanımladığımız bu fonksiyon her zaman event parametresi alır
// event: geçekleşen oplayla alakalı bilgileri içeren obje
parag2.addEventListener('click', function () {
  console.log('Butona Tıklandı');
});
