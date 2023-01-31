// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Sam";

const taxRate = .07; // This is a constant
// myName = "Samantha Lee Davenport" - Allowed but frowned upon

function names() {

    //fix the errors
    let firstName = "Samantha",
        lastName = "Davenport";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    //let firstName = "Doctor";
    var name = "Sham";
    document.getElementById("first").innerHTML = firstName;
    document.getElementById("nick-name").innerHTML = name;

}

function scope() {
    //fix the errors
    let firstName = "Samantha",
        lastName = "Davenport";
    const taxRate = .08
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ellie";
    dog2 = "Dottie";
    //dog2 = "Dottie";
    var dog3 = "Lip";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Wally"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ellie", "Dottie", "Lip"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ellie May";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Black Lab", "Lab Pit Mix", "Aussie Mix"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    var myMath = 0
        // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 +32 = " + addition;
    let subtraction = 10 - 32
    document.getElementById("subtraction").innerHTML = "10 -32 = " + subtraction;
    let multiplication = 10 * 32
    document.getElementById("multiplication").innerHTML = "10 * 32 = " + multiplication;
    let exponent = 10 ** 32
    document.getElementById("exponent").innerHTML = "10 ** 32 = " + exponent;
    let division = 10 / 32
    document.getElementById("division").innerHTML = "10 / 32 = " + division;
    let modulo = 10 % 32
    document.getElementById("modulus").innerHTML = "10 % 32 = " + modulo;
    let increment = 10++
        document.getElementById("increment").innerHTML = "10++ = " + increment;
    let decrement = 10--
        document.getElementById("decrement").innerHTML = "10-- = " + decrement;

}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10 =" + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1 " + x;
    x - +2
    document.getElementById("minus-equals").innerHTML = "x -= 1 " + x;
    x *= 3
    document.getElementById("times-equals").innerHTML = "x *= 2 " + x;
    x /= 4
    document.getElementById("divide-equals").innerHTML = "x /= 2 " + x;
    x %= 5
    document.getElementById("modulo-equals").innerHTML = "x %= 2 " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const dogs = ["Labs", "Pits", "Aussie's"];
    document.getElementById("array").innerHTML = dogs;
    const person = { firstName: "Sam", lastName: "Davenport", age: 28, eyeColor: "blue" };
    document.getElementById("object").innerHTML = person;

}