document.addEventListener("DOMContentLoaded", () => {

    const addImages = data => {
        const container = document.querySelector("#dog-image-container")
        data.message.forEach(url => {
            const image = document.createElement("img")
            image.src = url
            container.appendChild(image)
        })
    }

    const breedsList = data => {
        const breedContainer = document.querySelector("#dog-breeds")
        
        for (const breed in data.message) {
            const list = document.createElement("li")
            list.innerText = breed
            breedContainer.appendChild(list)
        }
    }
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(addImages)
    .catch(error => console.log(error))

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(breedsList)
    .catch(error => console.log(error))
})

// document.addEventListener("DOMContentLoaded", () => {
//     fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then(resp => resp.json())
//     .then(json => addImages(json)),
//     fetch("https://dog.ceo/api/breeds/list/all")
//     .then(resp => resp.json())
//     .then(json => addBreeds(json))
// })

// function addImages(images) {
//     let container = document.getElementById("dog-image-container");
//     images.message.forEach(element => {
//         let image = document.createElement("img")
//         image.src = element;
//         container.appendChild(image);
//     })
// }

// function addBreeds(breeds) {
//     let ulist = document.getElementById("dog-breeds");
//     breeds.message.forEach(breed => {
//         let list = document.createElement("li");
//         list.innerText = breed;
//         ulist.appendChild(list);
//     })
// }






document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addImages(json))
})

function addImages(images) {
    let container = document.getElementById("dog-image-container");
    images.message.forEach(element => {
        let image = document.createElement("img")
        image.src = element;
        container.appendChild(image);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {console.log(json)
        let breeds = json.message;
        let ulist = document.getElementById("dog-breeds");
        for (const breed in breeds) {
            let list = document.createElement("li");
            list.innerText = breed;
            ulist.appendChild(list);
        }
    })
})