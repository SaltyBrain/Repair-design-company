<?php
  $userName = $_POST['userName'];
  $userEmail = $_POST['userEmail'];
  $userPhone = $_POST['userPhone'];


// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;  
    $mail->CharSet = 'UTF-8';                    // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'RepairDesignRostov12@gmail.com';                     // SMTP username
    $mail->Password   = 'SecretCode12';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('RepairDesignRostov12@gmail.com', 'Pavel');
    $mail->addAddress('ppd35@mail.ru', 'Joe User');     // Add a recipient


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New Request from webpage';
    $mail->Body    = "Имя: ${userName}, Имя: ${userPhone}, Имя: ${userEmail}";

    if ($mail->send()) {
      echo 'ok';
    } else {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

  
}    catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>