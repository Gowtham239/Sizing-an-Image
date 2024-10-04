// message element
const message = document.querySelector(".message");



// pixels width
const pixelsWidth =document.querySelector(".width-pixels");

// increment and decrement buttons
const decrementButton = document.querySelector("#decrementButton");
const incrementButton = document.querySelector("#incrementButton");


let pixels = parseInt(pixelsWidth.textContent);


// function warningMessage(pixels) {
//     if(pixels > 300) {
//         message.textContent = "Too big. Decrease the size of the image.";
//     } else if (pixels < 100) {
//         message.textContent = "Too small. Increase the size of the image.";
//     } else {
//         message.textContent = "";
//     }
// }

// function incrementAndDecremetImageWidth(imgWidth) {
//     // image
//     let image = document.querySelector("#image");
//     image.style.width = imgWidth + "px";
// }

// function incrementBy5() {
//     let incrementValue = pixels;
//     if(incrementValue < 300) {
//         pixels += 5;        
//     }
//     pixelsWidth.textContent = incrementValue;  
//     incrementAndDecremetImageWidth(incrementValue);
//     warningMessage(incrementValue);    
// }

// function decrementBy5() {
//     if(pixels > 100) {
//         pixels -= 5;
//         console.log(pixels);

//     }
//     pixelsWidth.textContent = pixels;
//     incrementAndDecremetImageWidth(pixels);
//     warningMessage(pixels);
// }

function incrementBy5() {
    if(pixels >= 250) {
        message.textContent = "Too big";
    } else {
        pixels += 5;
        pixelsWidth.textContent = pixels;
        image.style.width = pixels+"px";
        message.textContent = "";
    }
}

function decrementBy5() {
    if(pixels <= 100) {
        message.textContent = "Too small";
    } else {
        pixels -= 5;
        pixelsWidth.textContent = pixels;
        image.style.width = pixels+"px";
        message.textContent = "";
    }
}


incrementButton.addEventListener("click", incrementBy5);
decrementButton.addEventListener("click", decrementBy5);
