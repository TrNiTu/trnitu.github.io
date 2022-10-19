<?
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "tturner@huskers.unl.edu"
$subject = "Portfolio Website"


$txt ="Name = ". $name . "\r\n  Email = "
    . $email . "\r\n Message =" . $message;
 
$headers = "From: " . $email "" .
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("index.html");
?>
