create schema SalesDB;
use SalesDB;
create table customers(
	customerid int auto_increment primary key,
    firstname varchar(50) not null,
	lastname varchar(50) not null,
    email varchar(100)
);

create table products(
	productid int auto_increment primary key,
    productname varchar(100) not null,
    price decimal(10,2) not null
);

create table orders(
	orderid int auto_increment primary key,
    customerid int not null,
    orderdate date,
    foreign key (customerid) references customers(customerid),
    totalamount decimal(10,2) not null
);

create table orderitems(
	orderitemid int auto_increment primary key,
    orderid int,
    productid int,
    foreign key (orderid) references orders(orderid),
    foreign key (productid) references products(productid),
    quantity int not null,
    price decimal(10,2) not null
);

create table sales(
	saleid int primary key auto_increment,
    orderid int not null,
    foreign key (orderid) references orders(orderid),
    saledate date,
    saleamount decimal(10,2)
);

insert into customers (firstname, lastname, email) values
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Smith', 'jane.smith@example.com'),
('Alice', 'Johnson', 'alice.johnson@example.com'),
('Bob', 'Brown', 'bob.brown@example.com'),
('Charlie', 'Davis', 'charlie.davis@example.com');

insert into products (productname, price) values
('Laptop', 1500.00),
('Smartphone', 700.00),
('Tablet', 300.00),
('Headphones', 100.00),
('Monitor', 250.00);

insert into orders (customerid, orderdate, totalamount) values
(1, '2024-11-01', 1600.00),
(2, '2024-11-02', 1300.00),
(3, '2024-11-03', 750.00),
(4, '2024-11-04', 100.00),
(5, '2024-11-05', 500.00);

insert into orderitems (orderid, productid, quantity, price) values
(1, 1, 1, 1500.00),
(1, 4, 1, 100.00),
(2, 1, 1, 1500.00),
(2, 3, 2, 300.00),
(3, 2, 1, 700.00),
(4, 4, 1, 100.00),
(5, 5, 2, 250.00); 

insert into sales (orderid, saledate, saleamount) values
(1, '2024-11-06', 1600.00),
(2, '2024-11-07', 1300.00),
(3, '2024-11-08', 750.00),
(4, '2024-11-09', 100.00),
(5, '2024-11-10', 500.00);

create view CustomerOrderSummary as
select 
    customers.customerid as `Ma KH`,
    customers.lastname as `Ten KH`, 
    count(orders.orderid) as `Tong Don`,
    sum(orders.totalamount) as `Tong Chi Tieu`
from 
    customers
left join orders on customers.customerid = orders.customerid
group by 
    customers.customerid, customers.lastname;

select * from CustomerOrderSummary
where `Tong Chi Tieu` > 5000;
