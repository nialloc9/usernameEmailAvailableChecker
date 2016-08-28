<?php
require_once '../utilites/connect.utilites.php';
require_once '../controller/user.controller.php';

//TASK CHECK.. user input
if(isset($_GET['task']) && $_GET['task'] == 'checkExists'){

    //ASSIGN VARIABLES
    $userInput = $_GET['userInput'];
    $databaseColName = $_GET['databaseColName'];

    $check = User::checkIfAvailable($userInput, $databaseColName, $db);

    //DATA CHECK
    if($check == false){
        echo 1;
    }else{
        echo 0;
    }
}

?>