<?php

// this php script should send a message directly to my email
$my_email = "tturner@huskers.unl.edu";
$email_title = "Portfolio Message";

if($_POST) {
    $name = "";
    $email = "";
    $message = ""; // email body

    // initialize email with a div
    $email_body = "<div>";

    // server-side verification of name (via filter_var)
    if(isset($_POST['name'])) {
        $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                            <label><b>Name:</b></label>&nbsp;<span>" . $name . "</span>
                        </div>";
    }

    // server-side verification of email (via filter_var)
    if(isset($_POST['name'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $email_body .= "<div>
                            <label><b>Email:</b></label>&nbsp;<span>" . $email . "</span>
                        </div>";
    }

    // server-side verification of message (via filter_var)
    if(isset($_POST['name'])) {
        $message = htmlspecialchars($_POST["message"], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                            <label><b>Message:</b></label>&nbsp;
                            <div>" . $email . "</div>
                        </div>";
    }

    // close the outer div
    $email_body .= "</div>";

    $headers = 'MIME-Version: 1.0' . "\r\n"
                . 'Content-type: text/html; charset=utf-8' . "\r\n"
                . 'From: ' . $email . "\r\n";

    if(mail($my_email, $email_title, $email_body, $headers)) {
        echo "<p>Thank you for your email, $name! I will get back your email soon!</p>";
    } else {
        echo "<p>Sorry, but unfortunately you email could not go through. :(";
    }
} else {
    echo '<p>Something went wrong with the email submission.';
}
?>
