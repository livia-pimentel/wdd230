const request = './js/associates.json';
const spotlight = document.querySelector('#spotlight');
let cont = 0
let numbers = []

fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function  (jsonObject) {
        const companies = jsonObject['companies'];
        // let test = companies[Math.floor(Math.random() * companies.length)];
        // console.log(test)
        // let test1 = companies[Math.floor(Math.random() * companies.length)];
        // console.log(test1)
        companies.forEach(displaySpotlight);
        random();
    })


    function random() {
        for (i=0; i < cont; i++){
            document.querySelector('#spotlight' + i).style.display = "none";
        }
        select(cont,3)
    }

    function select(max, quant){
        let aux = 0
        while (numbers.length < quant){
            aux = 0;
            mix = Math.floor(Math.random() * max);
            for (a = 0; a < numbers.length; a++){
                if(numbers[a] == mix){
                    aux = 1
                }
            }
            if (aux == 0){
                numbers.push(mix)
            }
            document.querySelector('#spotlight' + mix).style.display = '';
        }
    }


    function displaySpotlight(company){
        if(company.membership == 'Membership-level: Gold' || company.membership == 'Membership-level: Silver'){
            let div = document.createElement('section');
            // let nameCompany = document.createElement('h2');
            let phraseCompany = document.createElement('p');
            let phoneCompany = document.createElement('p');
            let levelCompany = document.createElement('p');
            let imgCompany = document.createElement('img');
            imgCompany.className = 'imgSpot'
            // nameCompany.textContent = `${company.name}`;
            phraseCompany.textContent = `${company.phrase}`
            phoneCompany.textContent = `${company.phone}`;
            // addressCompany.textContent = `Come visit us ${company.address}`
            levelCompany.textContent = `${company.membership}`;
            
        
            imgCompany.setAttribute('src', company.image);
            imgCompany.setAttribute('alt', `Image of ${company.name}`);
            imgCompany.setAttribute('loading', 'lazy'); 

            div.setAttribute('class', 'spotlight1')
            div.setAttribute('id', 'spotlight' + cont)
            
        
            div.appendChild(imgCompany);
            // div.appendChild(nameCompany)
            div.appendChild(phraseCompany)
            div.appendChild(phoneCompany);
            // div.appendChild(addressCompany);
            div.appendChild(levelCompany);
        
            spotlight.appendChild(div);
            cont += 1
        }
    }   



