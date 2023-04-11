$("#hide").click(function() {
    $("div.hide-show").hide();
});
$("#show").click(function() {
    $("div.hide-show").show();
});


$("#fade").click(function() {
    $("div.fade").fadeOut(1500);
    $("#fade2").fadeOut(3000);
});


$("#slide-down").click(function() {
    $("#slide2").slideDown();
});
$("#slide-up").click(function() {
    $("#slide2").slideUp();
});