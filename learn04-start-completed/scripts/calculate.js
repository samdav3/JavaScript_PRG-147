function addDate() {
    let today = new Date();
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

function showScreen() {
    var num_room = document.getElementById("room1").value;
    var num_room2 = document.getElementById("room2").value;
    var num_room3 = document.getElementById("room3").value;
    if (value == 1) {
        num_room.style.display = "block";
        num_room2.style.display = "none";
        num_room3.style.display = "none";
    } else if (value == 2) {
        num_room.style.display = "block";
        num_room2.style.display = "block";
        num_room3.style.display = "none";
    } else {
        num_room.style.display = "block";
        num_room2.style.display = "block";
        num_room3.style.display = "block";
    }
}


function estimate() {
    if (value == 1) {
        var name = document.getElementById("name").value;
        var length = parseFloat(document.getElementById("rm1length").value);
        var width = parseFloat(document.getElementById("rm1width").value);
        var height = parseFloat(document.getElementById("rm1height").value);
        var totalSqFt = ((length + height * 2) + (length + width * 2));
        var cost = (totalSqFt * .65);
        document.getElementById("rm1cost").value = cost;
        var totalCost = cost;
        document.getElementById("estimate").innerHTML = (name + ", your estimate is " + totalCost);
    } else if (value == 2) {
        var name = document.getElementById("name").value;
        var length2 = parseFloat(document.getElementById("rm2length").value);
        var width2 = parseFloat(document.getElementById("rm2width").value);
        var height2 = parseFloat(document.getElementById("rm2height").value);
        var totalSqFt2 = ((length2 + height2 * 2) + (length2 + width2 * 2));
        var cost2 = (totalSqFt2 * .65);
        document.getElementById("rm2cost").value = cost;
        var totalCost2 = cost2;
        document.getElementById("estimate").innerHTML = (name + ", your estimate is " + (totalCost + totalCost2));
    } else if (value == 3) {
        var name = document.getElementById("name").value;
        var length3 = parseFloat(document.getElementById("rm1length").value);
        var width3 = parseFloat(document.getElementById("rm1width").value);
        var height3 = parseFloat(document.getElementById("rm1height").value);
        var totalSqFt3 = ((length3 + height3 * 2) + (length3 + width3 * 2));
        var cost3 = (totalSqFt3 * .65);
        document.getElementById("rm3cost").value = cost;

        var totalCost3 = cost3;
        document.getElementById("estimate").innerHTML = (name + ", your estimate is " + (totalCost3 + totalCost2 + totalCost));
    }
}