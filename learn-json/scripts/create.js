function addme() {

    var contactFname = document.getElementById('fname').value;
    var contactLname = document.getElementById('lname').value;
    var contactEmail = document.getElementById('email').value;
    var contactPhone = document.getElementById('phone').value;
    const contact = { contactFname, contactLname, contactEmail, contactPhone };
    const contactJSON = JSON.stringify(contact);
    document.getElementById('json-value').innerHTML = contactJSON;


}