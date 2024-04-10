<style>
    /* Additional CSS styles */
    .fruite-item {
        width: 300px; /* Adjust the width as needed */
        margin: 10px;
    }

    .fruite-img img {
        max-width: 100%; /* Ensure the image doesn't overflow the container */
        height: auto;
        /* Add max-height to limit the height of the image */
        max-height: 300px; /* Adjust the max height as needed */
    }

    .fruite-item .text-white {
        font-size: 12px; /* Adjust font size */
        padding: 5px;
    }

    .fruite-item .p-4 {
        font-size: 14px; /* Adjust font size */
    }
</style>

<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$database = "ecochainharbor";


// Create connection
$connection = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Query to select all products
$query = "SELECT * FROM PRODUCT_T";
$result = mysqli_query($connection, $query);

// Check if there are any products
if(mysqli_num_rows($result) > 0) {
    // Output products
// Output products
while($row = mysqli_fetch_assoc($result)) {
    ?>
    <div class="rounded position-relative fruite-item">
        <div class="fruite-img">
            <img src="img/<?php echo $row['name']; ?>.jpg" class="img-fluid w-100 rounded-top" alt="<?php echo $row['name']; ?>">
        </div>
        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4><?php echo $row['name']; ?></h4>
            <p>Status: <?php echo $row['status']; ?></p>
            <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold mb-0">৳<?php echo $row['price']; ?></p>
                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
            </div>
        </div>
    </div>
    <?php

}
} else {
    // If no products found, display a message
    echo "No products found.";
}

// Close the database connection
mysqli_close($connection);
?>
