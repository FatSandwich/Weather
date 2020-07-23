const api = {
  key: "c204db8646efd8ade5a73f313178d133",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
    return weather.json();
  }).then(displayResults);
}

function displayResults(weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
  console.log(weather.weather[0].main);
  
  let weathernow = document.querySelector('.current .weather');
  weathernow.innerText = weather.weather[0].main;
  
  let fl = document.querySelector('.current .fl');
  fl.innerHTML = `${Math.round(weather.main.feels_like)}<span>°c</span>`;
  
  let icon = document.querySelector('.current .icon');
  icon.src = "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png";
  
  let high = document.querySelector('.high .hi');
  high.innerHTML = `${Math.round(weather.main.temp_max)}<span>°c</span>`;
  
  let low = document.querySelector('.low .lo');
  low.innerHTML = `${Math.round(weather.main.temp_min)}<span>°c</span>`;
  

}

//http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&APPID=c204db8646efd8ade5a73f313178d133
