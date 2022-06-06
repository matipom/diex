
INSERT INTO items (item, order_id, price)
VALUES
('Table',1, 50),
 ('Computer',1 ,100),
('TV',2, 70),
('Car',2, 400),
('Chair',3, 40),
('Ball',4, 10),
('Glass',3, 8),
('Bike',3, 150),
('Bottle',4, 6)

insert into orders (order_id)
values(1),
(2),
(3),
(4)

select * from  items

select * from orders

select orders.order_id, item, price from items inner join orders on items.order_id = orders.order_id




		