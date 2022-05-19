//Date script
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside");
const now = new Date()
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}<em>`;

//Hamburger Menu
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

//Last Modifition
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;


//Banner colocar dia 1 ou 2

let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) { //teste
    banner.style.display = "block";
} 

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
})