//Weather API
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=5911d56dc3aa7e23af0b603bf6fcc428&units=imperial'

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data)
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const today = new Date().getDay();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function checkDay(day){
    if (day + today > 6){
        return day + today - 7
    } else{
        return day + today 
    }
}

function displayWeather(weatherData){
    for(i = 0; i < 3; i++){

        document.getElementById('day' + (i+1)).innerHTML = `${weekday[checkDay(i)]}` 
        
        document.getElementById("day" + (i+1) + 'Temp').innerHTML = `${Number(weatherData.list[i].main.temp).toFixed(1)} °F`;

        document.getElementById("img" + (i+1)).src="http://openweathermap.org/img/wn/" + weatherData.list[i].weather[0].icon + '.png';

        document.getElementById("day" + (i+1) + 'Hum').innerHTML = `Humidity: ${Number(weatherData.list[i].main.humidity).toFixed(0)}%`;

        document.getElementById("day" + (i+1) + 'Desc').innerHTML = `${weatherData.list[i].weather[0].description}`;
    }
}

apiFetch(url)

// Menu Hamburger

function toggleMenu(){
    document.getElementById('bar_nav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open')
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

// Last Modification
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`

//IntersectionObserver for Images
const imagesToload = document.querySelectorAll('img[data-src]')

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};

if("IntersectionObserver" in window){
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) =>{
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
              }
        });
    }, imgOptions);

    imagesToload.forEach((img) => {
        observer.observe(img);
    });
} else{
    imagesToload.forEach((img) => {
        loadImages(img)
    })
}

//Fruits List
const request_home = "./js/fruits.json";
const fruits = document.querySelector('#fruits_opt');
const btn = document.querySelector('#btnSend');
listIds = [];
storageDrink(listIds.length)

fetch(request_home)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.log(jsonObject)
        jsonObject.forEach(displayFruits);
    })

    function displayFruits(fruit){

        let options = document.createElement('input');
        options.type = 'checkbox';
        options.name = fruit.name
        options.value = fruit.name
        options.id = fruit.id

        options.addEventListener ('click', function(){
            if(options.checked == false){
                listIds.splice(listIds.indexOf(options.id),1);
            }else if(options.checked == true){
                listIds.push(options.id);
            }

            storageDrink(listIds.length);
            
        })

   
        let label = document.createElement('label')
        label.id = fruit.id
        label.name = fruit.name
        label.appendChild(document.createTextNode(fruit.name));

        let br = document.createElement('br')

        fruits.appendChild(options)
        fruits.appendChild(label)
        fruits.appendChild(br)
    }


//Storage
function storageDrink(list){
    const drinks = document.querySelector('.drinks');

    let totalDrinks = Number(window.localStorage.getItem('drinks-ls'));

    if (totalDrinks == 0){
        localStorage.setItem('drinks-ls', totalDrinks);
    }

    if (list > 0){
        drinks.textContent = list;
        localStorage.setItem('drinks-ls', list);
    } else{
        localStorage.setItem('drinks-ls', 0);
        drinks.textContent = `You haven't chosen any drinks yet!`
    }
    totalDrinks++; 
}



