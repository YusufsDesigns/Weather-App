// UI Object
class UI{
    constructor(){
        this.temp = document.getElementById('w-temp');
        this.city = document.getElementById('w-city');
        this.icon = document.getElementById('w-icon');
        this.condition = document.getElementById('w-condition');
        this.cloud = document.getElementById('w-cloud');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.gust = document.getElementById('w-gust');
    }

    paint(weather){
        this.temp.innerHTML =`${weather.current.temp_c}&deg;`;
        this.city.innerHTML = weather.location.name;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.condition.innerHTML = weather.current.condition.text;
        this.cloud.innerHTML = `${weather.current.cloud}%`;
        this.humidity.innerHTML = `${weather.current.humidity}%`;
        this.wind.innerHTML = `${weather.current.wind_kph}km/hr`;
        this.gust.innerHTML = `${weather.current.gust_kph}km/hr`;
        // Get date and time from city
        const date = weather.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11);
        document.getElementById("w-time").innerHTML = time;
        document.querySelector(".w-inner-date").innerHTML = ` ${d}, ${m} ${y}`;
    }

    showAlert(msg){
        const alert = document.querySelector('.alert');
        alert.style.display = 'block';
        alert.style.opacity = '1';
        alert.textContent = msg;
        setTimeout(() => {
            alert.style.display = 'none';
            alert.style.opacity = '0';
        }, 3000);
    }
}