// Storage object
class Storage{
    constructor(){
        this.city;
        this.defaultCity = "Abuja";
    }

    getCityFromLocalStorage(){
        if(localStorage.getItem("city") === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem("city");
        }
        return this.city;
    }

    setCityInLocalStorage(city){
        localStorage.setItem("city", city);
    }
}