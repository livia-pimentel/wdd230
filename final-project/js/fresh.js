const request = "./js/fruits.json";
const first_fruit = document.querySelector('#first_fruit');
const second_fruit = document.querySelector('#second_fruit');
const third_fruit = document.querySelector('#third_fruit');
let list = ''

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject)
    const fruitslist = jsonObject['fruits']
    jsonObject.forEach(displayOptions)

  });


function displayOptions(fruitOption){

    let first = document.createElement('option')
    first.id = fruitOption.id
    first.name = fruitOption.name
    first.innerHTML = fruitOption.name

    let carb1 = document.createElement('input');
    carb1.type = "hidden"
    carb1.id = fruitOption.id
    carb1.innerHTML = Number(fruitOption.nutritions.carbohydrates)

    first_fruit.appendChild(first)
    first_fruit.appendChild(carb1)
   

    let second = document.createElement('option')
    second.id = fruitOption.id
    second.name = fruitOption.name
    second.value = fruitOption.id

    let carb2 = document.createElement('input');
    carb2.type = "hidden"
    carb2.value = Number(fruitOption.nutritions.carbohydrates)
    carb2.id = fruitOption.id
    carb2.innerHTML = fruitOption.nutritions.carbohydrates
    second.innerHTML = fruitOption.name
    second_fruit.appendChild(second)
    second_fruit.appendChild(carb2)

    let third = document.createElement('option')
    third.id = fruitOption.id
    third.name = fruitOption.name
    third.value = fruitOption.id

    let carb3 = document.createElement('input');
    carb3.type = "hidden"
    carb3.value = fruitOption.nutritions.carbohydrates
    carb3.id = fruitOption.id
    carb3.innerHTML = Number(fruitOption.nutritions.carbohydrates)

    third.innerHTML = fruitOption.name
    third_fruit.appendChild(third) 
    third_fruit.appendChild(carb3)
}

//Return MSG
const feedbackElement = document.querySelector('#feedback');

//Date
const date = new Date();
const day = String(date.getDate()).padStart(2, '0') // 1 -> 01
const month = String(date.getMonth() +1).padStart(2, '0') // jan = 0, 3 -> 03
const year = date.getFullYear() // 2022
const today = `${month}/${day}/${year}`

const formElement = document.forms[0];

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    feedbackElement.innerHTML = 
    `Order Summary<br>
    Name: ${formElement.fname.value} <br>
    Email: ${formElement.email.value} <br>
    Phone: ${formElement.phone.value} <br>
    First Fruit: ${formElement.first_fruit.value} <br>
    Second Fruit: ${formElement.second_fruit.value} <br>
    Third Fruit: ${formElement.third_fruit.value} <br>
    Special instructions: ${formElement.bdescription.value} <br>
    Order Data: ${today} <br>`;

    feedbackElement.style.display = 'block';
})


// Others
function toggleMenu() {
  document.getElementById("bar_nav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

// Last Modification
document.querySelector(
  "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
