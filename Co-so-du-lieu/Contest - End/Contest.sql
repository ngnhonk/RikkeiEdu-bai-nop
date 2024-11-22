use shopee_fake;
-- ------------------------------------ EXERCISE 2 ---------------------------------------
alter table order_details
add foreign key (productid) references products(productid),
add foreign key (orderid) references orders(orderid);

alter table orders
add foreign key (userid) references users(userid),
add foreign key (storeid) references stores(storeid);

alter table stores
add foreign key (userid) references users(userid);

alter table carts
add foreign key (userid) references users(userid),
add foreign key (productid) references products(productid);

alter table reviews
add foreign key (userid) references users(userid),
add foreign key (productid) references products(productid);

alter table images
add foreign key (productid) references products(productid);

-- ------------------------------------ EXERCISE 3 ---------------------------------------
-- Liệt kê tất cả các thông tin về sản phẩm (products).
select * from products;

-- Tìm tất cả các đơn hàng (orders) có tổng giá trị (totalPrice) lớn hơn 500,000.
select * from orders
where totalPrice > 500000;

-- Liệt kê tên và địa chỉ của tất cả các cửa hàng (stores).
select storeName as `Ten`, addressStore as `Dia chi`
from stores;

-- Tìm tất cả người dùng (users) có địa chỉ email kết thúc bằng '@gmail.com'.
select * from users
where email like '%@gmail.com';

-- Hiển thị tất cả các đánh giá (reviews) với mức đánh giá (rate) bằng 5.
select * from reviews
where rate = 5;

-- Liệt kê tất cả các sản phẩm có số lượng (quantity) dưới 10.
select * from products
where quantity < 10;

-- Tìm tất cả các sản phẩm thuộc danh mục categoryId = 1.
select * from categories
where categoryid = 1;

-- Đếm số lượng người dùng (users) có trong hệ thống.
select count(*) as `Tong SL Users` from users;

-- Tính tổng giá trị của tất cả các đơn hàng (orders).
select sum(totalPrice) as `Tong GT` from orders;

-- Tìm sản phẩm có giá cao nhất (price).
select * from products
where price = (
	select max(price) from products
);

-- Liệt kê tất cả các cửa hàng đang hoạt động (statusStore = 1).
select * from stores
where statusStore = 1;

-- Đếm số lượng sản phẩm theo từng danh mục (categories).
select categoryid as `ID`, count(categoryname) from categories
group by categoryid;

-- Tìm tất cả các sản phẩm mà chưa từng có đánh giá.
select * from products
where productid not in (
    select productid from reviews
);

-- Hiển thị tổng số lượng hàng đã bán (quantityOrder) của từng sản phẩm.
select orderid as `ID`, sum(quantityOrder) as `Tong Order` from order_details
group by orderid;

-- Tìm các người dùng (users) chưa đặt bất kỳ đơn hàng nào.
select * from users
where userid not in (
	select userid from orders
);

-- Hiển thị tên cửa hàng và tổng số đơn hàng được thực hiện tại từng cửa hàng.
select stores.storename as `Ten Cua Hang`, count(orderid) as `Tong don`
from stores
join orders on orders.storeid = stores.storeid
group by orders.storeid;

-- Hiển thị thông tin của sản phẩm, kèm số lượng hình ảnh liên quan.
select products.productname as `Ten SP`, count(images.imageid) as `Tong SL Anh`
from products
join images on images.productid = products.productid
group by images.productid;

-- Hiển thị các sản phẩm kèm số lượng đánh giá và đánh giá trung bình.
select p.productname as `Ten SP`, count(r.reviewid) as `SL Danh Gia`, (sum(r.rate) / count(r.reviewid)) as `Danh Gia TB`
from products as p
join reviews as r on r.productid = p.productid;

-- Tìm người dùng có số lượng đánh giá nhiều nhất.
select u.username as `Ten Nguoi Dung`, count(r.reviewid) as `So Luot Review`
from reviews as r
join users as u on u.userid = r.userid
group by r.userid;

-- Hiển thị top 3 sản phẩm bán chạy nhất (dựa trên số lượng đã bán).
select * from products
order by quantitySold desc
limit 3;

-- Tìm sản phẩm bán chạy nhất tại cửa hàng có storeId = 'S001'.
select * from products
where storeid = 'S001'
order by quantitySold desc
limit 1;

-- Hiển thị danh sách tất cả các sản phẩm có giá trị tồn kho lớn hơn 1 triệu (giá * số lượng).
select * from products
where price*(quantity-quantitysold) > 1000000;

-- Tìm cửa hàng có tổng doanh thu cao nhất.
select * from products
order by (quantitySold * price) desc
limit 1;

-- Hiển thị danh sách người dùng và tổng số tiền họ đã chi tiêu.
select u.username as `Ten Nguoi Dung`, sum(o.totalPrice) as `Tong Chi Tieu`
from orders as o
join users as u on o.userid = u.userid
group by o.userid;

-- Tìm đơn hàng có tổng giá trị cao nhất và liệt kê thông tin chi tiết.
select * from order_details as od
join orders as o on o.orderid = od.orderid
where od.orderid = (
	select orderid from orders
	where totalPrice = (
		select max(totalPrice) from orders
	)
);

