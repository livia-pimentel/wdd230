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



// //Weather
// const place = document.querySelector('#place');
// const degree = document.querySelector('#degree');
// const img = document.querySelector('#weather-img');
// const wind = document.querySelector('#wind');
// const weather = document.querySelector('.weather');

