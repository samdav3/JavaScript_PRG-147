$(document).ready(function() {

    $("#submit").click(function() {
        event.preventDefault();
        var name = $("#name").val();
        $("#success").append(name + ", thank you for RSVPing! We are so excited to celebrate with you!");

    });
});