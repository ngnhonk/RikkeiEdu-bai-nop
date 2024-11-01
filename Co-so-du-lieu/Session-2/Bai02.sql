USE companydb;

create table Products(
	ProductID int auto_increment primary key,
    ProductName varchar(50),
    Category varchar(50),
    Price decimal(10,2),
    StockQuantity int
);

insert into products (productname, category, price, stockquantity)
values
	('banh one', 'banh keo', '100.1', 10),
    ('keo one', 'banh keo', '120.1', 11),
    ('quan a', 'quan ao', '404', 12),
    ('quan b', 'quan ao', '222', 13);

select * from products;