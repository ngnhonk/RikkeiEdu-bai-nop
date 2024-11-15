select * from products
where price =( 
	select max(products.price) from products
);

select * from products
where price =( 
	select min(products.price) from products
);