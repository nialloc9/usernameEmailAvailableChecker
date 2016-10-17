<?php
try {
    $db = new PDO('mysql:host=localhost;dbname=mydbname;charset=utf8','root','');

}
catch(Exception $e){
    echo "Could not connect.";
}
?>
