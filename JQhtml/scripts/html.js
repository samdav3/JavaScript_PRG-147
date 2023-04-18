$(document).ready(function() {

    $("#submit").click(function() {
        event.preventDefault();

        var name = $("#name").val();
        var breed = $("#breed").val();
        var age = $("#age").val();
        var weight = $("#weight").val();
        var activity = $("#activity").val();
        $("#display-form-info").append(name + " is a " + breed + ", " + age + " years old, " + weight + " lbs, and loves to " + activity + "<br/>");
        $("#name").val("");
        $("#breed").val("");
        $("#age").val("");
        $("#weight").val("");
        $("#activity").val("");
    });

    $("#light").click(function() {
        event.preventDefault();

        $("body").css("background-color", "white");
        $("body").css("color", "lightgray");
        $("header").css("background-color", "whitesmoke");
        $("header").css("color", "lightgray");
        $("p").css("color", "lightgray");
    });

    $("#dark").click(function() {
        event.preventDefault();

        $("body").css("background-color", "lightgray");
        $("body").css("color", "whitesmoke");
        $("p").css("color", "whitesmoke");
        $("header").css("background-color", "darkgray");
        $("header").css("color", "whitesmoke");
    });

    $("#large").click(function() {
        event.preventDefault();
        var currentFontSizeL = parseInt($("#large").css('font-size'));
        currentFontSizeL += 4
        setFontL = currentFontSizeL + "px";
        $("#large").css("font-size", setFontL);
    });
    $("#small").click(function() {
        event.preventDefault();
        var currentFontSizeS = parseInt($("#small").css('font-size'));
        currentFontSizeS -= 4
        setFontS = currentFontSizeS + "px";
        $("#small").css("font-size", setFontS);

    });

    $("#revert").click(function() {
        event.preventDefault();

        $("header").css("background-color", "lightgray");
        $("header").css("color", "whitesmoke");
        $("body").css("background-color", "whitesmoke");
        $("body").css("color", "lightgray");
        $("p").css("color", "lightgray");
        $("#large").css("font-size", "14px");
        $("#small").css("font-size", "14px");
    });
});