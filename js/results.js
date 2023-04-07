'use strict'
console.log('results js working!');






let savedPetInfo = localStorage.getItem('petRequest');

if(savedPetInfo){
    // console.log('local storage', JSON.parse(savedPetInfo));
let petReqObjFromLS = JSON.parse(savedPetInfo);

for(let i = 0; i < petProfiles.length; i++){
    // console.log(petProfiles[i]);
    //lets get the age
    let petMonths = petProfiles[i].age / 4;
    // console.log("🚀 ~ file: results.js:19 ~ petMonths:", petMonths)

    for(let j = 0; j < petReqObjFromLS.length; j++) {
        // console.log(petReqObjFromLS[j]);
        let petReqFLS = petReqObjFromLS[j].age;
        // console.log("🚀 ~ file: results.js:24 ~ petReqFLS:", petReqFLS)



        if(petReqFLS < 12 && petMonths < 12){
            console.log('8wks to 1 year');
            console.log(petMonths, 'is what we have for ', petProfiles[i]);
            let pet = petProfiles[i];
            let newCard = new Pet(pet.name,pet.imgSrc, pet.type, pet.gender, pet.breed,pet.age,pet.kidFriendly, pet.petFriendly);
            newCard.renderPetReqCard();
          } else if(petReqFLS > 12 && petReqFLS <= 36 && petMonths > 12 && petMonths <= 36){
            console.log('1 year to 3 years');
            console.log(petMonths, 'is what we have for ', petProfiles[i]);
          let pet = petProfiles[i];
          let newCard = new Pet(pet.name, pet.imgSrc, pet.type, pet.gender, pet.breed, pet.age, pet.kidFriendly, pet.petFriendly);
          newCard.renderPetReqCard();
          }else if(petReqFLS >36 && petReqFLS <= 60 && petMonths > 36 && petMonths <= 60) {
            console.log('3 years to 5 years');
            console.log(petMonths, 'is what we have for ', petProfiles[i]);
          let pet = petProfiles[i];
          let newCard = new Pet(pet.name, pet.imgSrc, pet.type, pet.gender, pet.breed, pet.age, pet.kidFriendly, pet.petFriendly);
          newCard.renderPetReqCard();
          } else if(petReqFLS > 60 && petMonths > 60){
            console.log(petMonths, 'is what we have for ', petProfiles[i]);
          let pet = petProfiles[i];
          let newCard = new Pet(pet.name, pet.imgSrc, pet.type, pet.gender, pet.breed, pet.age, pet.kidFriendly, pet.petFriendly);
          newCard.renderPetReqCard();
          }
    }
}
}
