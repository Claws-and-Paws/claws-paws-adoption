"use strict"
console.log('About Us js working!');

// hidden biography
let bio = document.getElementById('first-bio');
let bioTwo = document.getElementById('second-bio');
let bioThree = document.getElementById('third-bio');

function appearBio() {
    console.log('we made');
    let x = document.getElementById('first-bio');
    console.log(x.style)
    if (x.style.visibility === "hidden") {
        console.log('The bio!');
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}

// function appearBioTwo() {
//     let y = document.getElementById('second-bio');
//     if (y.style.visibility === "hidden") {
//         y.style.visibility = 'visible';
//     } else {
//         y.style.visibility = 'hidden';
//     }
// }



const imagesT = document.getElementById('tricia');
console.log("🚀 ~ file: about-us.js:21 ~ images:", imagesT);


// get Tim's image first and then it should work
// const imagesTim = document.getElementById('tim');


// const imagesBryan = document.getElementById('bryan');

imagesT.addEventListener('click', appearBio)
// imagesTim.addEventListener('click', appearBioTwo)
