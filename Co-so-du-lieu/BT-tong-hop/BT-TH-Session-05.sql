CREATE SCHEMA temp_db;
USE temp_db;

create table Customers(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    contactName VARCHAR(100),
    country VARCHAR(100)
);

CREATE TABLE orders(
	id INT PRIMARY KEY AUTO_INCREMENT,
    Customer_ID int,
    FOREIGN KEY (Customer_ID) REFERENCES customers(id),
    OrderDate DATE,
    TotalAmount Decimal(10,2)
);

CREATE TABLE Products(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    Price DECIMAL(10,2)
);

CREATE TABLE orderdetails(
	id INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT,
    FOREIGN KEY (orderid) REFERENCES orders(id),
    ProductID INT,
    FOREIGN KEY (ProductID) REFERENCES products(id),
    Quantity INT,
    UnitPrice DECIMAL(10,2)
);

CREATE VIEW view_order_details AS
SELECT * FROM orderdetails;

CREATE VIEW view_order AS 
SELECT * FROM orders;

CREATE INDEX index_order
ON orders (OrderDate);

CREATE INDEX index_d_order
ON OrderDetails (Quantity);

SHOW INDEX from orderdetails;