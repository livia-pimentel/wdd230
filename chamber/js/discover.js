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

function currentDate(){
  const time = new Date()
  let day = String(time.getDate()).padStart(2, '0');
  let month = String(time.getMonth() + 1).padStart(2, '0');
  let year = time.getFullYear();
  now = month + '/' + day + '/' + year;
  return now;
}

let date = currentDate();
if(window.localStorage.getItem('lastDay') == undefined){
  localStorage.setItem('lastDay', date)
}

function calculateDays(today, last){
  let date1 = new Date(today);
  let date2 = new Date(last);
  const difference_time = Math.abs(date1 - date2);
  const difference_days = Math.ceil(difference_time / (1000 * 60 * 60 * 24));
  return difference_days
}

let finalDay = calculateDays(window.localStorage.getItem('lastDay'), date);
// alert(finalDay)
const numberDays = document.querySelector('.number_days')
numberDays.textContent = finalDay

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




