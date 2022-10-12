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

let day = new Date().getDay();

const banner = document.querySelector('#banner');
if (day === 1 || day ===2){
    banner.style.display = 'block';
}

const close = document.querySelector('#close');

close.addEventListener('click', () => {
    banner.style.display = 'none';
})

//Weather
const place = document.querySelector('#place');
const degree = document.querySelector('#degree');
const img = document.querySelector('#weather-img');
const wind = document.querySelector('#wind');
const weather = document.querySelector('.weather');
