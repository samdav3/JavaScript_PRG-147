AOS.init();

$(document).ready(function() {

    $("#submit").click(function() {
        event.preventDefault();
        var name = $("#name").val();
        var a = "Sam"
        var b = "Katie"


        switch (name) {
            case a:
                $("#success").append(name + ", thank you for RSVPing! We are so excited to celebrate with you!");
                $("#name").val("");
                $("form").hide();
                break;
            case b:
                $("#success").append(name + ", thank you for RSVPing! We are so excited to celebrate with you!");
                $("#name").val("");
                $("form").hide();
                break;
            default:
                $("#success").append("I'm sorry, we weren't able to accept that name, please try again!");
                $("#name").val("");
                $("#name").css("background-color", "rgba(115, 80, 92, 1)");
                break;
        }

    });


});