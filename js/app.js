'use strict'



let petArray = [];


function Pet(petName, imgSrc, type, breed, age, gender, kidFriendly, petFriendly){
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

