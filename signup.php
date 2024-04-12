<?php
include 'db_connection.php';

$name = $email = $phone = $password = $confirm_password = $type = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $last_userID_query = "SELECT userID FROM USER_T ORDER BY userID DESC LIMIT 1";
    $last_userID_result = $conn->query($last_userID_query);

    if ($last_userID_result->num_rows > 0) {
        $last_userID_row = $last_userID_result->fetch_assoc();
        $last_userID = $last_userID_row["userID"];
        $userID = $last_userID + 1;
    } else {
        $userID = 1;
    }

    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST["phone"]);
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];
    $type = htmlspecialchars($_POST["type"]);

    if (empty($name) || empty($email) || empty($phone) || empty($password) || empty($confirm_password) || empty($type)) {
        echo "<script>alert('Error: Please fill in all fields.'); window.history.back();</script>";
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Error: Invalid email format.'); window.history.back();</script>";
        exit();
    }

    if (strlen($password) < 8) {
        echo "<script>alert('Error: Password must be at least 8 characters long.'); window.history.back();</script>";
        exit();
    }

    if ($password !== $confirm_password) {
        echo "<script>alert('Error: Passwords do not match.'); window.history.back();</script>";
        exit();
    }

    // $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO USER_T (userID, name, email, password_s, type) VALUES (?, ?, ?, ?, ?)";
    
    if ($stmt = mysqli_prepare($conn, $sql)) {
        mysqli_stmt_bind_param($stmt, "sssss", $userID, $name, $email, $password, $type);

        if (mysqli_stmt_execute($stmt)) {
            mysqli_stmt_close($stmt);
            mysqli_close($conn);
            header("location: login.html");
            exit();
        } else {
            echo "<script>alert('Oops! Something went wrong. Please try again later.'); window.history.back();</script>";
        }

        mysqli_stmt_close($stmt);
    }

    mysqli_close($conn);
}


?>
