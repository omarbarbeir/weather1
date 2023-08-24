let apiKey = "5d8abb8eabc3940ab3a872d5dfec5383";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchInpt = document.getElementById("searchinput");
let searchbtn = document.getElementById("searchbtn")
let icon = document.getElementById("icon")

async function check(city){
    let res = await fetch(apiUrl + city + "&appid=5d8abb8eabc3940ab3a872d5dfec5383");
    let data = await res.json();

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";



if(data.weather[0].main == "Clouds"){
    icon.src= "./clouds.png"
}
if(data.weather[0].main == "Rain"){
    icon.src= "./Rain.png"
}
if(data.weather[0].main == "Clear"){
    icon.src= "./clear.png"
}
if(data.weather[0].main == "Drizzle"){
    icon.src= "./dri.png"
}
if(data.weather[0].main == "Mist"){
    icon.src= "./mist.png"
}


document.querySelector("#weather").style.display = "block"

}
searchbtn.addEventListener("click",()=>{
    check(searchInpt.value)
})