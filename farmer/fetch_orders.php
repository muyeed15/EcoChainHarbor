<?php
include '../db_connection.php';

$connection = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM ORDER_T";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo "<table class='table table-bordered mt-3'>";
    echo "<thead><tr><th>Order Date</th><th>Status</th><th>Order ID</th><th>Customer ID</th></tr></thead><tbody>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr><td>" . $row["date"] . "</td><td>" . $row["status"] . "</td><td>" . $row["orderID"] . "</td><td>" . $row["customerID"] . "</td></tr>";
    }
    echo "</tbody></table>";
} else {
    echo "0 results";
}

mysqli_close($conn);
?>
