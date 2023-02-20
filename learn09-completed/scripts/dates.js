/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const date = new Date()
document.getElementById("basic").innerHTML = date


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date(2023, 1, 20)
document.getElementById("today").innerHTML = today

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date("1994/05/26")
document.getElementById("birthday").innerHTML = birthday


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById("iso").innerHTML = date.toISOString()


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const long = new Date("Oct 28 2023")
const parse = Date.parse("1994/05/26")
const year = new Date ("2023")
document.getElementById("date1").innerHTML = long
document.getElementById("date2").innerHTML = parse
document.getElementById("date3").innerHTML = year

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = birthday.getFullYear()
document.getElementById("get2").innerHTML = birthday.getMonth()
document.getElementById("get3").innerHTML = birthday.getDate()
document.getElementById("get4").innerHTML = birthday.getTime()


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const wedding = new Date();
wedding.setFullYear(2023);
document.getElementById("set1").innerHTML = wedding
wedding.setMonth(9)
document.getElementById("set2").innerHTML = wedding
wedding.setDate(28)
document.getElementById("set3").innerHTML = wedding
wedding.setHours(16)
document.getElementById("set4").innerHTML = wedding