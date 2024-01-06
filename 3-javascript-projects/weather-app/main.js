// html'den çağrılan elemanlar
const ele = {
  date: document.querySelector('.date'),
  city: document.querySelector('.city'),
  status: document.querySelector('.status'),
  img: document.querySelector('.icon img'),
  degree: document.querySelector('.degree'),
  feel: document.querySelector('.feel'),
  hum: document.querySelector('.hum'),
  wind: document.querySelector('.wind'),
  form: document.querySelector('form'),
  locations: document.querySelector('.locations'),
  locBtn: document.querySelector('#locBtn'),
  rise: document.querySelector('#rise'),
  set: document.querySelector('#set'),
  max: document.querySelector('#max'),
  min: document.querySelector('#min'),
};

const api_key = 'c00d1478e4a71918461139a41c63c57d';

// gelen veriye göre arayüzü ekrana bas
function renderUi(data) {
  // ülke kısmını belirleme
  var text = data.sys.country ? ',' + data.sys.country : '';

  // şehir belirle
  ele.city.innerText = data.name + text;

  // durumu belirle
  ele.status.innerText = data.weather[0].main;

  // dereceyi belirle
  ele.degree.innerText = data.main.temp.toFixed(1) + '°';

  // ikonu belirle
  ele.img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // hissedilen/nem/rüzgar belirle
  ele.feel.innerText = data.main.feels_like + '°';
  ele.hum.innerText = data.main.humidity + '%';
  ele.wind.innerText = data.wind.speed + 'km/s';

  // güneşin doğuş tarihini ekrana bas
  ele.rise.innerHTML = new Date(
    data.sys.sunrise * 1000
  ).toLocaleTimeString();

  // güneşin batış tarihini ekrana bas
  ele.set.innerHTML = new Date(
    data.sys.sunset * 1000
  ).toLocaleTimeString();

  // en yüksek ve düşük dereceyi belirle
  ele.max.innerHTML = data.main.temp_max + '°';
  ele.min.innerHTML = data.main.temp_min + '°';
}

// parametre olarak gelen şehre göre hava durumunu alır
async function getWeatherData(city) {
  // parametre olarak aldığı şehrin hava durmunu alır
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
  );

  // gelen veriyi formatla
  const data = await res.json();

  // ve ekrana basar
  renderUi(data);
}

// sayfa yüklendiği anda istanbul verilerini al
document.addEventListener('DOMContentLoaded', function () {
  getWeatherData('İstanbul');
});

// form gönderiğinde inputtaki şehrin veilerini al
ele.form.addEventListener('submit', (e) => {
  // sayfa yenilemeyi engelle
  e.preventDefault();

  // inputtaki şehir ismini al
  const city = e.target[0].value;

  // bu şehrin verilerini al
  getWeatherData(city);
});

// lokasyon butonlara tıklandığında tıklanılan butona göre veri al
ele.locations.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // tıklanılan butonun yazısına erişme
    const city = e.target.innerText;

    // tıklanılan şehri al
    getWeatherData(city);
  }
});

// kullancın gps'ten konumunu al
ele.locBtn.addEventListener('click', () => {
  // kullanıcn konumunu öğrenme
  navigator.geolocation.getCurrentPosition(async (e) => {
    // kordinatlara göre veriyi alma
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&units=metric&appid=${api_key}`
    );

    // gelen veriyi formatla
    const data = await res.json();

    // veriyi ekran bas
    renderUi(data);
  });
});
