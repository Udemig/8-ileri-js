// api isteğini atıcağımız url
var url =
  'https://shazam.p.rapidapi.com/charts/track?locale=tr&pageSize=20&startFrom=0';

// isteği atarken göndermemiz gereken ayarlar
var options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '554b5c9a03msh4a008333f18e61ap1fb405jsnbaa4227abd20',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

// 1) Sayfanın yüklenmesini izle
document.addEventListener('DOMContentLoaded', function () {
  // 2) Api'dan müzik verilerini al
  fetch(url, options)
    // 3) veirleri işle
    .then(function (res) {
      return res.json();
    })
    // 4) Aldığımız verileri ekrana kart şeklinde bas
    .then(function (data) {
      renderCards(data.tracks);
    });
});

const list = document.querySelector('#list');

// verileri ekran basar
function renderCards(data) {
  data.forEach((song) => {
    // 1) div oluşturma
    const div = document.createElement('div');

    // 2) carda veri ekle
    div.dataset.url = song.hub.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images.coverart;

    // 3) class verme
    div.className = 'card';

    // 4) içeriğini belirleme
    div.innerHTML = `
             <figure>
              <img
                src="${song.images.coverart}"
              />
              <div class="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>

            <h4>${song.subtitle}</h4>
            <p>${song.title}</p>
    `;

    // 5) html'e divi gönder
    list.appendChild(div);
  });
}

// oynatma özelliği

// liste alanındaki tıklanmaları izle
list.addEventListener('click', function (e) {
  // eğer tıklanan eleman oynat butonuysa müziği çal
  if (e.target.id === 'play-btn') {
    // oynatılack kardını al
    const card = e.target.closest('.card');

    // müziği çal
    renderMusic(card.dataset);
  }
});

var playingInfo = document.querySelector('.playing');

function renderMusic(song) {
  playingInfo.innerHTML = `
      <div class="info">
        <img src="${song.photo}" />

        <div>
          <p>Şuan oynatılıyor</p>
          <h3>${song.title}</h3>
        </div>
      </div>

      <audio controls autoplay src="${song.url}"></audio>
    `;
}
