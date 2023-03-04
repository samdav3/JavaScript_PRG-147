function calculate() {
    var chi = '';
    var zodiac = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);
//Aries - Aries Dates: March 21-April 19
//Taurus Dates: April 20-May 20
//Gemini Dates: May 21-June 20
//Cancer Dates: June 21-July 22
//Leo Dates: July 23-August 22
//Virgo Dates: August 23-September 22
//Libra Dates: September 23-October 22
//Scorpio Dates: October 23-November 21
//Sagittarius Dates: November 22-December 21
//Capricorn Dates: December 21-January 20
//Aquarius Dates: January 21-February 18
//Pisces Dates: February 19-March 20
//check for the month then use an if statement in their before the break to get normal zodiac sign

    switch(month){
        case 1:
            month = "January"
            if (date <= 20){
                zodiac = "Capricorn"
            }else{
                zodiac = "Aquarius"
            }
            break;
        case 2:
            month = "February"
            if (date <= 18){
                zodiac = "Aquarius"
            }else{
                zodiac = "Pisces"
            }
            break;
        case 3:
            month = "March"
            if (date <= 20){
                zodiac = "Pisces"
            }else{
                zodiac = "Aries"
            }
            break;
        case 4:
            month = "April"
            if (date <= 19){
                zodiac = "Aries"
            }else{
                zodiac = "Taurus"
            }
            break;
        case 5:
            month = "May"
            if (date <= 20){
                zodiac = "Taurus"
            }else{
                zodiac = "Gemini"
            }
            break;
        case 6:
            month = "June"
            if (date <= 20){
                zodiac = "Gemini"
            }else{
                zodiac = "Cancer"
            }
            break;
        case 7:
            month = "July"
            if (date <= 22){
                zodiac = "Cancer"
            }else{
                zodiac = "Leo"
            }
            break;
        case 8:
            month = "August"
            if (date <= 22){
                zodiac = "Leo"
            }else{
                zodiac = "Virgo"
            }
            break;
        case 9:
            month = "September"
            if (date <= 22){
                zodiac = "Virgo"
            }else{
                zodiac = "Libra"
            }
            break;
        case 10:
            month = "October"
            if (date <= 22){
                zodiac = "Libra"
                }else{
                    zodiac = "Scorpio"
                }
                break;
        case 11:
            month = "November"
            if (date <= 21){
                zodiac = "Scorpio"
            }else{
                zodiac = ""
                }
                break;
        case 12:
            month = "December"
            if (date <= 21){
                zodiac = "Sagittarius"
            }else{
                zodiac = "Capricorn"
            }
            break;
    }


    switch (year) {
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
        case 2021:
        case 2009:
        case 1997:
        case 1985:
        case 1973:
            chi = "Ox"
            break;
        case 2022:
        case 2010:
        case 1998:
        case 1986:
        case 1974:
            chi = "Tiger"
            break;
        case 1982:
        case 1994:
        case 2006:
        case 2018:
            chi = "Dog"
            break;
        case 2019:
        case 2007:
        case 1995:
        case 1983:
            chi = "Pig"
            break;
        case 2023:
        case 2011:
        case 1999:
        case 1987:
            chi = "Rabbit"
            break;
        case 2024:
        case 2012:
        case 2000:
        case 1988:
            chi = "Dragon"
            break;
        case 2025:
        case 2013:
        case 2001:
        case 1989:
            chi = "Snake"
            break;
        case 2026:
        case 2014:
        case 2002:
        case 1990:
            chi = "Horse"
            break;
        case 2027:
        case 2015:
        case 2003:
        case 1991:
            chi = "Goat"
        case 2028:
        case 2016:
        case 2004:
        case 1992:
            chi = "Monkey"
            break;
        case 2017:
        case 2005:
        case 1993:
        case 1981:
            chi = "Rooster"
            break;
        default:
            chi = "That year is not included in my list.";
            break;
    }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your zodiac sign is: " + zodiac;


}