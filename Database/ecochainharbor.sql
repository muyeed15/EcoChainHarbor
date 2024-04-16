-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 11:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecochainharbor`
--

-- --------------------------------------------------------

--
-- Table structure for table `crop_t`
--

CREATE TABLE `crop_t` (
  `cropID` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crop_t`
--

INSERT INTO `crop_t` (`cropID`, `name`, `type`) VALUES
(1, 'Rice', 'Grain'),
(2, 'Mango', 'Fruit'),
(3, 'Watermelon', 'Fruit'),
(4, 'Potato', 'Vegetable'),
(5, 'Corn', 'Grain'),
(6, 'Tomato', 'Vegetable'),
(7, 'Apple', 'Fruit'),
(8, 'Onion', 'Vegetable'),
(9, 'Lettuce', 'Vegetable');

-- --------------------------------------------------------

--
-- Table structure for table `customer_t`
--

CREATE TABLE `customer_t` (
  `customerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_t`
--

INSERT INTO `customer_t` (`customerID`) VALUES
(3),
(6),
(9),
(10);

-- --------------------------------------------------------

--
-- Table structure for table `farmer_t`
--

CREATE TABLE `farmer_t` (
  `farmerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `farmer_t`
--

INSERT INTO `farmer_t` (`farmerID`) VALUES
(1),
(5),
(7);

-- --------------------------------------------------------

--
-- Table structure for table `orderline_t`
--

CREATE TABLE `orderline_t` (
  `orderID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderline_t`
--

INSERT INTO `orderline_t` (`orderID`, `productID`, `quantity`) VALUES
(1, 1, 10),
(1, 4, 2),
(2, 2, 1),
(3, 3, 3),
(4, 1, 6),
(4, 4, 8),
(5, 2, 2),
(5, 3, 5),
(6, 1, 4),
(6, 4, 7),
(7, 7, 3),
(7, 8, 5),
(8, 8, 10),
(8, 9, 7),
(9, 9, 4);

-- --------------------------------------------------------

--
-- Table structure for table `order_t`
--

CREATE TABLE `order_t` (
  `orderID` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `customerID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_t`
--

INSERT INTO `order_t` (`orderID`, `date`, `status`, `customerID`) VALUES
(1, '2024-03-15', 'Pending', 3),
(2, '2024-03-16', 'Delivered', 6),
(3, '2024-03-14', 'Pending', 9),
(4, '2024-03-13', 'Delivered', 10),
(5, '2024-03-17', 'Pending', 10),
(6, '2024-03-18', 'Delivered', 3),
(7, '2024-03-18', 'Delivered', 6),
(8, '2024-03-18', 'Pending', 10),
(9, '2024-03-18', 'Pending', 9);

-- --------------------------------------------------------

--
-- Table structure for table `production_t`
--

CREATE TABLE `production_t` (
  `productionID` int(11) NOT NULL,
  `productionDate` varchar(255) DEFAULT NULL,
  `season` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `farmerID` int(11) DEFAULT NULL,
  `cropID` int(11) DEFAULT NULL,
  `warehouseID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `production_t`
--

INSERT INTO `production_t` (`productionID`, `productionDate`, `season`, `location`, `quantity`, `farmerID`, `cropID`, `warehouseID`) VALUES
(1, '2024-03-10', 'Autumn', 'Dhaka', 200, 1, 1, 1),
(2, '2024-03-11', 'Summer', 'Khulna', 150, 5, 2, 2),
(3, '2024-03-12', 'Summer', 'Khulna', 100, 5, 7, 3),
(4, '2024-03-13', 'Winter', 'Rangpur', 180, 7, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `product_t`
--

CREATE TABLE `product_t` (
  `productID` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `expiryDate` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_t`
--

INSERT INTO `product_t` (`productID`, `name`, `price`, `quantity`, `expiryDate`, `status`) VALUES
(1, 'Rice', 150, 100, '2024-12-31', 'In stock'),
(2, 'Mango', 650, 50, '2024-03-31', 'Out of stock'),
(3, 'Watermelon', 300, 30, '2024-04-30', 'In stock'),
(4, 'Potato', 45, 80, '2024-06-30', 'In stock'),
(5, 'Corn', 200, 50, '2024-12-31', 'In stock'),
(6, 'Tomato', 130, 100, '2024-06-30', 'In stock'),
(7, 'Apple', 135, 80, '2024-09-30', 'In stock'),
(8, 'Onion', 130, 120, '2024-08-31', 'In stock'),
(9, 'Lettuce', 200, 90, '2024-04-30', 'In stock'),
(10, 'Ginger', 90, 100, '2024-12-31', 'In stock'),
(11, 'Orange', 350, 50, '2024-03-31', 'Out of stock'),
(12, 'Banana', 130, 120, '2024-08-31', 'In stock');

-- --------------------------------------------------------

--
-- Table structure for table `shipment_t`
--

CREATE TABLE `shipment_t` (
  `shippingID` int(11) NOT NULL,
  `mode` varchar(255) DEFAULT NULL,
  `cost` decimal(10,0) DEFAULT NULL,
  `vendorID` int(11) DEFAULT NULL,
  `productID` int(11) DEFAULT NULL,
  `warehouseID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shipment_t`
--

INSERT INTO `shipment_t` (`shippingID`, `mode`, `cost`, `vendorID`, `productID`, `warehouseID`) VALUES
(1, 'By Truck', 200, 2, 1, 1),
(2, 'By Launch', 150, 4, 2, 2),
(3, 'By Launch', 100, 8, 3, 3),
(4, 'By Truck', 120, 8, 4, 4),
(5, 'By Launch', 180, 8, 5, 3),
(6, 'By Truck', 180, 8, 6, 4),
(7, 'By Launch', 160, 8, 7, 1),
(8, 'By Truck', 270, 8, 8, 2),
(9, 'By Truck', 300, 8, 9, 4);

-- --------------------------------------------------------

--
-- Table structure for table `usercontact_t`
--

CREATE TABLE `usercontact_t` (
  `userID` int(11) NOT NULL,
  `contact` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usercontact_t`
--

INSERT INTO `usercontact_t` (`userID`, `contact`) VALUES
(1, '01712345678'),
(2, '01812345678'),
(2, '01812345679'),
(3, '01912345678'),
(4, '01512345678'),
(5, '01612345678'),
(6, '01312345678'),
(7, '01812345677'),
(7, '01812345678'),
(7, '01812345679'),
(8, '01912345679'),
(9, '01712345670'),
(10, '01812345671');

-- --------------------------------------------------------

--
-- Table structure for table `userlocation_t`
--

CREATE TABLE `userlocation_t` (
  `userID` int(11) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userlocation_t`
--

INSERT INTO `userlocation_t` (`userID`, `location`) VALUES
(1, 'Dhaka'),
(2, 'Chittagong'),
(3, 'Sylhet'),
(4, 'Bogura'),
(4, 'Rajshahi'),
(5, 'Khulna'),
(6, 'Barishal'),
(7, 'Rangpur'),
(8, 'Comilla'),
(9, 'Dhaka'),
(10, 'Chittagong');

-- --------------------------------------------------------

--
-- Table structure for table `user_t`
--

CREATE TABLE `user_t` (
  `userID` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password_s` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_t`
--

INSERT INTO `user_t` (`userID`, `name`, `email`, `password_s`, `type`) VALUES
(1, 'Md. Abdul', 'abdul@gmail.com', 'abdul123', 'Farmer'),
(2, 'Mita Khatun', 'mita@yahoo.com', 'mita456', 'Vendor'),
(3, 'Rahim Mia', 'rahim@outlook.com', 'rahim789', 'Customer'),
(4, 'Saleh Ahmed', 'saleh@proton.com', 'saleh111', 'Vendor'),
(5, 'Amir Hossain', 'amir@hotmail.com', 'amir222', 'Farmer'),
(6, 'Jamila Begum', 'jamil@aol.com', 'jamil333', 'Customer'),
(7, 'Karim Uddin', 'karim@icloud.com', 'karim444', 'Farmer'),
(8, 'Sumiya Akhtar', 'sumiya@mail.com', 'sumiya555', 'Vendor'),
(9, 'Fatima Begum', 'fatima@gmail.com', 'fatima777', 'Customer'),
(10, 'Ahmed Khan', 'ahmed@hotmail.com', 'ahmed888', 'Customer');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_t`
--

CREATE TABLE `vendor_t` (
  `vendorID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor_t`
--

INSERT INTO `vendor_t` (`vendorID`) VALUES
(2),
(4),
(8);

-- --------------------------------------------------------

--
-- Table structure for table `warehouse_t`
--

CREATE TABLE `warehouse_t` (
  `warehouseID` int(11) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `warehouse_t`
--

INSERT INTO `warehouse_t` (`warehouseID`, `location`, `status`) VALUES
(1, 'Dhaka', 'Active'),
(2, 'Chittagong', 'Active'),
(3, 'Sylhet', 'Active'),
(4, 'Rajshahi', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crop_t`
--
ALTER TABLE `crop_t`
  ADD PRIMARY KEY (`cropID`);

--
-- Indexes for table `customer_t`
--
ALTER TABLE `customer_t`
  ADD PRIMARY KEY (`customerID`);

--
-- Indexes for table `farmer_t`
--
ALTER TABLE `farmer_t`
  ADD PRIMARY KEY (`farmerID`);

--
-- Indexes for table `orderline_t`
--
ALTER TABLE `orderline_t`
  ADD PRIMARY KEY (`orderID`,`productID`),
  ADD KEY `fk_orderline_productid` (`productID`);

--
-- Indexes for table `order_t`
--
ALTER TABLE `order_t`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `fk_order_customerid` (`customerID`);

--
-- Indexes for table `production_t`
--
ALTER TABLE `production_t`
  ADD PRIMARY KEY (`productionID`),
  ADD KEY `fk_production_farmerid` (`farmerID`),
  ADD KEY `fk_production_cropid` (`cropID`),
  ADD KEY `fk_production_warehouseid` (`warehouseID`);

--
-- Indexes for table `product_t`
--
ALTER TABLE `product_t`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `shipment_t`
--
ALTER TABLE `shipment_t`
  ADD PRIMARY KEY (`shippingID`),
  ADD KEY `fk_shipment_vendorid` (`vendorID`),
  ADD KEY `fk_shipment_productid` (`productID`),
  ADD KEY `fk_shipment_warehouseid` (`warehouseID`);

--
-- Indexes for table `usercontact_t`
--
ALTER TABLE `usercontact_t`
  ADD PRIMARY KEY (`userID`,`contact`);

--
-- Indexes for table `userlocation_t`
--
ALTER TABLE `userlocation_t`
  ADD PRIMARY KEY (`userID`,`location`);

--
-- Indexes for table `user_t`
--
ALTER TABLE `user_t`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `vendor_t`
--
ALTER TABLE `vendor_t`
  ADD PRIMARY KEY (`vendorID`);

--
-- Indexes for table `warehouse_t`
--
ALTER TABLE `warehouse_t`
  ADD PRIMARY KEY (`warehouseID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_t`
--
ALTER TABLE `customer_t`
  ADD CONSTRAINT `fk_customer_userid` FOREIGN KEY (`customerID`) REFERENCES `user_t` (`userID`);

--
-- Constraints for table `farmer_t`
--
ALTER TABLE `farmer_t`
  ADD CONSTRAINT `fk_farmer_userid` FOREIGN KEY (`farmerID`) REFERENCES `user_t` (`userID`);

--
-- Constraints for table `orderline_t`
--
ALTER TABLE `orderline_t`
  ADD CONSTRAINT `fk_orderline_orderid` FOREIGN KEY (`orderID`) REFERENCES `order_t` (`orderID`),
  ADD CONSTRAINT `fk_orderline_productid` FOREIGN KEY (`productID`) REFERENCES `product_t` (`productID`);

--
-- Constraints for table `order_t`
--
ALTER TABLE `order_t`
  ADD CONSTRAINT `fk_order_customerid` FOREIGN KEY (`customerID`) REFERENCES `customer_t` (`customerID`);

--
-- Constraints for table `production_t`
--
ALTER TABLE `production_t`
  ADD CONSTRAINT `fk_production_cropid` FOREIGN KEY (`cropID`) REFERENCES `crop_t` (`cropID`),
  ADD CONSTRAINT `fk_production_farmerid` FOREIGN KEY (`farmerID`) REFERENCES `farmer_t` (`farmerID`),
  ADD CONSTRAINT `fk_production_warehouseid` FOREIGN KEY (`warehouseID`) REFERENCES `warehouse_t` (`warehouseID`);

--
-- Constraints for table `shipment_t`
--
ALTER TABLE `shipment_t`
  ADD CONSTRAINT `fk_shipment_productid` FOREIGN KEY (`productID`) REFERENCES `product_t` (`productID`),
  ADD CONSTRAINT `fk_shipment_vendorid` FOREIGN KEY (`vendorID`) REFERENCES `vendor_t` (`vendorID`),
  ADD CONSTRAINT `fk_shipment_warehouseid` FOREIGN KEY (`warehouseID`) REFERENCES `warehouse_t` (`warehouseID`);

--
-- Constraints for table `usercontact_t`
--
ALTER TABLE `usercontact_t`
  ADD CONSTRAINT `fk_usercontact_userid` FOREIGN KEY (`userID`) REFERENCES `user_t` (`userID`);

--
-- Constraints for table `userlocation_t`
--
ALTER TABLE `userlocation_t`
  ADD CONSTRAINT `fk_userlocation_userid` FOREIGN KEY (`userID`) REFERENCES `user_t` (`userID`);

--
-- Constraints for table `vendor_t`
--
ALTER TABLE `vendor_t`
  ADD CONSTRAINT `fk_vendor_userid` FOREIGN KEY (`vendorID`) REFERENCES `user_t` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
