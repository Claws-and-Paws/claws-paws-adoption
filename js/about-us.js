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
    let secondBio = document.getElementById('second-bio');
    if (secondBio.style.visibility === 'hidden') {
        secondBio.style.visibility = 'visible';
    } else {
        secondBio.style.visibility = 'hidden';
    }
}

function appearBioB() {
    let thirdBio = document.getElementById('third-bio');
    if (thirdBio.style.visibility === 'hidden') {
        thirdBio.style.visibility = 'visible';
    } else {
        thirdBio.style.visibility = 'hidden';
    }
}


const imagesT = document.getElementById('tricia');

const imagesTim = document.getElementById('tim');

const imagesB = document.getElementById('bryan');

imagesT.addEventListener('click', appearBio)
imagesTim.addEventListener('click', appearBioTim)
imagesB.addEventListener('click', appearBioB)
