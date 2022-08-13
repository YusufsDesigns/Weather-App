// Weather object
class Weather {
    constructor(city){
        this.city = city;
        this.secretKey = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '508af0ffaemsh56f037494935f2ep1d647djsn51aeb521beb8',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
    } 

    async getWeather(){
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${this.city}`, this.secretKey);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city){
        this.city = city;
    }
}