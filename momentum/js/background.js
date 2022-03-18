const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]
const image = Math.floor(Math.random() * images.length);
const chosenImage = images[image]

const bgImage = document.createElement("img")
bgImage.id = "bg"
bgImage.src = `img/${chosenImage}`

// 이를 body에 추가해줘야 하므로 appendChild를 쓴 것
document.body.appendChild(bgImage)