<?php
	#contact form
    $to="eddiegem16@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $phone = $_POST["phone"];

    #message to appear in email sent
    $message="Name: $sender\nEmail: $senderEmail\n$message  \nPhone Number: $phone ";

    #mail function, sends the email to specified link
    mail($to, $subject, $message);

    #put user back to the home page
    header("Location: index.html");
?>