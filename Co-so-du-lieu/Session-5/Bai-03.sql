create schema SalesDB;
use SalesDB;
create table customers(
	customerid int auto_increment primary key,
    firstname varchar(100) not null,
	lastname varchar(100) not null,
    email varchar(50)
);

create table products(
	productid int auto_increment primary key,
    productname varchar(255) not null,
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

create index orderid_index
on orderitems (orderid);