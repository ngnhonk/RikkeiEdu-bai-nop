drop schema temp_db;
create schema temp_db;
use temp_db;

create table Products (
	id int primary key auto_increment,
    name  varchar(255) not null,
    category varchar(255),
    price decimal(10,2) not null
);	

create table customers(
	id int primary key auto_increment,
    name varchar(100) not null,
    email varchar(100) not null,
    phone varchar(15),
    createdat datetime
);

create table orders(
	id int primary key auto_increment,
    customer_id int,
    foreign key (customer_id) references customers(id),
    orderdate datetime,
    totalamount decimal(10,2) not null
);

create table OrderDetails(
	id int auto_increment primary key,
    order_id int,
    foreign key (order_id) references orders(id),
    product_id int,
    foreign key (product_id) references products(id),
    quantity int not null,
    unitprice decimal(10,2) not null
);

INSERT INTO Products (name, category, price) VALUES
('Laptop', 'Electronics', 1200.00),
('Phone', 'Electronics', 800.00),
('Shoes', 'Fashion', 50.00),
('Watch', 'Accessories', 150.00),
('Bag', 'Fashion', 120.00);

INSERT INTO customers (name, email, phone, createdat) VALUES
('Nguyen Thi Mai', 'nguyenmai@example.com', '0912345678', '2024-11-01 10:00:00'),
('Tran Minh Quang', 'tranquang@example.com', '0923456789', '2024-11-02 12:30:00'),
('Le Thanh Son', 'lethanson@example.com', '0934567890', '2024-11-03 14:00:00'),
('Phan Thi Lan', 'phanlan@example.com', '0945678901', '2024-11-04 16:15:00'),
('Hoang Minh Tuan', 'hoangtuan@example.com', '0956789012', '2024-11-05 09:45:00');

INSERT INTO orders (customer_id, orderdate, totalamount) VALUES
(1, '2024-11-06 08:30:00', 1350.00),
(2, '2024-11-07 10:45:00', 950.00),
(3, '2024-11-08 11:00:00', 500.00),
(4, '2024-11-09 15:20:00', 270.00),
(5, '2024-11-10 17:05:00', 240.00);

INSERT INTO OrderDetails (order_id, product_id, quantity, unitprice) VALUES
(1, 1, 1, 1200.00),
(1, 2, 1, 150.00),
(2, 2, 1, 800.00),
(2, 3, 2, 50.00),
(3, 4, 1, 150.00),
(4, 5, 2, 60.00),
(5, 5, 1, 120.00);

