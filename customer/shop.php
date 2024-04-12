<style>
    .fruite-item {
        width: 300px;
        margin: 10px;
    }

    .fruite-img img {
        max-width: 100%;
        height: auto;
        max-height: 300px;
    }

    .fruite-item .text-white {
        font-size: 12px;
        padding: 5px;
    }

    .fruite-item .p-4 {
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
    echo "No products found.";
}

mysqli_close($connection);
?>
