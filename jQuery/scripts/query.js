$(document).ready(function() {
    $("#paragraphs").click(function() {
        $("p.p").hide();
    });
});

$(document).ready(function() {
    $("#div2").click(function() {
        $("#div").hide();
    });
});

$(document).ready(function() {
    $("h2").click(function() {
        $("h2[target!='_blank']").hide();
    });
});