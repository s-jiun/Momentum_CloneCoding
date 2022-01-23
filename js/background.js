const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${chosenImg}`;

document.body.appendChild(backgroundImg);