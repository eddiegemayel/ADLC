<?php
	#contact form
    $to="dp@ark101.com, eg@ark101.com";
    // $to="ewg@ark101.com";
    #collect todays date
    $date = date('Y/m/d');
    #collect user's name
    $sender = $_POST["name"];
    #collect user's email
    $senderEmail = $_POST["email"];
    #compose subject line 
    $subject = "Customer Inquiry from ' $senderEmail ' on $date -- 'Travel and Learn' ";
    #collect user's phone
    $phone = $_POST["phone"];
    $dropdown = $_POST["dropdown"];

    #message to appear in email sent
    $message="Name: $sender\nEmail: $senderEmail\n$message  \nPhone Number: $phone \nSelection: $dropdown \nFrom: www.americandreamslc.com/travel";

    #mail function, sends the email to specified link
    mail($to, $subject, $message);

    #put user back to the home page
    header("Location: index.html");
?>