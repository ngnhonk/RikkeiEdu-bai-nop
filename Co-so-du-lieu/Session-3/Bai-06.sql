drop schema temp_db;
create schema temp_db;
use temp_db;

create table suppliers(
	id int primary key auto_increment,
    name varchar(100) not null,
    contactEmail varchar(100) not null
);

create table products(
	id int primary key auto_increment,
    name varchar(100) not null,
    supplierID int,
    foreign key (supplierID) references suppliers(id),
    price decimal(10,2) not null,
    stock int not null
);

insert into suppliers(name, contactEmail)
values
	('Bitis', 'bisits@gmail.com'),
    ('Adidas', 'adidas@gmail.com'),
    ('Sony', 'sony@gmail.com');
    
insert into products(name, supplierid, price, stock)
values 
	('Giay the theo', 1, 100.2, 10),
    ('Giay chay bo', 1, 105, 5),
    ('Quan the thao', 2, 70, 10),
    ('Ao the theo', 1, 80, 15),
    ('Television', 3, 1000, 5);
    
-- Các câu lệnh update
update products
set price = 45.99
where id = 2;

update suppliers
set name = 'Converse'
where id = 1;

-- Các câu lệnh delete 
delete from suppliers
where id = 3;

delete from products
where id = 4;

-- Các câu lệnh truy vấn
select
	products.name as `Ten SP`,
    suppliers.name as `Nha Cung Cap`,
	products.price as `Gia SP`,
	products.stock as `Ton Kho`
from products
join suppliers on products.supplierid = suppliers.id;
