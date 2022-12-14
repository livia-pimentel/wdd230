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
    first.id = `${fruitOption.name}`
    first.name = `${fruitOption.name}`
    first.value = `${fruitOption.name}`
    first.innerHTML = `${fruitOption.name}`
    firstCarb = `${fruitOption.nutritions.carbohydrates}`
    console.log(`${fruitOption.name}${firstCarb}`)
    first_fruit.appendChild(first)
   

    let second = document.createElement('option')
    second.id = `${fruitOption.name}`
    second.name = `${fruitOption.name}`
    second.value = `${fruitOption.name}`

    secondCarb = `${Number(fruitOption.nutritions.carbohydrates)}`

    second.innerHTML = `${fruitOption.name}`
    second_fruit.appendChild(second)

    let third = document.createElement('option')
    third.id = `${fruitOption.name}`
    third.name = `${fruitOption.name}`
    third.value = `${fruitOption.name}`

    thirdCarb = `${Number(fruitOption.nutritions.carbohydrates)}`

    third.innerHTML = `${fruitOption.name}`
    third_fruit.appendChild(third) 
    
    // totalC = thirdCarb + secondCarb + firstCarb

}

//Return MSG
const feedback = document.querySelector('#msg');

//Date
const date = new Date();
const day = String(date.getDate()).padStart(2, '0') // 1 -> 01
const month = String(date.getMonth() +1).padStart(2, '0') // jan = 0, 3 -> 03
const year = date.getFullYear() // 2022
const today = `${month}/${day}/${year}`



const formElement = document.forms[0];

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    feedback.innerHTML = 
    `Order Summary<br>
    Name: ${formElement.fname.value} <br>
    Email: ${formElement.email.value} <br>
    Phone: ${formElement.phone.value} <br>
    First Fruit: ${formElement.first_fruit.value} <br>
    Second Fruit: ${formElement.second_fruit.value} <br>
    Third Fruit: ${formElement.third_fruit.value} <br>
    Special instructions: ${formElement.bdescription.value} <br>
    Order Data: ${today} <br>
    Car: ${formElement.first_fruit[secondCarb]}`;

    feedback.style.display = 'block';
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
