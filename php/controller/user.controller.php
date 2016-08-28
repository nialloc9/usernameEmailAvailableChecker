<?php

class User{

    //CHECK USER INPUT
    public function checkIfAvailable($userInput, $databaseColName, $db){
        $stmt = $db->prepare("SELECT * FROM users WHERE $databaseColName = :userInput");
        $stmt->bindParam(':userInput', $userInput);
        $stmt->execute();

        //ROW COUNT
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

}
?>