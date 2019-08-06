<?php
if($_POST["message"]) {
    mail("faris.kazmi2@yahoo.ca", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
