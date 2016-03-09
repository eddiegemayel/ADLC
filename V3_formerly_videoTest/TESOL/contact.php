<?php
	#contact form 
    // $to="dp@ark101.com, eg@ark101.com";
    $to ="ewg@ark101.com" ;
    // $to  = 'dp@ark101.com' . ', '; // note the comma
    // $to .= 'eg@ark101.com';

    $date = date('Y/m/d');
    $sender = $_POST["name"];
    $senderEmail = $_POST["email"];
    $subject = "Customer Inquiry -- from 'TESOL' ";
    $phone = $_POST["phone"];
    $dropdown = $_POST["dropdown"];

    #message to appear in email sent
    $message="Name: $sender\nEmail: $senderEmail\n$message  \nPhone Number: $phone \nSelection: $dropdown \nFrom: tesol ";

    // Additional headers 
    // $headers = 'To: Davi <dp@ark101.com>, Emilio <eg@ark101.com>' . "\r\n";
    // $headers = 'To: Eddie <ewg@ark101.com>' . "\r\n";
    // $headers .= 'From: TESOL <info@americandreamslc.com>' . "\r\n";
    // $headers .= "Content-type: text/plain; charset=iso-8859-1". "\r\n";
    // $headers .= 'Cc: eg@ark101.com' . "\r\n";



    #mail function, sends the email to specified link
    // mail($to, $subject, $message);

    #test if mail doesnt send
    if(!mail($to, $subject, $message)){
        // echo "Mailer Error: " . $mail->ErrorInfo;
        echo '<h3>Message Not Sent. Please <a href="index.html">Try Again.</a></h3>';
    }else{
         #put user back to the home page
        header("Location: index.html");
    }

//     if(isset($_POST['submit']))
// {
//     /* ****Important!****
//     replace name@your-web-site.com below 
//     with an email address that belongs to 
//     the website where the script is uploaded.
//     For example, if you are uploading this script to
//     www.my-web-site.com, then an email like
//     form@my-web-site.com is good.
//     */

//     $from_add = "info@americandreamslc.com"; 

//     $to_add = "ewg@ark101.com"; //<-- put your yahoo/gmail email address here

//     $subject = "Test Subject";
//     $message = "Test Message";
    
//     $headers = "From: $from_add \r\n";
//     $headers .= "Reply-To: $from_add \r\n";
//     $headers .= "Return-Path: $from_add\r\n";
//     $headers .= "X-Mailer: PHP \r\n";
    
    
//     if(mail($to_add,$subject,$message,$headers)) 
//     {
//         $msg = "Mail sent OK";
//     } 
//     else 
//     {
//        $msg = "Error sending email!";
//     }
// }
        
?>