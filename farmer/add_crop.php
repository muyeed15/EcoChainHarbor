<?php
include '../db_connection.php';

$connection = mysqli_connect($servername, $username, $password, $dbname);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

$query_create_table = "CREATE TABLE IF NOT EXISTS CROP_T (
    cropID INT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255)
)";

if (!mysqli_query($connection, $query_create_table)) {
    echo "Error creating table: " . mysqli_error($connection);
}

if(isset($_POST['cropID'], $_POST['cropName'], $_POST['cropType'])) {
    $cropID = $_POST['cropID'];
    $cropName = $_POST['cropName'];
    $cropType = $_POST['cropType'];

    $check_query = "SELECT cropID FROM CROP_T WHERE cropID = ?";
    $check_stmt = mysqli_prepare($connection, $check_query);
    mysqli_stmt_bind_param($check_stmt, "i", $cropID);
    mysqli_stmt_execute($check_stmt);
    mysqli_stmt_store_result($check_stmt);

    if(mysqli_stmt_num_rows($check_stmt) > 0) {
        echo '<script>alert("Error: Crop with the same cropID already exists.");</script>';
    } else {
        $query = "INSERT INTO CROP_T (cropID, name, type) VALUES (?, ?, ?)";
        $stmt = mysqli_prepare($connection, $query);
        mysqli_stmt_bind_param($stmt, "iss", $cropID, $cropName, $cropType);
        mysqli_stmt_execute($stmt);

        if(mysqli_stmt_affected_rows($stmt) > 0) {
            echo '<script>alert("Crop added successfully."); window.location.href = "shop.html";</script>';
        } else {
            echo '<script>alert("Error: Unable to add crop.");</script>';
        }

        mysqli_stmt_close($stmt);
    }

    mysqli_stmt_close($check_stmt);
} else {
    echo '<script>alert("Error: Invalid request.");</script>';
}

mysqli_close($connection);
?>
