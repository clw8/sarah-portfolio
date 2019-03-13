<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "mail@sarahhouben.com";
    $headers = "Message from: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $headers, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>
