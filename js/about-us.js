"use strict"
console.log('About Us js working!');


let bio = document.getElementById('biographies');

function appearBio(event) {
    const bioSection = event.target('.images');
    document.querySelector('images');
    bio.addEventListener('click', showBio);
    showBio();
}

function showBio() {
    bio.removeAttribute('hidden');
}