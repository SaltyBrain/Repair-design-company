<?php
  $footer_userName = $_POST['footer_userName'];
  $footer_userPhone = $_POST['footer_userPhone'];
  $footer_userQuestion = $_POST['footer_userQuestion'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$footer_mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $footer_mail->SMTPDebug = 0;  
    $footer_mail->CharSet = 'UTF-8';                    // Enable verbose debug output
    $footer_mail->isSMTP();                                            // Send using SMTP
    $footer_mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $footer_mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $footer_mail->Username   = 'RepairDesignRostov12@gmail.com';                     // SMTP username
    $footer_mail->Password   = 'SecretCode12';                               // SMTP password
    $footer_mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $footer_mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $footer_mail->setFrom('RepairDesignRostov12@gmail.com', 'Pavel');
    $footer_mail->addAddress('ppd35@mail.ru', 'Joe User');     // Add a recipient


    // Content
    $footer_mail->isHTML(true);                                  // Set email format to HTML
    $footer_mail->Subject = 'New Request from webpage';
    $footer_mail->Body    = "Имя: ${footer_userName}, Телефон: ${footer_userPhone}, Вопрос: ${footer_userQuestion}";

    if ($footer_mail->send()) {
      header('Location: thanks.html');
    } else {
      echo "Message could not be sent. Mailer Error: {$footer_mail->ErrorInfo}";
    }

  
}    catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$footer_mail->ErrorInfo}";
}
?>
