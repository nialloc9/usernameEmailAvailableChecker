$(document).ready(function(){

    //CHECK USERNAME
    $('#checkUsername').bind("keyup change", function(e) {
        checkIfAvailable('checkUsername', 'checkUsernameButton', 'checkUsernameInfo', 'success-message', 'error-message', 'Username Available', 'Username Unavailable', 'username', 'php/validate/check.validate.php');
    });

    //CHECK EMAIL
    $('#checkEmail').bind("keyup change", function(e) {
        checkIfAvailable('checkEmail', 'checkEmailButton', 'checkEmailInfo', 'success-message', 'error-message', 'Email Available', 'Email Unavailable', 'email', 'php/validate/check.validate.php');
    });
});