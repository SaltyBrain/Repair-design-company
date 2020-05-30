<?php
  $control_userName = $_POST['control_userName'];
  $control_userPhone = $_POST['control_userPhone'];


// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$control_mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $control_mail->SMTPDebug = 0;  
    $control_mail->CharSet = 'UTF-8';                    // Enable verbose debug output
    $control_mail->isSMTP();                                            // Send using SMTP
    $control_mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $control_mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $control_mail->Username   = 'RepairDesignRostov12@gmail.com';                     // SMTP username
    $control_mail->Password   = 'SecretCode12';                               // SMTP password
    $control_mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $control_mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $control_mail->setFrom('RepairDesignRostov12@gmail.com', 'Pavel');
    $control_mail->addAddress('ppd35@mail.ru', 'Joe User');     // Add a recipient


    // Content
    $control_mail->isHTML(true);                                  // Set email format to HTML
    $control_mail->Subject = 'New Request from webpage';
    $control_mail->Body    = "Имя: ${control_userName}, Телефон: ${control_userPhone}";

    if ($control_mail->send()) {
    } else {
      echo "Message could not be sent. Mailer Error: {$control_mail->ErrorInfo}";
    }

  
}    catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$control_mail->ErrorInfo}";
}
?>
