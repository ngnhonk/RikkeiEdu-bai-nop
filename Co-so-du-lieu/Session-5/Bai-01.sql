create schema temp_db;
use temp_db;

create table customers(
	customerid int auto_increment primary key,
    customername varchar(100) not null,
    phone varchar(15),
    email varchar(50),
    createdat datetime
);

create table products(
	productid int auto_increment primary key,
    productname varchar(255) not null,
    category varchar(255),
    price decimal(10,2) not null
);

create table orders(
	orderid int auto_increment primary key,
    customerid int,
    foreign key (customerid) references customers(customerid),
    totalamount decimal(10,2) not null
);

create table orderdetails(
	orderdetailid int auto_increment primary key,
    orderid int,
    productid int,
    foreign key (orderid) references orders(orderid),
    foreign key (productid) references products(productid),
    quantity int not null,
    unitprice decimal(10,2) not null
);

create index email_index
on customers (email);
