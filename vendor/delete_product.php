<?php
include '../db_connection.php';

$connection = mysqli_connect($servername, $username, $password, $dbname);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['productID']) && !empty($_POST['productID'])) {
    $productID = $_POST['productID'];

    $query = "DELETE FROM PRODUCT_T WHERE productID = ?";
    
    $stmt = mysqli_prepare($connection, $query);
    mysqli_stmt_bind_param($stmt, "i", $productID);

    mysqli_stmt_execute($stmt);

    if(mysqli_stmt_affected_rows($stmt) > 0) {
        echo '<script>alert("Product deleted successfully."); window.location.href = "shop.html";</script>';
    } else {
        echo '<script>alert("Error: Unable to delete product.")';
    }

    mysqli_stmt_close($stmt);
} else {
    echo "Error: Invalid request.";
}

mysqli_close($connection);
?>
