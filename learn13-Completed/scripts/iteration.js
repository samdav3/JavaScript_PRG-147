/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
var movies = ["Shrek", "Bridesmaids", "Avatar", "Twilight", "Hot Chick"];
let list = "";
for (var x of movies){
    document.getElementById('list').innerHTML = list += x + "<br>"
};



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Never gonna not Dance again", "Hey Jude", "Sober", "Formation", "Starting OVer"]);
let songList = "";
for (var y of songs){
    document.getElementById('set1').innerHTML = songList += y + "<br>"
};
// add two more songs to the set then display in the set2 paragraph
songs.add("Daylight");
songs.add("Eye of the Tiger");
songList = ""
for (var y of songs){
    document.getElementById('set2').innerHTML = songList += y + "<br>"
};





/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const names = new Map([
    ["Sam", "sldavenport6@gmail.com"],
    ["Katie", "katiecal1118@gmail.com"],
    ["Kelsey", "klsydaven@gmail.com"],
    ["Taylor", "tovington@comcast.net"],
    ["Diane", "dididavenport@gmail.com"]
]);
let map1 = "";
names.forEach (function(value, key) {
    map1 += key + ' = ' + value + "<br>";
});
document.getElementById('map1').innerHTML = map1;


// add two new names and emails and display in map2 use the forEach() method
names.set("Kassie", "tobes80@aol.com");
names.set("Alicia", "ajuliano@aol.com");
let map2 = "";
names.forEach (function(value, key){
    map2 += key + ' = ' + value + "<br>"
})
document.getElementById('map2').innerHTML = map2

// get and display the email of one person, display in map3

document.getElementById('map3').innerHTML = names.get("Sam")