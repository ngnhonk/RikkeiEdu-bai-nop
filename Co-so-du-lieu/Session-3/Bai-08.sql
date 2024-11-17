create schema temp_db;
use temp_db;

create table invoices(
	id int primary key auto_increment,
    invoicedate datetime default current_timestamp,
    customername varchar(100) not null
);

create table products(
	id int primary key auto_increment,
    productname varchar(100) not null,
    price decimal(10,2) not null
);

create table invoicedetails(
	id int primary key auto_increment,
    invoiceid int not null,
    foreign key (invoiceid) references invoices(id),
    productid int not null,
    foreign key (productid) references products(id),
    quantity int not null,
    price decimal(10,2) not null
);

insert into invoices (customername) 
values
	('Nguyen Van A'),
	('Tran Thi B'),
	('Le Hoang C'),
	('Pham Van D'),
	('Hoang Minh E');

insert into products (productname, price)
values
	('Laptop', 15000.00),
	('Smartphone', 8000.00),
	('Tablet', 5000.00),
	('Monitor', 3000.00),
	('Keyboard', 500.00);
    
insert into invoicedetails (invoiceid, productid, quantity, price)
values
	(1, 1, 2, 15000.00),
	(1, 2, 1, 8000.00),
	(2, 3, 1, 5000.00),
	(3, 4, 2, 3000.00),
	(4, 5, 5, 500.00);

update products
set price = 55.00
where id = 1;

update invoicedetails
set quantity = 10
where id = 2;

delete from products
where id = 3;

delete from invoicedetails
where id = 1;

select invoiceid as `Ma don`, (quantity * price) as `Tong GT don`
from invoicedetails;

select * from invoicedetails
order by invoiceid;

