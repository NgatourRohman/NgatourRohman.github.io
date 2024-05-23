<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email tujuan
    $to = "ngatourrohman25@gmail.com";

    // Subjek email
    $subject = "Pesan dari $name";

    // Isi email
    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";

    // Header email
    $headers = "From: $email";

    // Kirim email
    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Maaf, pesan tidak dapat dikirim.";
    }
}
