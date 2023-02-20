function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
document.getElementById("round").innerHTML = Math.round(3.03)
document.getElementById("ceil").innerHTML = Math.ceil(3.03)
document.getElementById("floor").innerHTML = Math.floor(3.03)
document.getElementById("trunc").innerHTML = Math.trunc(3.03)
document.getElementById("sign").innerHTML = Math.sign(3.03)
document.getElementById("pow").innerHTML = Math.pow(3, 3)
document.getElementById("min").innerHTML = Math.min(3, 6, 25, -3, 0)
document.getElementById("random").innerHTML = Math.random()

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
const random = Math.floor(Math.random() * 101)
document.getElementById("random2").innerHTML = random

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 3
    let y = "3"
document.getElementById("comparisons").innerHTML = "The difference between == and === is that the == operator is comparing if the objects are equal to eachother. The === operator is comparing if the objects are of equal value and equal type." + "</br>" + "If x = 3 and y = '3'" + "</br>" + "(x==y) = " + (x==y) + "</br>" + "(x===y) = " + (x===y)


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}