<?php
	#contact form
    $to="dp@ark101.com, rleslie@americandreamslc.com.do";
    $date = date('Y/m/d');
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $subject="Submission from ' $senderEmail ' on $date -- from 'Travel and learn' ";
    $phone = $_POST["phone"];

    #message to appear in email sent
    $message="Name: $sender\nEmail: $senderEmail\n$message  \nPhone Number: $phone \nFrom: www.americandreamslc.com/travel";

    #mail function, sends the email to specified link
    mail($to, $subject, $message);

    #put user back to the home page
    header("Location: index.html");
?>