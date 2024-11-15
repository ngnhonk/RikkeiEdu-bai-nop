select products.productname as `Ten SP`, orderdetails.quantity as `So luong` from orderdetails
join products on orderdetails.productid = products.productid
where orderdetails.quantity = (
	select max(orderdetails.quantity) from orderdetails
);