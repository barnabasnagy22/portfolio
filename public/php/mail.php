<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $message2 = htmlspecialchars($_POST['message']);
    
    if (!$email) {
        die("Érvénytelen email cím!");
    }
    
    $to = "barnabas.nagy22@protonmail.com";
    $subject = "Kapcsolat";
    $message = "Név: $name\nEmail: $email\nTelefonszám: $phone\n\nÜzenet: $message2";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Sikeresen elküldve!";
    } else {
        echo "Hiba történt az e-mail küldése közben.";
    }
} else {
    echo "Érvénytelen kérés!";
}
?>