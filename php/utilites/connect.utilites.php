<?php
try {
    $db = new PDO('mysql:host=localhost;dbname=goal;charset=utf8','root','');

}
catch(Exception $e){
    echo "Could not connect.";
}
?>