const api = {
  key: '15dd264653ae19e803a868ed7fb3c895',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const searchBoxEl = document.querySelector('.search-box');
searchBoxEl.addEventListener('keypress', setQuery);

function setQuery(e) {
  if(e.keyCode === 13) { // e.keyCode === 13 : Enter 뜻함, Enter 눌러질때 발생 
    getResults(searchBoxEl.value);
    console.log(searchBoxEl.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(response => response.json())
    .then(data => displayResults(data));
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name} + ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp).toFixed(0)}<span>°C</span>`;

  let weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;

  let hiLow = document.querySelector('.hi-low');
  hiLow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

function dateBuilder(d) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}