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
