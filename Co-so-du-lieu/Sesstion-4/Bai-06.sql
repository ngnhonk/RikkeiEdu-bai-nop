create table sales(
	id int primary key auto_increment,
    saledate date not null,
	price decimal(10,2) not null
);

INSERT INTO sales (saledate, price)
VALUES
    ('2024-01-01', 150.50),
    ('2024-01-05', 200.00),
    ('2024-01-10', 300.75),
    ('2024-01-15', 250.00),
    ('2024-01-20', 175.25),
    ('2024-01-25', 400.00),
    ('2024-01-30', 325.50),
    ('2024-02-05', 500.00),
    ('2024-02-10', 450.75),
    ('2024-02-15', 600.00);

select sum(price) as `Tong doanh thu`, date_format(saledate, '%y-%m') as `Thang`
from sales
group by DATE_FORMAT(saledate, '%Y-%m');