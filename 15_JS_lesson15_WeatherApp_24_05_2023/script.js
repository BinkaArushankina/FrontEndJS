//constanta bolschimi bukwami tak mi pokasiwaem, schto oni nikogda ne ismenitsa
const API_KEY = '7d6beee040e9c514f0f6d243fad97f5b'; //unikalnij moj klutsch, API rabota s serwerom
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; //adres serwera

const locationInput = document.getElementById('locationInput'); 
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherContainer = document.getElementById('weatherContainer');

getWeatherButton.addEventListener('keydown', (e) => { //enter
    console.log(e);
    if (e.code === 'Enter') {
        console.log('Iam press enter ');
    }
})

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value.trim();//gorod kotorij tschelowek wwedet

    if (location) {  //esli stroka ne pusta, estj gorod 
        const apiUrl = `${API_BASE_URL}?q=${location}&appid=${API_KEY}`; //adres polutschili
        fetch(apiUrl) //delaem sapros po adresu
            .then(res => res.json())
            .then((data) => { //wsja informazia atributa pogoda eto data, a esli hotim tolko gradusi to eta infa leschala w maine
                console.log(data); //temperatura w kelwinach
                displayWeather(data); //sapuskaem etu funkziu
            })
            .catch(error => {
                console.log(error); //w console
                weatherContainer.innerHTML = 'Failed to fetch weather data'; //w container oschibku propischet
            });
    }
})


function displayWeather(weatherData) {

    console.log(weatherData); //30-40 destrukturisazia
    const {name, sys: {country}, main, main: {humidity}, weather, wind: {speed}, visibility } = weatherData;//destrukturisazia, wse eti peremennie is consoli w chrome
    //const country = sys.country; //strana , 
    const temperatureC = Math.round(main.temp - 273.15); //temp pereweli is kelwina w celsii    round okruglenie
    const temperatureMaxC = Math.floor(main.temp_max - 273.15); //polutschili max temp w cels    floor otbrasiwaet wse schto posle sapjatoj
    const temperatureMinC = (main.temp_min - 273.15).toFixed(1); //polutschili min temp w celsius   toFixed , skolko zifr posle sapjatoj ostawit
    const weatherMain = weather[0].main;//weather perwij elm w maine
    const weatherDescription = weather[0].description; //sdes wibiraem opisanie pogodi
    //const humidity = main.humidity; //wsjali wlaschnostj na 31 str
    //const windSpeed = wind.speed; //wsjali skorostj winda, na 31 str
    const visibilityDistance = visibility / 1000; //widimostj

    const weatherCard = document.createElement('div');

    weatherCard.classList.add('weather-card');//dobawlaem klass dlja buduschej stilisazii

    weatherContainer.innerHTML = ''; //stschischaem prediduschee sntascenie
    
    weatherCard.innerHTML =  //pomeschaem content wnutr sosdannoj kartotschki
        `<h2>${name}, ${country}</h2>
        <p>Temperature: ${temperatureC}</p>
        <p>Max temperature: ${temperatureMaxC}</p>
        <p>Min temperature: ${temperatureMinC}</p>
        <p>Weather: ${weatherMain}</p>
        <p>Description: ${weatherDescription}</p>
        <p>Humidity: ${humidity}</p>
        <p>Wind Speed: ${speed}</p>
        <p>Visibility: ${visibilityDistance} km</p>
    `;

    weatherContainer.append(weatherCard);
}