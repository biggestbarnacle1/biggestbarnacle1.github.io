<?php
if($_POST["message"]) {
    mail("faris.kazmi2@yahoo.ca", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>About - Random Link Chooser</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav><ul>
        <li><a href="https://biggestbarnacle1.github.io/">Home</a></li>
        <li><a href="about.php">About</a></li>
       
    </ul></nav>
    <h1> About </h1>
    <div class="content">
    
    <p> This page was developed as a solution towards redirecting a user to a different URL each time a link was clicked. </p>
    <p><em><u>How does this work?</u></em></p>
    <p>The links you enter are stored in a database. When a user clicks on a generated URL, we get the data of the URLs and select a random one to redirect the user towards.</p>
    <p><em><u>Is this secure?</u></em></p>
    <p>Although the links you create are shared with no one else, it is not recommended to store or link to personal information on here due to possible data breaches of the datastore we use.</p>
    <p> Any questions, comments, or concerns can be directed towards <a href="mailto:developber.accounp@gmail.com?Subject=Question/Comment/Concern%20on%20Link%20Combiner" target="_top">developber.accounp@gmail.com</a></p>
    <form method="post" action="about.php">
            <textarea name="message"></textarea>
            <input type="submit">
        </form>
    
</div>
</body>
</html>