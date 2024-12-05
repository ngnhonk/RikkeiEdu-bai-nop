create schema temp_db;
use temp_db;

create table products(
	productid int primary key auto_increment,
    productname varchar(255),
    category varchar(255),
    price decimal(10,2)
);

create table sales(
	saleid int primary key auto_increment,
    saledate date,
    customerid int,
    totalamount decimal(10,2)
);

create table salesdetails(
	saledetailid int primary key auto_increment,
    saleid int,
    foreign key (saleid) references sales(saleid),
    productid int,
    foreign key (productid) references products(productid),
    quantity int,
    unitprice decimal(10,2)
);

INSERT INTO products (productname, category, price) VALUES
('Laptop', 'Electronics', 1500.00),
('Smartphone', 'Electronics', 800.00),
('Headphones', 'Accessories', 150.00),
('Desk Chair', 'Furniture', 200.00),
('Coffee Maker', 'Appliances', 50.00);

INSERT INTO sales (saledate, customerid, totalamount) VALUES
('2024-11-01', 1, 1700.00),
('2024-11-02', 2, 1000.00),
('2024-11-03', 3, 500.00),
('2024-11-04', 4, 1200.00),
('2024-11-05', 5, 250.00);

INSERT INTO salesdetails (saleid, productid, quantity, unitprice) VALUES
(1, 1, 1, 1500.00),
(1, 2, 1, 800.00),
(2, 3, 2, 75.00),
(3, 4, 1, 200.00),
(4, 5, 1, 50.00);

select
