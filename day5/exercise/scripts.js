// var formList = document.userForm;
// console.log("formList");

// var name = document.userForm.name

// var firstName = document.myForm

// var password = document.userForm.password.type;
// console.log(password);

// document.userForm.firstname.focus();

// var submitButton = document.userForm.submit;

// submitButton.addEventListener("click", function () {


//     var name = document.userForm["firstname"].value;
//     // alert("Success")
//     console.log(name);
// })

var submitButton = document.getElementById('submitBtn')
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    errorName.style.display = "none";
    errorAge.style.display = "none";

    var name = document.form1.txtName.value;
    var age = document.form1.txtAge.value;
    console.log(name);

    if (!name) {
        event.preventDefault();
        errorName.style.display = "block";
    }

    if (!age) {
        event.preventDefault();
        errorAge.style.display = "block";
    }
})