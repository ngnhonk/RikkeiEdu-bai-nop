CREATE DATABASE EcommerceDB;
USE EcommerceDB;
CREATE TABLE `Users` (
	ID int PRIMARY KEY  AUTO_INCREMENT,
    `username` varchar(50) 	UNIQUE NOT NULL,
	`passwordHash` varchar(255) NOT NULL,
    `email` VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE `Products` (
	`ID` int PRIMARY KEY  AUTO_INCREMENT,
    `productName` varchar(100) 	UNIQUE NOT NULL,
    `decription` text ,
	`price` decimal(10,2) NOT NULL,
    `stock` int UNIQUE NOT NULL
);

CREATE TABLE `Cart` (
	`ID` int PRIMARY KEY AUTO_INCREMENT,
    `userID` int  UNIQUE NOT NULL,
    FOREIGN KEY (userID)REFERENCES Users(id),
    `total` int
);

CREATE TABLE `CartItems` (
	`ID` int PRIMARY KEY AUTO_INCREMENT,
    `cartID` int,
    productID int,
    FOREIGN KEY (cartID)REFERENCES Products(id),
    FOREIGN KEY (productID)REFERENCES Products(id),
    `quantity` int NOT NULL
);


