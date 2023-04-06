"use strict"
console.log('About Us js working!');

// hidden biography
let bio = document.getElementById('first-bio');
let secondBio = document.getElementById('second-bio');
let thirdBio = document.getElementById('third-bio');

function appearBio() {
    let x = document.getElementById('first-bio');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}

function appearBioTim() {
    console.log('tim');
    let secondBio = document.getElementById('second-bio');
    console.log(secondBio.style)
    if (secondBio.style.visibility === 'hidden') {
        console.log('The bio!');
        secondBio.style.visibility = 'visible';
    } else {
        secondBio.style.visibility = 'hidden';
    }
}



const imagesT = document.getElementById('tricia');
console.log("🚀 ~ file: about-us.js:21 ~ images:", imagesT);

const imagesTim = document.getElementById('tim');
console.log('🚀 ~ file: about-us.js:38 ~ imagesTim:', imagesTim);


// const imagesBryan = document.getElementById('bryan');

imagesT.addEventListener('click', appearBio)
imagesTim.addEventListener('click', appearBioTim)
