<style>
    .product-item {
        width: 300px;
        margin: 10px;
    }

    .product-img img {
        max-width: 100%;
        height: auto;
        max-height: 300px;
    }

    .product-item .text-white {
        font-size: 12px;
        padding: 5px;
    }

    .product-item .p-4 {
        font-size: 14px;
    }
</style>


<?php
include '../db_connection.php';

$connection = mysqli_connect($servername, $username, $password, $dbname);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

$query = "SELECT * FROM PRODUCT_T";
$result = mysqli_query($connection, $query);

if(mysqli_num_rows($result) > 0) {

while($row = mysqli_fetch_assoc($result)) {
    ?>
    <div class="rounded position-relative product-item">
        <div class="product-img">
            <img src="img/<?php echo $row['name']; ?>.jpg" class="img-fluid w-100 rounded-top" alt="<?php echo $row['name']; ?>">
        </div>
        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4><?php echo $row['name']; ?></h4>
            <p>Price: <?php echo $row['price']; ?></p>
            <p>Quantity: <?php echo $row['quantity']; ?></p>
            <p>Expiry Date: <?php echo $row['expiryDate']; ?></p>
            <p>Status: <?php echo $row['status']; ?></p>
            <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold mb-0">Product ID: <?php echo $row['productID']; ?></p>
                <form action="delete_product.php" method="post">
                    <input type="hidden" name="productID" value="<?php echo $row['productID']; ?>">
                    <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this product?');">Delete</button>
                </form>
            </div>
        </div>
    </div>
    <?php
}

} else {
    echo "No products found.";
}

mysqli_close($connection);
?>
