// Taking values HTML tags
const temperature = document.querySelector('#degrees').innerText;
const wind_speed_kh = document.querySelector('#speed').innerText;
let tempCelsius = Number(temperature);
let wind = Number(wind_speed_kh);

// Convert Temperature value Celsius to Fahrenheit
let tempFahrenheit =  1.8 * temperature + 32;

//Convert k/h to mph
let wind_speed_mph = 0.621371 * wind;

//Wind Chill Calculation
const wind_chill = document.querySelector('#wind')

if (tempFahrenheit <= 50 && wind_speed_mph >= 3){
    let wc = 35.74 + 0.6215 * tempFahrenheit - 35.75 * wind_speed_mph ** 0.16 + 0.4275 * tempFahrenheit * wind_speed_mph ** 0.16;
    wc = wc.toFixed(2);
    wind_chill.innerHTML = wc;
} else{
    wind_chill.innerHTML = 'N/A'
}



