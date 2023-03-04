function Sandwich() {
    var name = document.getElementById("name").value;
    var spanstotal = document.getElementById("stotal");
    spanstotal.value = "";
    var op1 = document.getElementById("options");
    var quantity = document.getElementById("quantity").value;
    for (var i = 0; i < op1.length; i++) {
        if (op1.options[i].selected == true) {
            spanstotal.value += op1.options[i].value + " ";
            document.getElementById("stotal").innerHTML = (name + ", you have selected " + quantity + " " + spanstotal.value);
        }
        if (document.getElementById("stotal").value == "") {
            document.getElementById("stotal").innerHTML = ('Please select one option');
        }
    }
}


function Drink() {
    var name = document.getElementById("name").value;
    var spandtotal = document.getElementById("dtotal");
    spandtotal.value = "";
    var op2 = document.getElementById("doptions");
    var quantity = document.getElementById("dquantity").value;
    for (var i = 0; i < op2.length; i++) {
        if (op2.options[i].selected == true) {
            spandtotal.value += op2.options[i].value + " ";
            document.getElementById("dtotal").innerHTML = (name + ", you have selected " + quantity + " " + spandtotal.value);
        }
        if (document.getElementById("dtotal").value == "") {
            document.getElementById("dtotal").innerHTML = ('Please select one option');
        }
    }
}

function Dessert() {
    var name = document.getElementById("name").value;

    var spandes_total = document.getElementById("des_total");
    spandes_total.value = "";
    var op3 = document.getElementById("ddoptions");

    //var spanctotal = document.getElementById("ctotal");
    //spanctotal.value = "";
    //var quantity = document.getElementById("ddquantity").value;
    //var price = document.getElementById = ("ddoptions").num;

    for (var i = 0; i < op3.length; i++) {
        if (op3.options[i].selected == true) {
            spandes_total.value += op3.options[i].value + " ";
            document.getElementById("des_total").innerHTML = (name + ", you have selected " + quantity + " " + spandes_total.value);
        }
        if (document.getElementById("des_total").value == "") {
            document.getElementById("des_total").innerHTML = ('Please select one option');
        }
    }
    /* for (var z = multiplyNumbers(quantity, price); z < 100; z += multiplyNumbers(quantity, price)) {
         if (document.getElementById("des_total").value == "") {
         spanctotal.value *= price;
         document.getElementById("ctotal").innerHTML = ("$" + price)
     }*/
    /*for (var v = 0; v < quantity.length; v++) {
        if (quantity.options[v].selected == true) {
            spanctotal.value *= op3.options[v].num = " ";
            //quantity *= op3.options[v].num = " ";
            document.getElementById("ctotal").innerHTML = ("$" + quantity);
        }
    }*/

}

function Summary() {
    var name = document.getElementById("name").value;
    var sandwich = document.getElementById("stotal").value;
    var drink = document.getElementById("dtotal").value;
    var dessert = document.getElementById("des_total").value;
    var quantity = document.getElementById("quantity").value;
    var dquantity = document.getElementById("dquantity").value;
    var ddquantity = document.getElementById("ddquantity").value;

    var stotal = quantity * options.num
    var dtotal = dquantity * doptions.num
    var des_total = ddquantity * ddoptions.num
    var total = stotal + dtotal + des_total
    var order = (quantity + " " + sandwich + ", " + dquantity + " " + drink + ", " + ddquantity + " " + dessert);
    document.getElementById("summary").innerHTML = (name + ", your order is " + order);
    document.getElementById("total").innerHTML = ("Your total is $" + total);
}