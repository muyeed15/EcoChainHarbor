<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecochainharbor";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$userID = $_POST['userID'];
$password = $_POST['password'];

$sql = "SELECT * FROM USER_T WHERE userID='$userID' AND password_s='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Login successful, redirect to shop.html
    header("Location: shop.html");
    exit();
} else {
    echo "Invalid User ID or password";
}

$conn->close();
?>
