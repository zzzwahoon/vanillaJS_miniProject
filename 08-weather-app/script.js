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
}