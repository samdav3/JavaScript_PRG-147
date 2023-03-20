let userInfo = '';
let num1 = document.getElementById('number1').value;
let num2 = document.getElementById('number2').value;
let num3 = document.getElementById('number3').value;
let num4 = document.getElementById('number4').value;
let game = [num1, num2, num3, num4]
let choice = game.rand;
let answer = [choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let numbers = answer;
let output = '';
let userNumber = '';
let found = false;
let numUsed = [];
let numLength = numUsed.length;
let myLength2 = [numLength];
let guess = '';

function range() {
    console.log(choice);
    for (let i = 0; i < myLength; i++) {
        display[i] = " ";
        output = output + display[i];
    }
}
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    output = '';
    userInfo = document.getElementById('name').value;
    document.getElementById('name').value = '';
    document.getElementById('user-info').innerHTML = "Hi, " + userInfo + "!";
})
document.getElementById('submit1').addEventListener("click", function(event) {
    event.preventDefault();
    output = '';
    userNumber = document.getElementById('number1').value;
    document.getElementById('number1').value = '';
    document.getElementById('numbers').innerHTML = num1;
    numUsed = numUsed.concat(userNumber);
    document.getElementById('guessed').innerHTML = userNumber;
    document.getElementById('guessed2').innerHTML = numUsed;

})
document.getElementById('submit2').addEventListener("click", function(event) {
    event.preventDefault();
    output = '';
    userNumber = document.getElementById('number2').value;
    document.getElementById('number2').value = '';
    document.getElementById('numbers').innerHTML = num2;
    numUsed = numUsed.concat(userNumber);
    document.getElementById('guessed').innerHTML = userNumber;
    document.getElementById('guessed2').innerHTML = numUsed;

})
document.getElementById('submit3').addEventListener("click", function(event) {
    event.preventDefault();
    output = '';
    userNumber = document.getElementById('number3').value;
    document.getElementById('number3').value = '';
    document.getElementById('numbers').innerHTML = num1;
    numUsed = numUsed.concat(userNumber);
    document.getElementById('guessed').innerHTML = userNumber;
    document.getElementById('guessed2').innerHTML = numUsed;

})
document.getElementById('submit4').addEventListener("click", function(event) {
    event.preventDefault();
    output = '';
    userNumber = document.getElementById('number4').value;
    document.getElementById('number4').value = '';
    document.getElementById('numbers').innerHTML = num1;
    numUsed = numUsed.concat(userNumber);
    document.getElementById('guessed').innerHTML = userNumber;
    document.getElementById('guessed2').innerHTML = numUsed;

})

document.getElementById('submit5').addEventListener('click', function(event) {
    event.preventDefault();
    output = '';
    guess = document.getElementById('guess').value;
    document.getElementById('name').value = '';
})


function filter() {
    switch ((guess == choice) || (guess >= choice) || (guess <= choice)) {
        case (guess <= (choice - 20) || guess >= (choice + 20)):
            document.getElementById("temp").innerHTML = "You are freezing!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (guess <= (choice - 15) || guess >= (choice + 15)):
            document.getElementById("temp").innerHTML = "You are cold!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (guess <= (choice - 10) || guess >= (choice + 10)):
            document.getElementById("temp").innerHTML = "You are warm!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (guess <= (choice - 7) || guess >= (choice + 7)):
            document.getElementById("temp").innerHTML = "You are hot!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (guess <= (choice - 5) || guess >= (choice + 5)):
            document.getElementById("temp").innerHTML = "You are burning!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (guess <= (choice - 2) || guess >= (choice + 2)):
            document.getElementById("temp").innerHTML = "You are sizzling!";
            document.getElementById("correct").innerHTML = "Try again!";
            break;
        case (guess == choice):
            document.getElementById("temp").innerHTML = "You won!";
            document.getElementById("correct").innerHTML = "You guessed the correct answer, " + answer;
            break;
        default:
            break;
    }
}