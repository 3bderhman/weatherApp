let today = document.getElementById("today");
let date = document.getElementById("date");
let locationInput = document.querySelector(".locations");
let regions = document.querySelector(".region");
let TemperatureElement = document.querySelector(".temperature");
let minimalGraetTemperatureElement = document.querySelector(".minimal-graet-temperature");
let descriptionWeatherElement = document.querySelector(".description-weaher");
let windSpeedElement = document.querySelector(".wind-speed");
let humidityElement = document.querySelector(".humidity")
let tempImageElement = document.getElementById("temp-image");



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
    let tempImage = weatherDetails.weather[0].icon;

    regions.innerHTML = `<i class="fas fa-map-marker-alt"></i>${country}`;
    TemperatureElement.innerHTML = `${Math.floor(Temperature)}*C`;
    minimalGraetTemperatureElement.innerHTML = `${Math.ceil(graetTemperature)}*C/${Math.floor(minimalTemperature)}*C`;    
    descriptionWeatherElement.innerHTML = descriptionWeather;
    windSpeedElement.innerHTML = `Wind Speed: ${windSpeed}`;
    humidityElement.innerHTML = `Humidity: ${humidity}`;
    tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/${tempImage}@2x.png" alt="image">`
}
// function disPlayimage() {
//     let tempImage = weatherDetails.weather[0].icon;
//     let tempId = weatherDetails.weather[0].id;
//     if (tempId>=200 && tempId<=232) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/11d@2x.png" alt="image">`
//     }
//     else if (tempId>=300 && tempId<=321 || tempId>=520 && tempId<=531) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="image">`
//     }
//     else if (tempId>=500 && tempId<=504) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/10d@2x.png" alt="image">`
//     }
//     else if (tempId>=600 && tempId<=622 || tempId==511) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/13d@2x.png" alt="image">`
//     }
//     else if (tempId>=701 && tempId<=781) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/50d@2x.png" alt="image">`
//     }
//     else if (tempId>=800) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/${tempImage}@2x.png" alt="image">`
//     }
//     else if (tempId==800) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/${tempImage}@2x.png" alt="image">`
//     }
//     else if (tempId==801) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/${tempImage}@2x.png" alt="image">`
//     }  
//     else if (tempId==802) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/${tempImage}@2x.png" alt="image">`
//     }   
//     else if (tempId==803) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/${tempImage}@2x.png" alt="image">`
//     }
//     else if (tempId==804) {
//         tempImageElement.innerHTML = `<img id="temp-image" src=" http://openweathermap.org/img/wn/${tempImage}@2x.png" alt="image">`
//     }
    
// }
locationInput.addEventListener("keyup", function() {
    let location = locationInput.value;
    getWeather(location)
})
