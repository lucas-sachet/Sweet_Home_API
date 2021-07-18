CREATE SCHEMA `sweet_home` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
use `sweet_home`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE `userType` (
  `id` int PRIMARY KEY NOT NULL,  
  `type` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `realtyType` (
  `id` int PRIMARY KEY NOT NULL,  
  `type` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `id` int NOT NULL,  
  `name` varchar(150) NOT NULL,
  `cpf` varchar(20) DEFAULT NULL,  
  `birth` datetime NOT NULL,
  CONSTRAINT `userTypeId` FOREIGN KEY (id) REFERENCES userType(id),
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `realty` (
  `id` int PRIMARY KEY NOT NULL,   
  `name` varchar(150) NOT NULL,
  `monthlyPrice` float NOT NULL,  
  `totalPrice` float NOT NULL,
  `city` varchar(150) NOT NULL,
  `neighborhood` varchar(150) NOT NULL,
  `street` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ended_at` datetime DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `report` (
  `id` int PRIMARY KEY NOT NULL,  
  CONSTRAINT `userId` FOREIGN KEY (id) REFERENCES user(id),
  CONSTRAINT `realtyId` FOREIGN KEY (id) REFERENCES realty(id),
  `subject` varchar(40) NOT NULL,
  `message` varchar(200) DEFAULT NULL,  
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `bills` (
  `id` int PRIMARY KEY NOT NULL,   
  `electricityBill` float DEFAULT NULL,
  `gasBill` float DEFAULT NULL,
  `waterBill` float DEFAULT NULL,
  `internetBill` float DEFAULT NULL,
  `addBill` float DEFAULT NULL,
  `totalBill` float DEFAULT NULL,
  `isPaid` boolean DEFAULT false,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `due_at` datetime DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `userStatus` (
  `id` int PRIMARY KEY NOT NULL,  
  CONSTRAINT `userStatusBillId` FOREIGN KEY (id) REFERENCES bills(id),
  CONSTRAINT `userStatusUserId` FOREIGN KEY (id) REFERENCES user(id),
  CONSTRAINT `userStatusRealtyId` FOREIGN KEY (id) REFERENCES realty(id),
  `isPaid` boolean NOT NULL DEFAULT false,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `realtyStatus` (
  `id` int PRIMARY KEY NOT NULL,  
  CONSTRAINT `realtyStatusUserId` FOREIGN KEY (id) REFERENCES user(id),
  CONSTRAINT `realtyStatusId` FOREIGN KEY (id) REFERENCES realty(id),
  `isRented` boolean DEFAULT false, 
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
