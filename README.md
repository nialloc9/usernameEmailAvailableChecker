# usernameEmailAvailableChecker
This is designed to check if a username or email is already in use but also is able to check if any user input matches data in a database like a first name or account number etc. It is designed with reuse-ability at it's core.


# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the public/js/validate/check.validate.js file in your project.
3. Give your input a suitable id.
4. Give your message area a suitable id.
5. Give your button a suitable id.
6. Create 2 suitable classes for your messages that will appear. Positive and negative.
7. Change the information in php/utilities/connect.utilities.php to access your database.
5. Call the following function.

        checkIfAvailable(userInput, button, infobox, successClass, errorClass, successMessage, errorMessage, databaseColName);
        

# Function Parameters

userInput: The id of the inout the user will type in.

button: The button to disable if data already exists.

infobox: An infobox for a message to appear. 

successClass: The class name with the style for your message if the data is not in use.

errorClass: The class name with the style for your message if the data it is in use.

successMessage: The message you want to render if the data is not in use.

errorMessage: The message you want to render if the data is in use.

databaseColName: Name of the column you want to check in the database. e.g username

# Example

         $(document).ready(function(){

            //CHECK USERNAME
            $('#checkUsername').bind("keyup change", function(e) {
                checkIfAvailable('checkUsername', 'checkUsernameButton', 'checkUsernameInfo', 'success-message', 'error-message', 'Username Available', 'Username Unavailable', 'username');
            });

            //CHECK EMAIL
            $('#checkEmail').bind("keyup change", function(e) {
                checkIfAvailable('checkEmail', 'checkEmailButton', 'checkEmailInfo', 'success-message', 'error-message', 'Email Available', 'Email Unavailable', 'email');
            });
        });
        
        <input type="text" id="checkUsername"/><p id="checkUsernameInfo"></p><br>
        <input type="button" id="checkUsernameButton" value="Username Button" disabled/>
        

# NB
Use '' if you don't want to use any of the parameters for the function. e.g use '' instead of the button id if you have no button to disable.

Remove console.log messages if you wish to use on production sites.
