-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2019 at 09:48 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `declaredb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adminUsername` varchar(120) NOT NULL,
  `adminPassword` varchar(120) NOT NULL,
  `adminName` varchar(120) NOT NULL,
  `adminID` int(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adminUsername`, `adminPassword`, `adminName`, `adminID`) VALUES
('Nhlax', 'Vovo001', 'Nhlahla Mathye', 55754);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `serialNum` varchar(255) NOT NULL,
  `userID` int(20) NOT NULL,
  `itemDescription` varchar(200) NOT NULL,
  `itemType` int(2) NOT NULL,
  `itemBrand` varchar(120) NOT NULL,
  `dateDeclared` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`serialNum`, `userID`, `itemDescription`, `itemType`, `itemBrand`, `dateDeclared`) VALUES
('678sersssd', 216740440, 'Lenovo', 0, 'laptop', '2019-02-24'),
('678ssd', 216740477, 'Lenovo', 0, 'laptop', '2019-02-24'),
('qwewqeqwe', 215024504, 'asdasd', 1, 'dell', '2019-10-02');

-- --------------------------------------------------------

--
-- Table structure for table `item_cat`
--

CREATE TABLE `item_cat` (
  `itemType` varchar(2) NOT NULL,
  `itemName` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_cat`
--

INSERT INTO `item_cat` (`itemType`, `itemName`) VALUES
('1', 'Laptop'),
('2', 'Fridge');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(20) NOT NULL,
  `firstName` varchar(120) NOT NULL,
  `lastName` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `firstName`, `lastName`) VALUES
(214189143, 'Paul', 'Mahomed');

-- --------------------------------------------------------

--
-- Table structure for table `user_declare`
--

CREATE TABLE `user_declare` (
  `declareID` int(10) NOT NULL,
  `adminID` int(20) NOT NULL,
  `userID` int(20) NOT NULL,
  `itemID` varchar(120) NOT NULL,
  `dateDeclared` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminID`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`serialNum`);

--
-- Indexes for table `item_cat`
--
ALTER TABLE `item_cat`
  ADD PRIMARY KEY (`itemType`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `user_declare`
--
ALTER TABLE `user_declare`
  ADD PRIMARY KEY (`declareID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_declare`
--
ALTER TABLE `user_declare`
  MODIFY `declareID` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
