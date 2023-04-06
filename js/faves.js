let favoritesContainer = document.querySelector(".faves__container");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let resetBtn = document.querySelector(".faves__reset");
let noneMsg = document.querySelector(".faves__none-msg");

if (favorites.length === 0) {
    noneMsg.textContent = "No favorites saved";
} else {
    noneMsg.textContent = "";
    for (let i = 0; i < favorites.length; i++) {
        let favorite = favorites[i];
        let favoriteCard = document.createElement("div");
        favoriteCard.classList.add("favorite-card");
        let favoriteName = document.createElement("h3");
        favoriteName.textContent = favorite.name;
        favoriteCard.appendChild(favoriteName);
        let favoriteImg = document.createElement("img");
        favoriteImg.setAttribute("src", favorite.imgSrc);
        favoriteCard.appendChild(favoriteImg);
        let favoriteType = document.createElement("p");
        favoriteType.textContent = `Type: ${favorite.type}`;
        favoriteCard.appendChild(favoriteType);
        let favoriteGender = document.createElement("p");
        favoriteGender.textContent = `Gender: ${favorite.gender}`;
        favoriteCard.appendChild(favoriteGender);
        let favoriteBreed = document.createElement("p");
        favoriteBreed.textContent = `Breed: ${favorite.breed}`;
        favoriteCard.appendChild(favoriteBreed);
        let favoriteAge = document.createElement("p");
        favoriteAge.textContent = `Age: ${favorite.formattedAge}`;
        favoriteCard.appendChild(favoriteAge);
        let favoriteKidFriendly = document.createElement("p");
        favoriteKidFriendly.textContent = `Kid Friendly: ${favorite.kidFriendly}`;
        favoriteCard.appendChild(favoriteKidFriendly);
        let favoritePetFriendly = document.createElement("p");
        favoritePetFriendly.textContent = `Pet Friendly: ${favorite.petFriendly}`;
        favoriteCard.appendChild(favoritePetFriendly);
        favoritesContainer.appendChild(favoriteCard);
    }
}

resetBtn.addEventListener("click", function () {
    localStorage.removeItem("favorites");
    favoritesContainer.innerHTML = "";
    noneMsg.textContent = "No favorites saved";
    resetBtn.style.display = "none";
});
