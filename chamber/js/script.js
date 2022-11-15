//Date Script
const datefield = document.querySelector('.date');
const now = new Date();
const fulldate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(now);
datefield.innerHTML = `${fulldate}`

//Menu Hamburger
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open')
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

// Last Modification
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`

//Banner 

let bannerDay = new Date().getDay();

const banner = document.querySelector('#banner');
if (bannerDay === 1 || bannerDay === 2){
    banner.style.display = 'block';
} else{
    banner.style.display = 'none';
}

const close = document.querySelector('#close');

close.addEventListener('click', () => {
    banner.style.display = 'none';
})

// OR

// let bannerDay = new Date().getDay();
// let msgBanner = "🤝🏼 Come join us for the United Traders of Camaçari meet and greet <strong>Wednesday at 7:00 p.m. </strong>"


// const banner = document.querySelector('#banner');
// if (bannerDay === 1 || bannerDay === 0){
//     const appearBanner = document.createElement("p");
//     let Btn = document.createElement("button");

//     banner.appendChild(appearBanner);
//     appearBanner.innerHTML = msgBanner;
//     banner.appendChild(Btn);
//     Btn.innerHTML = "x"

//     Btn.onclick = function(){
//         banner.removeChild(appearBanner)
//         banner.removeChild(Btn)
//     }
// }

//Weather API
//Select HTML elements in the document
const currentTemp = document.querySelector('#degrees');
const weatherIcon = document.querySelector('#weather-img');
const capitionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Camaçari&appid=5911d56dc3aa7e23af0b603bf6fcc428&units=metric'

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    capitionDesc.textContent = desc
}

apiFetch(url)
