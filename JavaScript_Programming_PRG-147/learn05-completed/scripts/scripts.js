const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "A cute black dog hanging out in a bucket!",
    altTag: "black dog"
}
const dog2 = {
    heading: "Golden Puppy",
    image: "images/gold-dog.jpg",
    caption: "A golden puppy contemplating life!",
    altTag: "golden puppy"
}
const dog3 = {
    heading: "Snow Dog",
    image: "images/snow-dog.jpg",
    caption: "A puppy playing in the snow with a snowman!",
    altTag: "snow puppy"
}
const dog4 = {
    heading: "Beach Dogs",
    image: "images/white-dogs.jpg",
    caption: "Some dogs on the beach!",
    altTag: "beach dogs"
}

function chooseDog(dog) {
    if (dog == 1) {
        loadMe(dog1, 1)
    } else if (dog == 2) {
        loadMe(dog2, 2)
    } else if (dog == 3) {
        loadMe(dog3, 3)
    } else if (dog == 4) {
        loadMe(dog4, 4)
    }
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute = ('alt', dog.altTag);
    document.getElementById("button" + dogNum).style.display = "none";
}