-- Exercise 1 : Items And Customers

--1
select * from items order by amount asc
--2
select * from items where amount >= 80 order by amount desc
--3
select f_name, l_name from customers order by f_name asc
--4
select l_name from customers order by l_name desc

