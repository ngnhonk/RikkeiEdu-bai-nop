create schema temp_db;
use temp_db;

create table products(
	id int primary key auto_increment,
    name varchar(100) not null
);

create table regions(
	id int primary key auto_increment,
    name varchar(100) not null
);

create table sales(
	id int auto_increment primary key,
    product_id int not null,
    foreign key (product_id) references products(id),
    region_id int not null,
    foreign key (region_id) references regions(id),
    saledate date not null,
    quantity int not null,
    amount decimal(10,2) not null
);

INSERT INTO products (name) 
VALUES
    ('Product A'),
    ('Product B'),
    ('Product C'),
    ('Product D'),
    ('Product E'),
    ('Product F'),
    ('Product G'),
    ('Product H'),
    ('Product I'),
    ('Product J');

INSERT INTO regions (name)
VALUES
    ('North'),
    ('South'),
    ('East'),
    ('West'),
    ('Central');

INSERT INTO sales (product_id, region_id, saledate, quantity, amount)
VALUES
    (1, 1, '2024-01-15', 10, 500.00),
    (2, 2, '2024-01-20', 20, 1500.00),
    (3, 3, '2024-02-01', 15, 1200.00),
    (4, 4, '2024-02-10', 25, 2500.00),
    (5, 5, '2024-02-15', 18, 900.00),
    (6, 1, '2024-03-05', 12, 720.00),
    (7, 2, '2024-03-10', 30, 3000.00),
    (8, 3, '2024-03-20', 22, 1100.00),
    (9, 4, '2024-04-01', 14, 700.00),
    (10, 5, '2024-04-05', 19, 950.00);

-- Thống kê giá trị, số lượng sản phẩm theo khu vực
select
    sum(sales.amount) as `Tong gia tri`,
	sum(sales.quantity) as `Tong so luong SP`,
	regions.name as `Khu vuc`
from sales
join products on sales.product_id = products.id
join regions on sales.region_id = regions.id
group by regions.name;

-- Sản phẩm bán chạy nhất theo khu vực
select
	products.name as `Ten san pham`,
    regions.name as `Khu vuc`
from sales
join products on sales.product_id = products.id
join regions on sales.region_id = regions.id
group by regions.name

