<?php
include '../db_connection.php';

$connection = mysqli_connect($servername, $username, $password, $dbname);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['cropID']) && !empty($_POST['cropID'])) {
    $cropID = $_POST['cropID'];

    $query = "DELETE FROM CROP_T WHERE cropID = ?";
    
    $stmt = mysqli_prepare($connection, $query);
    mysqli_stmt_bind_param($stmt, "i", $cropID);

    mysqli_stmt_execute($stmt);

    if(mysqli_stmt_affected_rows($stmt) > 0) {
        echo '<script>alert("Crop deleted successfully."); window.location.href = "shop.html";</script>';
    } else {
        echo '<script>alert("Error: Unable to delete crop.")';
    }

    mysqli_stmt_close($stmt);
} else {
    echo "Error: Invalid request.";
}

mysqli_close($connection);
?>
