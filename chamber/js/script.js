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