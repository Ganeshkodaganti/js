

function register() {
    var email, pass, pass_rep;

    email = document.getElementById('email').value;
    pass = document.getElementById('psw').value;
    pass_rep = document.getElementById('psw-repeat').value;

    if (pass === pass_rep) {
        console.log(email + " " + pass + " " + pass_rep);
    }
    else {
        alert("passwords didn't match!!!");
    }


}

document.querySelector('.registerbtn').onclick = function (e) {
    e.preventDefault();
    register();
}