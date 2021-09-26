let today = document.getElementById("today");
let date = document.getElementById("date");
let submitInput = document.getElementById("submit");
let locationInput = document.querySelector(".locations");
let regions = document.querySelector(".region");
let TemperatureElement = document.querySelector(".temperature");
let minimalGraetTemperatureElement = document.querySelector(".minimal-graet-temperature");
let descriptionWeatherElement = document.querySelector(".description-weaher");
let windSpeedElement = document.querySelector(".wind-speed");
let humidityElement = document.querySelector(".humidity")



window.addEventListener("load", function() {
    const daysNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let now = new Date();
    let theDay = now.getDay();
    let theMonth = now.getMonth();
    let dateOfMonth = now.getDate();
    let day = daysNames[theDay];
    let month = monthNames[theMonth];
    today.innerHTML = day;
    date.innerHTML = `${month}/${dateOfMonth}`;
})
let weatherDetails;
async function getWeather(city = 'cairo') {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1776a51c32010c5cae42262e726362ce`);
    weatherDetails = await response.json();
    disPlay()	
}
getWeather();
function disPlay() {
    let country = weatherDetails.name;
    let Temperature = weatherDetails.main.temp;
    let graetTemperature = weatherDetails.main.temp_max;
    let minimalTemperature = weatherDetails.main.temp_min;
    let descriptionWeather = weatherDetails.weather[0].description;
    let windSpeed = weatherDetails.wind.speed;
    let humidity = weatherDetails.main.humidity;

    regions.innerHTML = `<i class="fas fa-map-marker-alt"></i>${country}`;
    TemperatureElement.innerHTML = `${Math.floor(Temperature)}*C`;
    minimalGraetTemperatureElement.innerHTML = `${Math.ceil(graetTemperature)}*C/${Math.floor(minimalTemperature)}*C`;    
    descriptionWeatherElement.innerHTML = descriptionWeather;
    windSpeedElement.innerHTML = `Wind Speed: ${windSpeed}`;
    humidityElement.innerHTML = `Humidity: ${humidity}`
}
submitInput.addEventListener("click", function() {
    let location = locationInput.value;
    getWeather(location)
})
locationInput.addEventListener("keyup", function() {
    let location = locationInput.value;
    getWeather(location)
})
