var emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
var passwordCheck = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

var userName = $("#userName");
var email = $("#email");
var password = $("#password");
var confirmPassword = $("#confirmPassword");

var loginEmail = $("#loginEmail");
var loginPassword = $("#loginPassword");

$("#userName").after('<div></div>');
$("#email").after('<div></div>');
$("#password").after('<div></div>');
$("#confirmPassword").after('<div></div>');

$("#loginEmail").after('<div></div>');
$("#loginPassword").after('<div></div>');

var user = userName.next();
var em = email.next();
var pw = password.next();
var pw2 = confirmPassword.next();

var lem = loginEmail.next();
var lpw = loginPassword.next();

var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;

var check10 = 0;
var check11 = 0;


userName.on('keyup' ,function(){
    check1 = 0;
    $(this).css("border-color", "red");
    if(userName.val().length == 0){
        user.text("*Please enter your name!");
    }
    else{
        check1 = 1;
        $(this).css("border-color", "black");
        user.text("");
    }
});

email.on('keyup' ,function() {
    check2 = 0;
    $(this).css("border-color", "red");
    if(email.val().length == 0){
        em.text("*Please enter your email!");
    }
    else if (!emailCheck.test(email.val())) {
        em.text("*Your email address is invalid!");
    } else {
        check2 = 1;
        $(this).css("border-color", "black");
        em.text("");
    }
});

password.on('keyup' ,function() {
    check3 = 0;
    $(this).css("border-color", "red");
    if(password.val().length == 0){
        pw.text("*Please enter your password!");
    }
    else if (!passwordCheck.test(password.val())) {
        pw.text("*Your password is invalid!");
    } else {
        check3 = 1;
        $(this).css("border-color", "black");
        pw.text("");
    }
});

confirmPassword.on('keyup' ,function() {
    check4 = 0;
    $(this).css("border-color", "red");
    if(confirmPassword.val().length == 0){
        pw2.text("*Please enter your re-password!");
    }
    else if (password.val() == confirmPassword.val()) {
        check4 = 1;
        $(this).css("border-color", "black");
        pw2.text("");
    } else {
        pw2.text("*Password does not match!");
    }
});

loginEmail.on('keyup' ,function() {
    if(loginEmail.val().length == 0){
        $(this).css("border-color", "red");
        lem.text("*Please enter your email!");
    }
    else if (!emailCheck.test(loginEmail.val())) {
        $(this).css("border-color", "red");
        lem.text("*Your email address is invalid!");
    }
    else{
        $(this).css("border-color", "black");
        lem.text("");
    }
    if (email.val() == loginEmail.val()) {
        check10 = 1;
    } else {
        check10 = 0;
    }
});

loginPassword.on('keyup' ,function() {
    if(loginPassword.val().length == 0){
        $(this).css("border-color", "red");
        lpw.text("*Please enter your password!");
    }
    else{
        $(this).css("border-color", "black");
    }
    if (password.val() == loginPassword.val()) {
        check11 = 1;
    } else {
        check11 = 0;
    }
});


$("#signupSubmit").click(function(){
    if(userName.val().length == 0){
        userName.css("border-color", "red");
        user.text("*Please enter your name!");
    }
    if(email.val().length == 0){
        email.css("border-color", "red");
        em.text("*Please enter your email!");
    }
    if(password.val().length == 0){
        password.css("border-color", "red");
        pw.text("*Please enter your password!");
    }
    if(confirmPassword.val().length == 0){
        confirmPassword.css("border-color", "red");
        pw2.text("*Please enter your re-password!");
    }
    if(check1 == 1&&check2 == 1&&check3 == 1&&check4 == 1){
        $("#signup").hide();
        $("#complete").show();
    }
});

$("#loginSubmit").click(function(){
    if(loginEmail.val().length == 0){
        loginEmail.css("border-color", "red");
        lem.text("*Please enter your email!");
    }
    if(loginPassword.val().length == 0){
        loginPassword.css("border-color", "red");
        lpw.text("*Please enter your password!");
    }

    if(check10 == 1&&check11 == 1){
        $("#signup").hide();
        $("#login").hide();
        $("#loginComplete").show();
    }
    else{
        $("#check").text("Wrong");
        $("#check").css("color", "red");
    }
});
