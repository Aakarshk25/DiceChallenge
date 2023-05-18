var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage = "dice" + randomNumber1 + ".png";

var source = "images/" + randomDiceImage;
var iamge1 = document.querySelectorAll("img")[0].setAttribute("src", source);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var imge1 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "shit its a tie fuck" 
} 

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 wins"
    
} else {
    document.querySelector("h1").innerHTML = "player 1 wins"
}















// // Generate a random number between 1 and 6 (inclusive)
// var randomNumber = Math.floor(Math.random() * 6) + 1;

// // Create the file name for the dice image based on the random number
// var diceImageFileName = "dice" + randomNumber + ".png";

// // Construct the complete source path for the dice image
// var imageSource = "images/" + diceImageFileName;

// // Get the first img element on the page
// var imageElement = document.querySelector("img");

// // Set the src attribute of the image element to the generated source path
// imageElement.setAttribute("src", imageSource);

// In the line var diceImageFileName = "dice" + randomNumber + ".png";, we are constructing the file name for the dice image based on the randomly generated randomNumber.

// Let's break it down:

// "dice" is a string that represents the base file name of the dice images. It is a common convention to use a consistent base name for a set of related images.
// randomNumber is the randomly generated number between 1 and 6 (inclusive) that you calculated earlier in your code.
// ".png" is a string representing the file extension of the dice image. In this case, it assumes that the dice images are in PNG format.
// By combining these components, we create a dynamic file name for the dice image. For example, if randomNumber is 3, the resulting diceImageFileName would be "dice3.png". This assumes that there are dice images named "dice1.png", "dice2.png", "dice3.png", and so on, in the "images/" directory relative to your HTML file.

// The variable name dice is not explicitly defined in the provided code snippet. It seems to be a part of the file name convention you are using, where the base name for the dice images is "dice".




