document.addEventListener("DOMContentLoaded", () => {

    const addImages = data => {
        const container = document.querySelector("#dog-image-container")
        data.message.forEach(url => {
            const image = document.createElement("img")
            image.src = url
            container.appendChild(image)
        })
    }
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(addImages)
    .catch(error => console.log(error))
})
