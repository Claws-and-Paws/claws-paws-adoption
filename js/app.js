'use strict';
console.log('dawgs baby!');



let petArray = [];
let petProfiles = [
    {
        name: 'Duke',
        imgSrc: '../images/duke-dog.png',
        type: 'Dog',
        gender: 'Male',
        breed: 'Australian Cattle Dog/Blue Heeler & Harrier Mix',
        age: 104, //weeks old
        kidFriendly: 'Prefers home without children',
        petFriendly: 'Good with other dogs, cats',
    }, {
        name: 'Nikki',
        imgSrc: '../images/nikki-dog.png',
        type: 'Dog',
        gender: 'Female',
        breed: 'Rottweiler/German mix',
        age: 156, //weeks old
        kidFriendly: 'Good with children',
        petFriendly: 'Good with other dogs, cats',

    }, {
        name: 'Storm',
        imgSrc: '../images/storm-dog.png',
        type: 'Dog',
        gender: 'Female',
        breed: 'Mountain Cur',
        age: 12, //weeks old
        kidFriendly: 'Good with children',
        petFriendly: 'Good with other dogs, cats, and other animals',

    }, {
        name: 'Mabel',
        imgSrc: '../images/mabel-dog.png',
        type: 'Dog',
        gender: 'Female',
        breed: 'Terrier',
        age: 44, //weeks old
        kidFriendly: 'Good with children',
        petFriendly: 'Good with other dogs, cats',

    }, {
        name: 'Knox',
        imgSrc: '../images/knox-dog.png',
        type: 'Dog',
        gender: 'Male',
        breed: 'Chocolate Labrador Retriever',
        age: 104, //weeks old
        kidFriendly: 'Good with children',
        petFriendly: 'Good with other dogs',

    }, {
        name: 'Bleu',
        imgSrc: '../images/bleu-dog.png',
        type: 'Dog',
        gender: 'Male',
        breed: 'Siberian Husky',
        age: 104, //weeks old
        kidFriendly: 'Good with children',
        petFriendly: 'Good with other dogs',

    }, {
        name: 'Talor',
        imgSrc: '../images/talor-dog.png',
        type: 'Dog',
        gender: 'Male',
        breed: 'French Bulldog',
        age: 312, //weeks old
        kidFriendly: 'No',
        petFriendly: 'Good with other dogs, cats',

    }, {
        name: 'Kingston',
        imgSrc: '../images/kingston-dog.png',
        type: 'Dog',
        gender: 'Male',
        breed: 'Pomeranian mix',
        age: 208, //weeks old
        kidFriendly: 'Yes',
        petFriendly: 'Good with other dogs',

    }, {
        name: 'Amy',
        imgSrc: '../images/amy-dog.png',
        type: 'Dog',
        gender: 'Female',
        breed: 'Goldendoodle & Irish Setter Mix',
        age: 20, // weeks old
        kidFriendly: 'Yes',
        petFriendly: 'Good with other dogs',

    }, {
        name: 'Gizmo',
        imgSrc: '../images/gizmo-dog.png',
        type: 'Dog',
        gender: 'Male',
        breed: 'Jack Russell Terrier Mix',
        age: 156, //weeks old
        kidFriendly: 'Yes',
        petFriendly: 'Yes',

    }, {
        name: 'Andi',
        imgSrc: '../images/andi-cat.png',
        type: 'Cat',
        gender: 'Female',
        breed: 'Domestic Short Hair',
        age: 416, //weeks old
        kidFriendly: 'Yes',
        petFriendly: 'Yes',

    }, {
        name: 'Cade',
        imgSrc: '../images/cade-cat.png',
        type: 'Cat',
        gender: 'Male',
        breed: 'Domestic Short Hair',
        age: 364, //weeks old
        kidFriendly: 'No',
        petFriendly: 'Good with cats',

    }, {
        name: 'Dixie',
        imgSrc: '../images/dixie-cat.png',
        type: 'Cat',
        gender: 'Female',
        breed: 'Domestic Long Hair',
        age: 468, //weeks old
        kidFriendly: 'Yes',
        petFriendly: 'Yes',

    }, {
        name: 'Mowgli',
        imgSrc: '../images/mowgli-cat.png',
        type: 'Cat',
        gender: 'Male',
        breed: 'Domestic Short Hair',
        age: 156, //weeks old
        kidFriendly: 'No',
        petFriendly: 'No',

    }, {
        name: 'Sienna',
        imgSrc: '../images/sienna-cat.png',
        type: 'Cat',
        gender: 'Female',
        breed: 'Domestic Short Hair',
        age: 78, //weeks old
        kidFriendly: 'Yes',
        petFriendly: 'Yes',

    }, {
        name: 'Trixie',
        imgSrc: '../images/trixie-cat.png',
        type: 'Cat',
        gender: 'Female',
        breed: 'Domestic Long Hair',
        age: 520,
        kidFriendly: 'Yes',
        petFriendly: 'Yes',

    }, {
        name: 'Plano',
        imgSrc: '../images/plano-cat.png',
        type: 'Cat',
        gender: 'Male',
        breed: 'Domestic Short Hair',
        age: 52,
        kidFriendly: 'No',
        petFriendly: 'Yes',

    }, {
        name: 'Pepper Jack',
        imgSrc: '../images/pepperjack-cat.png',
        type: 'Cat',
        gender: 'Female',
        breed: 'Domestic Long Hair',
        age: 28,
        kidFriendly: 'Yes',
        petFriendly: 'Yes',

    }, {
        name: 'Mildred',
        imgSrc: '../images/mildred-cat.png',
        type: 'Cat',
        gender: 'Female',
        breed: 'Domestic Short Hair',
        age: 520,
        kidFriendly: 'Yes',
        petFriendly: 'Yes',

    },
    {
        name: 'Simba',
        imgSrc: '../images/simba-cat.png',
        type: 'Cat',
        gender: 'Male',
        breed: 'Domestic Short Hair',
        age: 52,
        kidFriendly: 'Yes',
        petFriendly: 'Yes',
    }
];



