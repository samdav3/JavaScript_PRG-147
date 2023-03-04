// declare and initialize array
let game = ["ELLIE", "DOTTIE", "LIP", "KINZIE", "TIKI", "MOOSE", "DUDLEY", "WALLY", "BAILEY", "CALI"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = answer.length;
let output = '';
let userLetter = '';
let found = false;
var lettersUsed = [];
let lettersLength = lettersUsed.length;
let myLength2 = [lettersLength];
let URL1 = "C:\\Users\\Admin\\Documents\\images\\01.png";
let URL2 = "C:\\Users\\Admin\\Documents\\images\\02.png";
let URL3 = "C:\\Users\\Admin\\Documents\\images\\03.png";
let URL4 = "C:\\Users\\Admin\\Documents\\images\\04.png";
let URL5 = "C:\\Users\\Admin\\Documents\\images\\05.png";
let URL6 = "C:\\Users\\Admin\\Documents\\images\\06.png";
let URL7 = "C:\\Users\\Admin\\Documents\\images\\07.png";
let images = [URL1, URL2, URL3, URL4, URL5, URL6, URL7];  


function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman



document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    document.getElementById("guessed").innerHTML = userLetter.toUpperCase();
    lettersUsed = lettersUsed.concat(userLetter.toUpperCase());
    document.getElementById('guessed2').innerHTML = "Guesses: " + lettersUsed;
    var rotator = document.getElementById('hangman');  
    var imageDir = 'C:\\Users\\Admin\\Documents\\images';                       
    var delayInSeconds = 1; 
    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = imageDir + images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);

    for (let c = 0; c < answer.length; c++){
        let x = 0;
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            attemptsLeft--;
            found = true;
        }
        
        output = output + display[c] + ' ';
    }

    if (found == false){
        attemptsLeft--;
    }

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';
    
});


//scirpt connected fine somereason the button and the script are not registering.