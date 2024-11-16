drop schema temp_db;
create schema temp_db;
use temp_db;

create table sales(
	saleid int primary key auto_increment,
    saledate date,
    customerid int,
    totalamount decimal(10,2)
);

create table products(
	productid int primary key auto_increment,
    productname varchar(255),
    category varchar(255),
    price decimal(10,2)
);

create table saledetails(
	saledetailid int primary key auto_increment,
    saleid int,
    foreign key (saleid) references sales(saleid),
    productid int,
    foreign key (productid) references products(productid),
    quantity int,
    unitprice decimal(10,2)
);

INSERT INTO products (productname, category, price)
VALUES 
('Laptop', 'Electronics', 1200.00),
('Smartphone', 'Electronics', 800.00),
('Tablet', 'Electronics', 500.00),
('Headphones', 'Accessories', 150.00),
('Keyboard', 'Accessories', 50.00),
('Mouse', 'Accessories', 30.00),
('Chair', 'Furniture', 200.00),
('Desk', 'Furniture', 300.00),
('Monitor', 'Electronics', 250.00),
('Printer', 'Office', 100.00);

INSERT INTO sales (saledate, customerid, totalamount)
VALUES 
('2024-11-01', 1, 2000.00),
('2024-11-02', 2, 1250.00),
('2024-11-03', 3, 900.00),
('2024-11-04', 1, 600.00),
('2024-11-05', 4, 300.00),
('2024-11-06', 2, 1200.00),
('2024-11-07', 3, 400.00),
('2024-11-08', 4, 750.00),
('2024-11-09', 5, 500.00),
('2024-11-10', 1, 800.00);

INSERT INTO saledetails (saleid, productid, quantity, unitprice)
VALUES 
(1, 1, 1, 1200.00),
(1, 2, 1, 800.00),
(2, 3, 2, 500.00),
(2, 9, 1, 250.00),
(3, 4, 3, 150.00),
(4, 7, 2, 200.00),
(5, 5, 6, 50.00),
(6, 1, 1, 1200.00),
(7, 10, 5, 100.00),
(8, 6, 10, 30.00);

select
	products.category as `Danh muc`,
	saledetails.quantity as `Tong SL`,
    saledetails.unitprice as `Price`,
    (saledetails.quantity * saledetails.unitprice) as `Tong`,
	date_format(sales.saledate, '%y-%m') as `Thang` 
from saledetails
join sales on saledetails.saleid = sales.saleid
join products on saledetails.productid = products.productid
group by products.category;

select
	products.category as `Danh muc`,
    (saledetails.quantity * saledetails.unitprice) as `Tong`
from saledetails
join sales on saledetails.saleid = sales.saleid
join products on saledetails.productid = products.productid
group by products.category
limit 1;