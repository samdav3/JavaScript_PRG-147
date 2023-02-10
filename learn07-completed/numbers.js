function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Samantha Davenport"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
   let a = 20
   let b = "30"
   let c = 15
    document.getElementById("add").innerHTML = "If you try to add a number and string the result will be a string conconcatenation." + "<br>" + " Here is an example:" + "<br>" + " var a = 20, var b = '30', var c = 15" + "<br>" + "a + b + c = " + a + b + c

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let d = 303
    document.getElementById("to-string").innerHTML = "When we use the toString() method it will convert a number to a String." + "<br>" + "Here is an example: " + "<br>" + "var d = 303" + "<br>" + "d.toString() returns:" + "<br>" + d.toString()

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let e = 303.3030303
    document.getElementById("exponent").innerHTML = "Using the toExponential() method it will return a string, with a number rounded and written using exponential notation" + "<br>" + "Here is an example: (I opted to use the parameter so the number will be rounded)" + "<br>" + "var e = 303.3030303" + "<br>" + "e.toExponential(2) returns:" + "<br>" + e.toExponential(2)

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let f = 303.3030303
    document.getElementById("fixed").innerHTML = "Using the toFixed() method it will return a string with the number written with a specified number of decimals." + "<br>" + "Here is an example: " + "<br>" + "var f = 303.3030303" + "<br>" + "e.toFixed(3) returns:" + "<br>" + f.toFixed(3)

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let g = 303.3030303
    document.getElementById("precision").innerHTML = "Using the toPrecision() method it will return a string, with a number written with a specified length." + "<br>" + "Here is an example: " + "<br>" + "var g = 303.3030303" + "<br>" + "g.toPrecision(4) returns:" + "<br>" + g.toPrecision(4)

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let h = "303 was my sailing number"
    document.getElementById("float").innerHTML = "Using the parseFloat() method it will convert a string to a number." + "<br>" + "Here is an example: " + "<br>" + "var h = '303 was my sailing number'" + "<br>" + "parseFloat(h) returns:" + "<br>" + parseFloat(h)

    // Demonstrate the use of parseInt() and print to the int paragraph
    let i = "151.5 is half of my sailing number"
    document.getElementById("int").innerHTML = "Using the parseInt() method it will convert a string to a number, but will only return a whole number." + "<br>" + "Here is an example: " + "<br>" + "var i = '151.5 is half of my sailing number'" + "<br>" + "parseInt(i) returns:" + "<br>" + parseInt(i)

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
   document.getElementById("equals").innerHTML = "The difference between == and === is that == does the type conversion of the operands before comparison and the === compares the values as well as the data types of the operands."

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
        document.getElementById("logic").innerHTML = "The and (&&) operator has higher precedence than the or (||) operator. So, the && operator will be evaluated first, then the || operator. "


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    var switch1 = window.prompt("Enter a number 1-10 and see what will happen if you enter a number outside this range.")    
    switch (switch1){
            case "1":
                document.getElementById('switch').innerHTML ="You entered 1"
                break;
            case "2":
                document.getElementById('switch').innerHTML ="You entered 2"
                break;
            case "3":
                document.getElementById('switch').innerHTML ="You entered 3"
                break;
            case "4":
                document.getElementById('switch').innerHTML ="You entered 4"
                break;
            case "5":
                document.getElementById('switch').innerHTML ="You entered 5"
                break;
            case "6":
                document.getElementById('switch').innerHTML ="You entered 6"
                break;
            case "7":
                document.getElementById('switch').innerHTML ="You entered 7"
                break;
            case "8":
                document.getElementById('switch').innerHTML ="You entered 8"
                break;
            case "9":
                document.getElementById('switch').innerHTML ="You entered 9"
                break;
            case "10":
                document.getElementById('switch').innerHTML ="You entered 10"
                break;
            default:
                document.getElementById('switch').innerHTML ="Switch works like and if statement. It will evaluate the value entered and determine what action to take based on that value."
                break;
            }
    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
        var color = "purple"
        var color2 = 'blue'
        color === "purple" || color2 === "blue"
            ? document.getElementById('ternary').innerHTML = "The color is purple or the color is blue!"
            : document.getElementById('ternary').innerHTML = "The color is not purple or blue!"
        
}
