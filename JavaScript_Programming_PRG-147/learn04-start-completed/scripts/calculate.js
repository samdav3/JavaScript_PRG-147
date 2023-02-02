function addDate() {
    /*let today = new Date();*/
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

function showScreen() {
    let num_room = document.getElementById("room1");
    let num_room2 = document.getElementById("room2");
    let num_room3 = document.getElementById("room3");
    if (value == 1) {
        num_room.style.display = "block";
        num_room2.style.display = "none";
        num_room3.style.display = "none";
    } else if (value == 2) {
        num_room.style.display = "block";
        num_room2.style.display = "block";
        num_room3.style.display = "none";
    } else if (value == 3) {
        num_room.style.display = "block";
        num_room2.style.display = "block";
        num_room3.style.display = "block";
    }
}


function estimate() {
    if (value == 1) {
        let name = document.getElementById("name").value;
        let length = parseFloat(document.getElementById("rm1length").value);
        let width = parseFloat(document.getElementById("rm1width").value);
        let height = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt = ((length + height * 2) + (length + width * 2));
        let cost = (totalSqFt * .65);
        document.getElementById("rm1cost").value = cost;
        var totalCost = cost;
        document.getElementById("estimate").innerHTML = (name + ", your estimate is " + totalCost);
    } else if (value == 2) {
        let name = document.getElementById("name").value;
        let length2 = parseFloat(document.getElementById("rm2length").value);
        let width2 = parseFloat(document.getElementById("rm2width").value);
        let height2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqFt2 = ((length2 + height2 * 2) + (length2 + width2 * 2));
        let cost2 = (totalSqFt2 * .65);
        document.getElementById("rm2cost").value = cost;
        var totalCost2 = cost2;
        document.getElementById("estimate").innerHTML = (name + ", your estimate is " + (totalCost + totalCost2));
    } else if (value == 3) {
        let name = document.getElementById("name").value;
        let length3 = parseFloat(document.getElementById("rm1length").value);
        let width3 = parseFloat(document.getElementById("rm1width").value);
        let height3 = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt3 = ((length3 + height3 * 2) + (length3 + width3 * 2));
        let cost3 = (totalSqFt3 * .65);
        document.getElementById("rm3cost").value = cost;

        var totalCost3 = cost3;
        document.getElementById("estimate").innerHTML = (name + ", your estimate is " + (totalCost3 + totalCost2 + totalCost));
    }
}