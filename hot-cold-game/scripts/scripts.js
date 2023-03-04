
let rand = Math.floor(Math.random() * 1001) + 1;
let choice = rand;
let answer = [choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let numbers = answer;
let output = '';
let userNum = '';
let found = false;
var numUsed = [];
let numLength = numUsed.length;
let myLength2 = [numLength];

function range(){
        console.log(choice);
        for (let i = 0; i < choice.length; i++) {
            display[i] = " ";
            output = output + display[i];
        }
}
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    output = '';
    userNum = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; 
    document.getElementById("guessed").innerHTML = userNum;
    numUsed = numUsed.concat(userNum);
    document.getElementById('guessed2').innerHTML = "Guesses: " + numUsed;


    switch ((userNum == choice)||(userNum >= choice)||(userNum <= choice)){
        case(userNum <= (choice - 100)||userNum >= (choice + 100)):
            document.getElementById("temp").innerHTML = "You are freezing!";
            document.getElementById("correct").innerHTML = "Try again!"; 
            break;
        case (userNum <= (choice - 50)||userNum >= (choice + 50)):
            document.getElementById("temp").innerHTML = "You are cold!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (userNum <= (choice - 20)||userNum >= (choice + 20)):
            document.getElementById("temp").innerHTML = "You are warm!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (userNum <= (choice - 10)||userNum >= (choice + 10)):
            document.getElementById("temp").innerHTML = "You are hot!";
            document.getElementById("correct").innerHTML = "Try again!"; 
            break;
        case (userNum <= (choice - 5)||userNum >= (choice + 5)):
            document.getElementById("temp").innerHTML = "You are burning!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (userNum <= (choice - 2)||userNum >= (choice + 2)):
            document.getElementById("temp").innerHTML = "You are sizzling!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (userNum == choice):
            document.getElementById("temp").innerHTML = "You won!";
            document.getElementById("correct").innerHTML = "You guessed the correct answer, " + answer;
            break;
        default:
            break;
        }

})


