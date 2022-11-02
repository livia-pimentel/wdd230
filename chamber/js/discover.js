//Number of Visits - Discover Page
// initialize display element
const visitsDisplay = document.querySelector('.visits');

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem('visits-ls'));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
} else{
    visitsDisplay.textContent = `This is your first visit!`
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem('visits-ls', numVisits);  



//Data Storage
// Com funções elas só serão lidas quando chamadas.
// Storage só recebe String, new Date() é uma objeto e não uma string

// Com essa função vou conseguir formatar o new Date() que é um objeto em String e determinar seu formato
function currentDate(){
  const time = new Date()
  let day = String(time.getDate()).padStart(2, '0');
  let month = String(time.getMonth() + 1).padStart(2, '0');
  let year = time.getFullYear();
  now = month + '/' + day + '/' + year;
  return now;
}

//Uma vez transformando new Date() em String verifico se já exite uma variavel no localStorage, se não tiver irá ser criada uma
let date = currentDate();
if(window.localStorage.getItem('lastDay') == undefined){
  localStorage.setItem('lastDay', date)
}

function calculateDays(today, last){
  let date1 = new Date(today);
  let date2 = new Date(last);
  //Converte para objetos
  const difference_time = Math.abs(date1 - date2);
  //Calcula a diferença
  const difference_days = Math.ceil(difference_time / (1000 * 60 * 60 * 24));
  return difference_days
}

//Faz o cálculo utilizando o localStorage
let finalDay = calculateDays(window.localStorage.getItem('lastDay'), date);
//Imprime no HTML
const numberDays = document.querySelector('.number_days')
numberDays.textContent = finalDay

//Date Script
const datefield = document.querySelector('.date');
const nowField = new Date();
const fulldate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(nowField);
datefield.innerHTML = `${fulldate}`


// Last Modification
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`


//IntersectionObserver for Images
//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

//optional parameters being set for the IntersectionObserver
const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

//first check to see if Intersection Observer is supported 
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);

    //Loop through each img an check status and Load is necessary
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else { //just load ALL images if not supported
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }




