<?php
	#contact form
    $to="dp@ark101.com,rd@americandreamslc.com ";
    $date = date('Y/m/d');
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $subject="Form submission from $senderEmail on $date";
    $phone = $_POST["phone"];

    // $headers = "From: $sender\r\n";
	// $headers .= "Reply-To: myplace2@example.com\r\n";
	// $headers .= "Return-Path: myplace@example.com\r\n";
	// $headers .= "CC: ewg@ark101.com\r\n";date("Y/m/d")

    #message to appear in email sent
    $message="Name: $sender\nEmail: $senderEmail\n$message  \nPhone Number: $phone ";

    #mail function, sends the email to specified link
    mail($to, $subject, $message);

    #put user back to the home page
    header("Location: index.html");
?>