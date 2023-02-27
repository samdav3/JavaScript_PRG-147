function calculate() {
    var holiday1 = '';
    var holiday2 = '';
    //var month = '';
    let month = parseInt(document.getElementById("month").value);

    switch(month){
        case 1:
            month = "January"
            holiday1 = "January 1st New Years Day"
            holiday2 = "January 15th Martin Luther King Jr. Day"
            document.getElementById('january').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 2:
            month = "February"
            holiday1 = "February 2nd Groundhog Day"
            holiday2 = "February 14th Valentines Day"
            document.getElementById('february').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 3:
            month = "March"
            holiday1 = "March 8th International Women's Day"
            holiday2 = "March 17th St. Patricks Day"
            document.getElementById('march').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 4:
            month = "April"
            holiday1 = "April 9th Easter"
            holiday2 = " April 22nd Earth Day"
            document.getElementById('april').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 5:
            month = "May"
            holiday1 = "May 5th Cinco De Mayo"
            holiday2 = "May 29th Memorial Day"
            document.getElementById('may').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 6:
            month = "June"
            holiday1 = "June 14th Flag Day"
            holiday2 = "June 18th Father's Day"
            document.getElementById('june').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 7:
            month = "July"
            holiday1 = "July 4th Independence Day"
            holiday2 = "July 31st National Avocado Day"
            document.getElementById('july').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 8:
            month = "August"
            holiday1 = "August 1st National Girlfriend Day"
            holiday2 = "August 26th National Dog Day"
            document.getElementById('august').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 9:
            month = "September"
            holiday1 = "September 4th Labor Day"
            holiday2 = "September 11th Patriot Day"
            document.getElementById('september').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 10:
            month = "October"
            holiday1 = "October 9th Columbus Day"
            holiday2 = "October 31st Halloween"
            document.getElementById('october').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 11:
            month = "November"
            holiday1 = "November 11th Veterans Day"
            holiday2 = "November 23rd Thanksgiving"
            document.getElementById('november').innerHTML = holiday1 + "<br>" + holiday2
            break;
        case 12:
            month = "December"
            holiday1 = "December 25th Christmas Day"
            holiday2 = "December 31st New Years Eve"
            document.getElementById('december').innerHTML = holiday1 + "<br>" + holiday2
            break;
        default:
            document.getElementById("holidays").innerHTML = "That number is not valid."
    }

    document.getElementById("holidays").innerHTML = "Two Holiday's in " + month + " are " + holiday1 + " and " + holiday2 + "."
}