function Pet(name, imgSrc, type, gender, breed, age, kidFriendly, petFriendly) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.type = type;
    this.gender = gender;
    this.breed = breed;
    this.age = age;
    this.kidFriendly = kidFriendly;
    this.petFriendly = petFriendly;


    if (this.age < 52) {
        this.formattedAge = `${Math.round(this.age / 4)} months old`;
    } else {
        this.formattedAge = `${Math.round(this.age / 52)} years old`;
    }


    petArray.push(this);

    this.renderPetCard = function () {
        let ourPets = document.querySelector(".our-pets__container");

        let petCard = document.createElement("div");
        petCard.classList.add("our-pets__card");

        let petName = document.createElement("h3");
        petName.textContent = this.name;
        petCard.appendChild(petName);

        let petImg = document.createElement("img");
        petImg.setAttribute("src", this.imgSrc);
        petCard.appendChild(petImg);

        let petType = document.createElement("p");
        petType.textContent = `Type: ${this.type}`;
        petCard.appendChild(petType);

        let petGender = document.createElement("p");
        petGender.textContent = `Gender: ${this.gender}`;
        petCard.appendChild(petGender);

        let petBreed = document.createElement("p");
        petBreed.textContent = `Breed: ${this.breed}`;
        petCard.appendChild(petBreed);

        let petAge = document.createElement("p");
        petAge.textContent = `Age: ${this.formattedAge}`;
        petCard.appendChild(petAge);

        let petKidFriendly = document.createElement("p");
        petKidFriendly.textContent = `Kid Friendly: ${this.kidFriendly}`;
        petCard.appendChild(petKidFriendly);

        let petPetFriendly = document.createElement("p");
        petPetFriendly.textContent = `Pet Friendly: ${this.petFriendly}`;
        petCard.appendChild(petPetFriendly);

        ourPets.appendChild(petCard);
    };
}



function newPetObjects() {
    for (let i = 0; i < petProfiles.length; i++) {
        let pet = petProfiles[i];
        new Pet(
            pet.name,
            pet.imgSrc,
            pet.type,
            pet.gender,
            pet.breed,
            pet.age,
            pet.kidFriendly,
            pet.petFriendly
        );
    }

}


function renderPetProfiles() {
    newPetObjects();
    for (let i = 0; i < petArray.length; i++) {
        petArray[i].renderPetCard();
    }
}



function handleNewSubmit(event) {
    event.preventDefault();
    console.log('Works');
    event.stopPropagation();

    let type = event.target.type.value;

    let gender = event.target.gender.value;

    let breed = event.target.breed.value;

    

    
};




function renderResults() {
    console.log("🚀 ~ file: app.js:321 ~ renderResults ~ renderResults:", renderResults);
    let section = document.getElementById('results__container');
    for(let i = 0; i < Pet.petArray.length; i++); {
        let p = document.createElement('p');
        p.textContent = `${this.name} ${this.imgSrc} ${this.type} ${this.gender} ${this.breed} ${this.formattedAge} ${this.kidFriendly} ${this.petFriendly}`; 
    }

}



let savePetInfo = localStorage.getItem('saveProduct');
console.log('local storage', savePetInfo);

if (savePetInfo) {
    let arrayOfNotPets = JSON.parse(savePetInfo);
    for (let j = 0; j < arrayOfNotPets, length; j++) {
        new newPetObjects(
            this.name = arrayOfNotPets[j].name,
            this.type = arrayOfNotPets[j].type,
            this.gender = arrayOfNotPets[j].gender,
            this.breed = arrayOfNotPets[j].breed,
            this.kidFriendly = arrayOfNotPets[j].kidFriendly,
            this.petFriendly = arrayOfNotPets[j].petFriendly
        );
    }
} else {




}












renderPetProfiles();
