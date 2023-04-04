'use strict'
console.log('dawgs baby!')



let petArray = [];


function Pet(petName, imgSrc, type, breed, age, gender, kidFriendly, petFriendly){
    console.log("🚀 ~ file: app.js:10 ~ Pet ~ Pet:", Pet)
    this.petName = petName
    this.type = type
    this.breed = breed
    this.age = age
    this.gender = gender
    this.kidFriendly = kidFriendly
    this.petFriendly = petFriendly
    this.imgSrc = imgSrc
    petArray.push(this);

}

let newPet = Pet()