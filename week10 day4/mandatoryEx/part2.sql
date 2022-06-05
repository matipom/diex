--Exercise 2 : Dvdrental Database

--1
select * from public.customer
--2
select (first_name, last_name) as full_name from customer

--3
select distinct create_date from customer
--4
select * from customer order by first_name desc
--5
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc
--6
select address, phone, district from address where district = 'Texas'
--7
select * from film where film_id in(15, 150)
--8
select film_id, title, description, length, rental_rate from film where title ilike ('crabin Flash')
--9
select film_id, title, description, length, rental_rate from film where title ilike ('ca%')
--10
select * from film order by rental_rate asc limit 10
--11
select * from film order by rental_rate asc offset 10 FETCH FIRST 10 ROWS ONLY;
--12
select amount, payment_date, payment.customer_id from customer inner join payment
on customer.customer_id = payment.customer_id order by  customer.customer_id asc
--13
select title, release_year, description from film left join inventory
on inventory.film_id = film.film_id
where inventory_id is null
select * from film
--14
select city, country from city inner join country on city.country_id = country.country_id
--15
select customer.customer_id, first_name, last_name, amount, payment_date, staff_id from customer inner join payment
on customer.customer_id = payment.customer_id
order by staff_id asc
