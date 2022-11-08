const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    })

function displayProphets(prophet) {
    let card = document.createElement('section');
    let nameProphet = document.createElement('h2');
    let birthProphet = document.createElement('h3');
    let deathProphet = document.createElement('h3');
    let placeBirth = document.createElement('h3')
    let portrait = document.createElement('img');

    nameProphet.textContent = `${prophet.name} ${prophet.lastname}`;
    birthProphet.textContent = `Birthdate: ${prophet.birthdate}`;
    deathProphet.textContent = `Death: ${prophet.death}`;
    placeBirth.textContent = `Birthplace: ${prophet.birthplace}`;

    if(prophet.death === null){
        deathProphet.textContent = 'Current President'
    }


    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(nameProphet);
    card.appendChild(birthProphet);
    card.appendChild(deathProphet);
    card.appendChild(placeBirth);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}
    
    


