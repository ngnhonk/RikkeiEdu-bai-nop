select orders.orderdi, orders.date, orders.totalAmount, customers.customername, customers.contactemail 
from orders 
join customers on orders.customerid = customers.id
