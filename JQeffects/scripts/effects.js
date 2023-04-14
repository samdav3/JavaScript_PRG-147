$(document).ready(function() {
    // moving div
    $("#up").click(function() {
        $("div.moving-box").animate({
            marginTop: "-=10px"
        });
    });
    $("#down").click(function() {
        $("div.moving-box").animate({
            marginTop: "+=10px"
        });
    });
    $("#right").click(function() {
        $("div.moving-box").animate({
            marginLeft: "+=10px"
        });
    });
    $("#left").click(function() {
        $("div.moving-box").animate({
            marginLeft: "-=10px"
        });
    });
    // stop
    $("#slide").click(function() {
        $("#hide-slide").slideDown(4000);
    });
    $("#stop").click(function() {
        $("#hide-slide").stop();
    });
    // callback
    $("#hide-call").click(function() {
        $("#callback").hide("slow", function() {
            alert("The footer is now hidden");
        });
    });
    // chaining
    $("#btn-chain").click(function() {
        $("#chaining").css("color", "cadetblue").css("background-color", "whitesmoke").slideUp(2000).slideDown(2000);
    });
});