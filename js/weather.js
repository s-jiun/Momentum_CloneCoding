import * as myapi from './secret.js';

const weather = document.querySelector("#weather span:first-child");
const temp = document.querySelector("#weather span:nth-child(2)");
const city = document.querySelector("#weather span:last-child");

function onSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myapi.APIKEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp} ℃`;
    });
}

function onError(){
    alert("We can't find you");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);