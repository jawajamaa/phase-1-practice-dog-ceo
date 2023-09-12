console.log('%c Hello World', 'color: firebrick')

// Challenge 1
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// Challenge 2
// const breedUrl = "https://dog.ceo/api/breeds/list/all";


document.addEventListener("DOMContentLoaded", (event) => {
    const imgContainer = document.getElementById("dog-image-container");
    const dogBreedList = document.getElementById("dog-breeds"); 
   const breedDropdown = document.getElementById("breed-dropdown");
    const allBreeds = [];

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogs => {
        dogs.message.forEach(dog => {
            const dogImg = document.createElement("img");
            dogImg.src = dog;
            imgContainer.appendChild(dogImg);
        })
    });
  
    
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(dogBreeds => {
                const dogBreedArr = Object.keys(dogBreeds.message);
                dogBreedArr.map(breed => {
                    allBreeds.push(breed);
                let dogBreedLi = document.createElement("li");
                dogBreedLi.innerHTML = breed;
                dogBreedList.appendChild(dogBreedLi);

                dogBreedLi.addEventListener("click", (event) => {
                event.target.style.color = "red";
                });   
            });
        });


        breedDropdown.addEventListener("change", (event) => {
            let firstLetter = document.getElementById("breed-dropdown").value;
            dogBreedList.innerHTML = "";

           function filterBreedsByLetter(allBreeds, firstLetter) {
                return allBreeds.filter((eachBreed) => {
                   return firstLetter === eachBreed.slice(0,1).toLowerCase();
                })
           }
            // console.log(filterBreedsByLetter(allBreeds, firstLetter));
            filterBreedsByLetter(allBreeds, firstLetter).forEach((breed)=> {
                let dogBreedLi = document.createElement("li");
                dogBreedLi.innerHTML = breed;
                dogBreedList.appendChild(dogBreedLi);
            })
        });

});//document.addEventListener(DOMContentLoaded) closing brackets

    