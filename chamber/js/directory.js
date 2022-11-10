const request = "/chamber/js/data.json";
const businesses = document.querySelector('.companies');
const businessesList = document.querySelector('.listcompanies')

fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        const companies = data['companies'];
        companies.forEach(displayCompanies);
    })

function displayCompanies(company){
    let sectioncia = document.createElement('section');
    let sectionlist = document.createElement('section');
    let nameCompany = document.createElement('h2');
    nameCompany.className = 'nameCia'
    let addressCompany = document.createElement('p');
    let addressCompanyL = document.createElement('p');
    let phoneCompany = document.createElement('p');
    let phoneCompanyL = document.createElement('p');
    let levelCompany = document.createElement('p');
    let siteCompany = document.createElement('a');
    let siteCompanyL = document.createElement('a');
    let imgCompany = document.createElement('img');
    imgCompany.className = 'imgDirec'

    nameCompany.textContent = `${company.name}`;
    addressCompany.textContent = `${company.address}`;
    addressCompanyL.textContent = `${company.address}`;
    phoneCompany.textContent = `${company.phone}`;
    phoneCompanyL.textContent = `${company.phone}`;
    levelCompany.textContent = `${company.membership}`;
    siteCompany.textContent = `${company.website}`;
    siteCompanyL.textContent = `${company.website}`;


    imgCompany.setAttribute('src', company.image);
    imgCompany.setAttribute('alt', `Image of ${company.name}`);
    imgCompany.setAttribute('loading', 'lazy');

    siteCompany.setAttribute('href', company.website);
    siteCompany.setAttribute('target', 'blank')

    siteCompanyL.setAttribute('href', company.website);
    siteCompanyL.setAttribute('target', 'blank')


    sectioncia.appendChild(imgCompany);
    sectioncia.appendChild(addressCompany);
    sectioncia.appendChild(phoneCompany);
    sectioncia.appendChild(levelCompany);
    sectioncia.appendChild(siteCompany);

    sectionlist.appendChild(nameCompany);
    sectionlist.appendChild(addressCompanyL);
    sectionlist.appendChild(phoneCompanyL);
    sectionlist.appendChild(siteCompanyL);
    

    businesses.appendChild(sectioncia);
    businessesList.appendChild(sectionlist);
}   

function view(option){
    if (option == 'large'){
        document.querySelector(".companies").style.display=""; 
        document.querySelector(".listcompanies").style.display="none"; 
        
  }else if (option == "small"){
    document.querySelector(".listcompanies").style.display="";
    document.querySelector(".companies").style.display="none";
  }
}

