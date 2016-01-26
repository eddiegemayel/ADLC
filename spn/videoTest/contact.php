<?php
    $to="eddiegem16@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $phone = $_POST["phone"];

    $message="Name: $sender\nEmail: $senderEmail\n$message  \nPhone Number: $phone ";

    mail($to, $subject, $message);

    header("Location: index.html");

?>