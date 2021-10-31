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
        let breeds = data.message 

        for (const breed in breeds) {
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
