class Homes {
    constructor(stories, garageSpaces, roofColor, sidingColor) {
        this.stories = stories;
        this.garageSpaces = garageSpaces;
        this.roofColor = roofColor;
        this.sidingColor = sidingColor;
    }
    homeStats() {
        return `This home has ${this.stories} story(s), ${this.garageSpaces} garage space(s), the roof is ${this.roofColor}, and the siding is ${this.sidingColor}.`
    }
}

const home1 = new Homes(2, 2, 'red', 'goldenrod');
document.getElementById('home1').innerHTML = home1.homeStats();

const home2 = new Homes(3, 3, 'grey', 'white');
document.getElementById('home2').innerHTML = home2.homeStats();

const home3 = new Homes(1, 2, 'black', 'grey');
document.getElementById('home3').innerHTML = home3.homeStats();

const home4 = new Homes(1, 0, 'black', 'white');
document.getElementById('home4').innerHTML = home4.homeStats();