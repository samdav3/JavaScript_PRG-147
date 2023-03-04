function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    var name = "Samantha Lee Davenport";
    document.getElementById("name").innerHTML = name;

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    let length = myString.length;
    document.getElementById("length").innerHTML = length + " characters";



    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let myInfo = "Here is some info about me: \nMy name is Sam, but my family calls me \"Sham\".\nMy dogs names are Ellie \\ Dottie \\ and Lip."
    document.getElementById("escape").innerHTML = (myInfo);

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // name variable at top of file 
    // Use the JavaScript slice function to display your first name to first paragraph
    let slice = name.slice(0, 8);
    document.getElementById("first").innerHTML = slice;


    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let substring = name.substring(8, 12);
    document.getElementById("middle").innerHTML = substring;


    // Use the JavaScript subst Method to display your last name to the last paragraph
    let substr = name.substr(12);
    document.getElementById("last").innerHTML = substr;



    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let replace = major.replace("Physical Therapy", "Web & Mobile Design and Development");
    document.getElementById("major").innerHTML = replace;


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let upper = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upper;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trim = trimText.trim();
    document.getElementById("trim").innerHTML = trim;


    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let index = months.indexOf("May");
    document.getElementById("index").innerHTML = index;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let firstName = 'Samantha';
    let lastName = 'Davenport';
    let greeting = `Welcome ${firstName} ${lastName}!`;
    document.getElementById("greeting").innerHTML = greeting;




    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
} // print to the greeting paragraph