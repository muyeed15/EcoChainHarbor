<?php
include '../db_connection.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Establish database connection
    $connection = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Create PRODUCT_T table if not exists
    $query_create_table = "CREATE TABLE IF NOT EXISTS PRODUCT_T (
        productID INT PRIMARY KEY,
        name VARCHAR(255),
        price DECIMAL,
        quantity INT,
        expiryDate VARCHAR(255),
        status VARCHAR(255)
    )";

    if (!mysqli_query($connection, $query_create_table)) {
        echo "Error creating table: " . mysqli_error($connection);
    }

    // Validate and sanitize input data
    $productID = mysqli_real_escape_string($connection, $_POST['productID']);
    $productName = mysqli_real_escape_string($connection, $_POST['productName']);
    $price = mysqli_real_escape_string($connection, $_POST['price']);
    $quantity = mysqli_real_escape_string($connection, $_POST['quantity']);
    $expiryDate = mysqli_real_escape_string($connection, $_POST['expiryDate']);
    $status = mysqli_real_escape_string($connection, $_POST['status']);

    // Check if productID already exists
    $check_query = "SELECT productID FROM PRODUCT_T WHERE productID = ?";
    $check_stmt = mysqli_prepare($connection, $check_query);
    mysqli_stmt_bind_param($check_stmt, "i", $productID);
    mysqli_stmt_execute($check_stmt);
    mysqli_stmt_store_result($check_stmt);

    // If productID exists, display error message
    if (mysqli_stmt_num_rows($check_stmt) > 0) {
        echo '<script>alert("Error: Product with the same productID already exists.");</script>';
    } else {
        // Insert new product
        $query = "INSERT INTO PRODUCT_T (productID, name, price, quantity, expiryDate, status) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($connection, $query);
        mysqli_stmt_bind_param($stmt, "isdiss", $productID, $productName, $price, $quantity, $expiryDate, $status);
        mysqli_stmt_execute($stmt);

        // Check if product is successfully added
        if (mysqli_stmt_affected_rows($stmt) > 0) {
            echo '<script>alert("Product added successfully."); window.location.href = "shop.html";</script>';
        } else {
            echo '<script>alert("Error: Unable to add product.");</script>';
        }

        mysqli_stmt_close($stmt);
    }

    mysqli_stmt_close($check_stmt);
    mysqli_close($connection);
} else {
    // If form is not submitted, display error message
    echo '<script>alert("Error: Invalid request.");</script>';
}
?>
