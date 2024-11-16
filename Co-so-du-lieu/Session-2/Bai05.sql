create schema temp_db;
use temp_db;

create table Products(
	productID int auto_increment primary key,
    productName varchar(100),
    category varchar(50),
    price decimal(10,2),
    stockQuantity int
);

create table Orders(
	OrderID int auto_increment primary key,
    OrderDate date,
    ProductID int,
    foreign key (ProductID) references Products(productID),
    Quantity int,
    TotalAmount decimal(10,2)
);

insert into products(productName, category, price, stockQuantity)
values
	('quan jean', 'may mac', 1050.50, 10),
    ('ao phong', 'may mac', 1100, 12),
    ('banh que', 'banh keo', 400, 10),
    ('keo deo', 'banh keo', 300.50, 20),
    ('dep to ong', 'giay dep', 850.50, 10);
    
insert into orders(OrderDate, productid, quantity, totalamount)
values
	('2024-10-10', 1, 10, 10500),
    ('2024-10-11', 2, 3, 3300),
    ('2024-10-12', 3, 10, 4000);
    
    
update products
set price = 1000
where productid = 2;

update orders
join products on orders.productid = products.productid
set totalamount = products.price * orders.quantity;