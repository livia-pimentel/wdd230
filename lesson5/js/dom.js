const list = document.querySelector('ul');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    
    let myFavchap = input.value;
    input.value = '';

    const listFavchap = document.createElement('li');
    const listText = document.createElement('span');
    let listBtn = document.createElement('button');

    listFavchap.appendChild(listText);
    listText.textContent = myFavchap;
    listFavchap.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listFavchap);

    listBtn.onclick = function() {
        list.removeChild(listFavchap)
    }

    input.focus()
})

