'use strict'
console.log('dawgs baby!');



let petArray = [];


function Pet(name, imgSrc, type, gender, breed, age, kidFriendly, petFriendly) {
    console.log("🚀 ~ file: app.js:10 ~ Pet ~ Pet:", Pet)
    this.name = name;
    this.imgSrc = imgSrc;
    this.type = type;
    this.gender = gender;
    this.breed = breed;
    this.age = age;
    this.kidFriendly = kidFriendly;
    this.petFriendly = petFriendly;

    petArray.push(this);

}



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
        name: 'Simba',
        imgSrc: '../images/simba-cat.png',
        type: 'Cat',
        gender: 'Male',
        breed: 'Domestic Short Hair',
        age: 52,
        kidFriendly: 'Yes',
        petFriendly: 'No',

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
        imgSrc: '../images/pepper-jack-cat.png',
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
]
console.log("🚀 ~ file: app.js:227 ~ petProfiles:", petProfiles);


function newPetObjects() {
    for(let i = 0; i< petProfiles.length; i++) {

    petArray.push(new Pet(petProfiles[i].name, petProfiles[i].imgSrc, petProfiles[i].type, petProfiles[i].breed, petProfiles[i].gender, petProfiles[i].age));
}
};




console.log("🚀 ~ file: app.js:7 ~ petArray:", petArray)

function renderPetProfiles() {
    console.log("🚀 ~ file: app.js:235 ~ renderPetProfiles ~ renderPetProfiles:", renderPetProfiles);

    for (let i = o; i < petArray.length; i++) {
        petArray[i].render();

        let parentElement = document.getElementById('our-pets');

        let div = document.createElement('div');
        parentElement.appendChild(div);

        let h2 = document.createElement('h2');
        h2.textContent = this.petName;
        div.appendChild(h2);

        let petPara = document.createElement('p');
        petPara.textContent = 'Pet\'s age is' + this.age;
        div.appendChild(petPara);

        let petUl = document.createElement('ul');
        div.appendChild(petUl);

        let breedLi = document.createElement('li');
        breedLi.textContent = this.breed;
        petUl.appendChild(breedLi);

        let typeLi = document.createElement('li');
        typeLi.textContent = this.type;
        petUl.appendChild(typeLi);



    }

}






























// if petProfiles[age] > 8 && < 52 {
//     let months = petProfiles[age]/4
//     console.log('your pet is ${months} old'),
// } else if petProfiles[age] > 52 {
// let years = petProfiles[age]/52,
// console.log('Your pet is ${years} old'),
// }



