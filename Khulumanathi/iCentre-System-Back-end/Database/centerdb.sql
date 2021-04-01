-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2019 at 01:03 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `centerdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL,
  `admin_name` varchar(30) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `cat_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `username`, `password`, `cat_id`) VALUES
(1, 'moses', 'admin', 'Admin', 1),
(2, 'guwela', 'admin12', 'Admin21', 2),
(3, 'moses', '12admin', '21Admin', 3);

-- --------------------------------------------------------

--
-- Table structure for table `anonymous`
--

CREATE TABLE `anonymous` (
  `id_anom` int(3) NOT NULL,
  `message` text NOT NULL,
  `id` int(1) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `anonymous`
--

INSERT INTO `anonymous` (`id_anom`, `message`, `id`, `date_time`) VALUES
(114, ' olki', 1, '0000-00-00 00:00:00'),
(115, ' pobbh', 3, '0000-00-00 00:00:00'),
(116, 'adefgh', 3, '0000-00-00 00:00:00'),
(117, 'kvgcv', 1, '0000-00-00 00:00:00'),
(119, ' blah', 3, '0000-00-00 00:00:00'),
(120, 'hal', 3, '0000-00-00 00:00:00'),
(121, ' awewg45ey', 2, '0000-00-00 00:00:00'),
(122, ' dfghjkl;\'', 1, '0000-00-00 00:00:00'),
(123, ' jlzhcknzxl', 1, '0000-00-00 00:00:00'),
(124, 'we suggestion that in terms of access card at the gate, we could use biometric access instead', 3, '2019-10-07 10:24:06'),
(125, 'we suggestion that in terms of access card at the gate, we could use biometric access instead', 3, '2019-10-09 13:22:56'),
(126, 'we suggestion that in terms of access card at the gate, we could use biometric access instead', 3, '2019-10-09 13:25:16'),
(127, 'we suggestion that in terms of access card at the gate, we could use biometric access instead', 3, '2019-10-09 13:27:40'),
(128, 'we suggestion that in terms of access card at the gate, we could use biometric access instead', 3, '2019-10-09 13:30:29');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(1) NOT NULL,
  `name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'compliment'),
(2, 'complain'),
(3, 'suggestion');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(4) NOT NULL,
  `anony_reply` text NOT NULL,
  `recognized_reply` text NOT NULL,
  `category_id` int(1) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `anony_reply`, `recognized_reply`, `category_id`, `date_time`) VALUES
(1, 'pending request', '', 3, '2019-10-10 09:22:01'),
(2, 'pending request', '', 3, '2019-10-10 09:32:26'),
(3, 'pending request', 'moses', 3, '2019-10-10 09:37:12'),
(4, 'pending request', '', 3, '2019-10-10 09:38:15'),
(5, '', 'pending request', 3, '2019-10-10 09:39:51');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `admin_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`, `admin_id`) VALUES
('admin', 'Admin', 1),
('admin12', 'admin21', 2),
('12admin', '21admin', 3);

-- --------------------------------------------------------

--
-- Table structure for table `recognized`
--

CREATE TABLE `recognized` (
  `rec_id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `contact` int(10) NOT NULL,
  `email` varchar(25) NOT NULL,
  `message` varchar(500) NOT NULL,
  `cat_id` int(1) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recognized`
--

INSERT INTO `recognized` (`rec_id`, `name`, `surname`, `contact`, `email`, `message`, `cat_id`, `date_time`) VALUES
(35, 'Michelle', 'Ramela', 720775619, 'mitchellefetty@gmail.com', 'We dont have enough buses from sosha to arcadia', 2, '2019-10-03 09:54:16'),
(36, 'Michelle', 'Ramela', 720775619, 'mitchellefetty@gmail.com', 'we suggestion that in teams of access card at the gate, we could use biometric access instead', 3, '2019-10-03 09:58:23'),
(37, 'Michelle', 'Ramela', 720775619, 'mitchellefetty@gmail.com', 'We like the idea that library is 24/7', 1, '2019-10-03 10:01:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `FOREIGN` (`cat_id`);

--
-- Indexes for table `anonymous`
--
ALTER TABLE `anonymous`
  ADD PRIMARY KEY (`id_anom`),
  ADD KEY `FOREIGN` (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `FOREIGN` (`category_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD KEY `FOREIGN` (`admin_id`);

--
-- Indexes for table `recognized`
--
ALTER TABLE `recognized`
  ADD PRIMARY KEY (`rec_id`),
  ADD KEY `FOREIGN` (`cat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anonymous`
--
ALTER TABLE `anonymous`
  MODIFY `id_anom` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `recognized`
--
ALTER TABLE `recognized`
  MODIFY `rec_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`);

--
-- Constraints for table `anonymous`
--
ALTER TABLE `anonymous`
  ADD CONSTRAINT `anonymous_ibfk_1` FOREIGN KEY (`id`) REFERENCES `category` (`id`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`);

--
-- Constraints for table `recognized`
--
ALTER TABLE `recognized`
  ADD CONSTRAINT `recognized_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
