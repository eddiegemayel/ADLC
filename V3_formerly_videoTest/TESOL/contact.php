<?php
	#contact form 
    $to="dp@ark101.com, eg@ark101.com";
    // $to ="ewg@ark101.com" ;
    // $to  = 'dp@ark101.com' . ', '; // note the comma
    // $to .= 'eg@ark101.com';
    
    $date = date('Y/m/d');
    $sender = $_POST["name"];
    $senderEmail = $_POST["email"];
    $subject = "Submission from ' $senderEmail ' on $date -- from 'TESOL' ";
    $phone = $_POST["phone"];
    $dropdown = $_POST["dropdown"];

    #message to appear in email sent
    $message="Name: $sender\nEmail: $senderEmail\n$message  \nPhone Number: $phone \nSelection: $dropdown \nFrom: tesol site";

    // Additional headers 
    // $headers = 'To: Davi <dp@ark101.com>, Emilio <eg@ark101.com>' . "\r\n";
    // $headers = 'To: Eddie <ewg@ark101.com>' . "\r\n";
    $headers = 'From: TESOL <info@americandreamslc.com>' . "\r\n";
    // $headers .= 'Cc: eg@ark101.com' . "\r\n";

    #mail function, sends the email to specified link
    // mail($to, $subject, $message);

    #test if mail doesnt send
    if(!mail($to, $subject, $message, $headers)){
        // echo "Mailer Error: " . $mail->ErrorInfo;
        echo '<h3>Message Not Sent. Please <a href="index.html">Try Again.</a></h3>';
    }else{
         #put user back to the home page
        // var_dump($message);
        header("Location: index.html");
    }
        
?>