window.onload = function() {
    const images = ["0.jpeg", "1.jpg", "2.jpeg", "3.jpeg"];
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}`;

    // Set the background image using CSS
    document.body.style.backgroundImage = `url('img/${chosenImage}')`;
    document.body.style.backgroundOpacity = "0.5";
};