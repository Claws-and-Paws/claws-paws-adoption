`use strict`
console.log('file connected');

// Array contaiing pet profiles (Objects with pet details).
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


// Empty array to store unique breed names.
let breedNames = [];

// Empty array to store breed occurrances.
let breedOccurrences = [];

// Iterate through petProfiles to store breed occurances.
for (let i = 0; i < petProfiles.length; i++){
    let pet = petProfiles[i];

    // Retrieve the breed of the pet
    let breed = pet.breed;

    // Check if breed is already in breedNames array.
    let breedIndex = breedNames.indexOf(breed);

    if (breedIndex === -1){
        // Add the breed to the breedNames array
        breedNames.push(breed);

        // Count for the new breed
        breedOccurrences.push(1);
    } else
    // If breed is already in breedNames, incremement the count for that breed.
    breedOccurrences[breedIndex]++;
}



// Get the canvas element by its id to render the chart
const ctx = document.getElementById('breedChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: breedNames,
        datasets: [{
            label: 'Number of Pets Avaiable by Breed',
            data: breedOccurrences,
            backgroundColor: 'rgba(205, 133, 63, 0.5)',
            borderColor: 'rgb(245, 245, 245)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                ticks: {
                    font: {
                        size: 15 // Adjust the font size of breed names
                    }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(245, 245, 220, 0.5)',
                    font: {
                        size: 50
                    }
                }
            }
        }
    }
});





// Cart representing most common dog breeds in shelters.
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("dogBreedsChart").getContext("2d");

    const dogBreedsData = {
        labels: [
            "Pit Bull Terrier",
            "Labrador Retriever",
            "German Shepherd"
        ],
        datasets: [
            {
                data: [35, 25, 20,],
                backgroundColor: [
                    "#A6ACAF",
                    "#787878",
                    "#6C7B8B",
                    "#778899",
                    "#B2BEB5",
                    "#C0C0C0",
                ],
            },
        ],
    };

    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    font: {
                        size: 13 // Set the desired font size for the legend labels
                    }
                }
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 20,
                top: 0,
                bottom: 0
            }
        }
    };

    const dogBreedsChart = new Chart(ctx, {
        type: "pie",
        data: dogBreedsData,
        options: pieChartOptions,
    });
});

// chart representing most common cat breeds in dog shelters
const catCtx = document.getElementById("catBreedsChart").getContext("2d");

const catBreedsData = {
    labels: [
        "Domestic Shorthair",
        "Domestic Mediumhair",
        "Domestic Longhair",
    ],
    datasets: [
        {
            data: [60, 25, 15],
            backgroundColor: [
                "#A6ACAF",
                "#787878",
                "#6C7B8B",
            ],
        },
    ],
};

const catPieChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                font: {
                    size: 13 // Set the desired font size for the legend labels
                }
            }
        }
    },
    layout: {
        padding: {
            left: 0,
            right: 20,
            top: 0,
            bottom: 0
        }
    }
};

const catBreedsChart = new Chart(catCtx, {
    type: 'pie',
    data: catBreedsData,
    options: catPieChartOptions
});