-- Tính số lượng sản phẩm trung bình được bán ra trong mỗi đơn hàng.
select * from order_details;

select (sum(quantityOrder) / count(orderid)) as `Trung Binh SP`
from order_details;

-- Hiển thị tên sản phẩm và số lần sản phẩm đó được thêm vào giỏ hàng.
select p.productname as `Ten SP`, count(od.productid) as `So Lan` from order_details as od 
join products as p on od.productid = p.productid
group by od.productid;

-- Tìm tất cả các sản phẩm đã bán nhưng không còn tồn kho trong kho hàng.
select * from products
where quantitySold > 0 and statusProduct = 0;

-- Tìm các đơn hàng được thực hiện bởi người dùng có email là duong@gmail.com'.
select * from orders
where userid = (
	select userid from users 
	where email = 'duong@gmail.com'
);

-- Hiển thị danh sách các cửa hàng kèm theo tổng số lượng sản phẩm mà họ sở hữu.
select storeid as `ID CH`, count(productid) as `Tong SP` from products
group by storeId;

-- ------------------------------------ EXERCISE 4 ---------------------------------------
-- View hiển thị tên sản phẩm (productName) và giá (price) từ bảng products với giá trị giá (price) lớn hơn 500,000 có tên là expensive_products
create view expensive_products as 
select productname as `Ten SP`, price as `Gia` from products
where price > 500000;

-- Truy vấn dữ liệu từ view vừa tạo expensive_products
select * from expensive_products;

-- xóa view expensive_products
drop view expensive_products;

-- Làm thế nào để cập nhật giá trị của view? Ví dụ, cập nhật giá (price) thành 600,000 cho sản phẩm có tên Product A trong view expensive_products.
update expensive_products 
set price = 600000 
where expensive_productsproductname = 'Product A';

--  Tạo một view hiển thị tên sản phẩm (productName), tên danh mục (categoryName) bằng cách kết hợp bảng products và categories
create view Products_Categories as
select p.productName as `Ten SP`, c.categoryName as `Ten Danh Muc`
from products as p
join categories as c on p.categoryid = c.categoryid;

-- ------------------------------------ EXERCISE 5 ---------------------------------------
-- Làm thế nào để tạo một index trên cột productName của bảng products?
create index productName_index 
on products(productname);

-- Hiển thị danh sách các index trong cơ sở dữ liệu?
show indexes from products;

-- Trình bày cách xóa index idx_productName đã tạo trước đó
drop index productName_index
on products;

-- Tạo một procedure tên getProductByPrice để lấy danh sách sản phẩm với giá lớn hơn một giá trị đầu vào (priceInput)?
delimiter //
create procedure getProductByPrice(IN priceInput int)
begin 
	select * from products
    where price > priceInput;
end //
delimiter ;

-- Làm thế nào để gọi procedure getProductByPrice với đầu vào là 500000?
call getProductByPrice(500000);

-- Tạo một procedure getOrderDetails trả về thông tin chi tiết đơn hàng với đầu vào là orderId?
delimiter //
create procedure getOrderDetails(IN in_orderId int)
begin 
	select * from order_details
    where orderid = in_orderid;
end //
delimiter ;

-- Làm thế nào để xóa procedure getOrderDetails?
drop procedure getOrderDetails;

-- Tạo một procedure tên addNewProduct để thêm mới một sản phẩm vào bảng products
-- Các tham số gồm productName, price, description, và quantity.
delimiter //
create procedure addNewProduct(IN inProductName varchar(255), inPrice int, inDescription varchar(255), inQuantity int)
begin 
	INSERT INTO `shopee_fake`.`products` (`productName`, `price`, `description`, `quantity`) VALUES (inProductName, inPrice, inDescription, inQuantity);
end //
delimiter ;

-- Tạo một procedure tên deleteProductById để xóa sản phẩm khỏi bảng products dựa trên tham số productId.
delimiter //
create procedure deleteProductById (IN deleteID int)
begin 
	delete from products
    where productId = deleteID;
end //
delimiter ;

-- Tạo một procedure tên searchProductByName để tìm kiếm sản phẩm theo tên (tìm kiếm gần đúng) từ bảng products.
delimiter //
create procedure searchProductByName (IN searchName varchar(255))
begin 
	select * from products
    where productname like searchName;
end //
delimiter ;

-- Tạo một procedure tên filterProductsByPriceRange để lấy danh sách sản phẩm có giá trong khoảng từ minPrice đến maxPrice.
delimiter //
create procedure filterProductsByPriceRange (IN minPrice int, maxPrice int)
begin 
	select * from products
    where price >= minPrice 
		and price <= maxPrice;
end //
delimiter ;

-- Tạo một procedure tên paginateProducts để phân trang danh sách sản phẩm, với hai tham số pageNumber và pageSize.
delimiter //
create procedure paginateProducts(in pageNumber int, pageSize int)
begin
    declare pageOffset int;
    set pageOffset = pageSize * (pageNumber - 1);
    select * from products
    limit pageSize offset pageOffset;
end //
delimiter ;
