// Required Variables
const app = document.querySelector('.wrapper');
const btn = document.querySelector('.city-btn');
const icon = document.querySelector('.fa-solid');

// Instantiate Storage object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getCityFromLocalStorage();

// Instantiate Weather object
const weather = new Weather(weatherLocation);

// Instantiate UI object
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location by clicking on Giving city
document.querySelector('.cities').addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        // Get city name
        const cityName = e.target.textContent;
        // Change city location
        weather.changeLocation(cityName);
        // Set city in local storage
        storage.setCityInLocalStorage(cityName);
        // Get and display weather
        getWeather();
    }
});

// Change location
document.getElementById('get-city').addEventListener('submit', (e) => {
    // Get city name
    const city = document.getElementById('city-name').value;
    // Change city location
    weather.changeLocation(city);
    // Set city in local storage
    storage.setCityInLocalStorage(city);
    // Get and display weather
    getWeather();

    e.preventDefault();
});

// Get weather
function getWeather(){
    weather.getWeather()
    .then(data => {
        ui.paint(data);
        // Set default time of day
        let timeOfDay = 'day';

        // Get unique code for each weathe condition
        const code = data.current.condition.code;

        // Change to night if its night time in the city
        if(!data.current.is_day){
            timeOfDay = 'night';
        }

        // For clear weather
        if(code === 1000){
            // Set the background to be night or day depending on the weather condition
            app.style.backgroundImage = `url(./img/${timeOfDay}/clear.jpg)`;
            // Change button background to night or day depending on weather condition
            btn.style.background = '#ababed';
            if(timeOfDay === 'night'){
                btn.style.background = '#4e555f';
                icon.style.color = 'white';
            }
        } 
        // For cloudy weather conditions
        else if(
            code === 1003 ||
            code === 1006 ||
            code === 1009 ||
            code === 1030 ||
            code === 1069 ||
            code === 1087 ||
            code === 1135 ){
            // Set the background to be night or day depending on the weather condition
            app.style.backgroundImage = `url(./img/${timeOfDay}/cloudy.jpg)`;
            // Change button background to night or day depending on weather condition
            btn.style.background = '#f3d8dc';
            if(timeOfDay === 'night'){
                btn.style.background = '#a5a5ec';
                icon.style.color = 'white';
            }
        }
        // For rainy weather conditions
        else if(
            code === 1063 ||
            code === 1072 ||
            code === 1150 ||
            code === 1153 ||
            code === 1168 ||
            code === 1171 ||
            code === 1180 ||
            code === 1183 ||
            code === 1186 ||
            code === 1189 ||
            code === 1192 ||
            code === 1195 ||
            code === 1198 ||
            code === 1201 ||
            code === 1240 ||
            code === 1243 ||
            code === 1246
        ){
            // Set the background to be night or day depending on the weather condition
            app.style.backgroundImage = `url(./img/${timeOfDay}/rainy.jpg)`;
            // Change button background to night or day depending on weather condition
            btn.style.background = '#6d6c6c';
            icon.style.color = 'white';
            if(timeOfDay === 'night'){
                btn.style.background = '#808080';
            }
        }
        // For snowy weather condition
        else if(
            code === 1066 ||
            code === 1114 ||
            code === 1117 ||
            code === 1147 ||
            code === 1210 ||
            code === 1213 ||
            code === 1216 ||
            code === 1219 ||
            code === 1222 ||
            code === 1225 ||
            code === 1255 ||
            code === 1255 
        ){
            // Set the background to be night or day depending on the weather condition
            app.style.backgroundImage = `url(./img/${timeOfDay}/snowy.jpg)`;
            // Change button background to night or day depending on weather condition
            btn.style.background = '#c5c0c0';
            icon.style.color = 'white';
        }
        // For thunderstorms
        else if(
            code === 1087 ||
            code === 1273 ||
            code === 1276 ||
            code === 1279 ||
            code === 1282 
        ) {
            // Set the background to be night or day depending on the weather condition
            app.style.backgroundImage = `url(./img/${timeOfDay}/thunder.jpg)`;
            // Change button background to night or day depending on weather condition
            btn.style.background = '#4e555f';
            icon.style.color = 'white';
        }
        else{
            // Set the background to be night or day depending on the weather condition
            app.style.backgroundImage = `url(./img/${timeOfDay}/cloudy.jpg)`;
            // Change button background to night or day depending on weather condition
            btn.style.background = '#f3d8dc';
            if(timeOfDay === 'night'){
                btn.style.background = '#a5a5ec';
                icon.style.color = 'white';
            }
        }
    })
    .catch(() => {
        ui.showAlert('City not found')
    })
}

