// message element
const message = document.querySelector(".message");



// pixels width
const pixelsWidth =document.querySelector(".width-pixels");

// increment and decrement buttons
const decrementButton = document.querySelector("#decrementButton");
const incrementButton = document.querySelector("#incrementButton");

// const pixels = document.querySelector("pixels");

let pixels = parseInt(pixelsWidth.textContent);

function warningMessage() {
    if(pixels > 300) {
        message.textContent = "Too big. Decrease the size of the image.";
    } else if (pixels < 100) {
        message.textContent = "Too small. Increase the size of the image.";
    } else {
        message.textContent = "";
    }
}

function incrementAndDecremetImageWidth(imgWidth) {
    // image
    let image = document.querySelector("#image");
    image.style.width = imgWidth + "px";
}

function incrementBy5() {
    if(pixels < 300) {
        pixels += 5;
    }
    pixelsWidth.textContent = pixels;  
    incrementAndDecremetImageWidth(pixels);
    warningMessage();    
}

function decrementBy5() {
    if(pixels > 100) {
        pixels -= 5;
    }
    pixelsWidth.textContent = pixels;
    incrementAndDecremetImageWidth(pixels);
    warningMessage();
}

incrementButton.addEventListener("click", incrementBy5);
decrementButton.addEventListener("click", decrementBy5);

warningMessage();