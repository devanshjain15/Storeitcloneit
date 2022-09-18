const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');
const problemDiver = document.querySelector('.class');
const div = document.querySelector('.nav-links');
const rightsYear = document.querySelector('.year'); 


hamburger.addEventListener('click', ()=>{ 
    // console.log("Happy!");
    problemDiver.classList.toggle('class-mg');
    div.classList.toggle('no-vis');
    div.classList.toggle('vis');
    navbar.classList.toggle('height');
    navbar.classList.toggle('show-links');
})

const date = new Date();
const year = date.getFullYear();
rightsYear.textContent = year;