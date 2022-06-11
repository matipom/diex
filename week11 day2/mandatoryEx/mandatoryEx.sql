--Exercise 1: DVD Rental

--Get a list of all film languages.

select * from language;

--Get a list of all films joined with their languages – select the following details :
--film title, description, and language name. Try your query with different joins:
select title, description, name from film
inner join language on film.language_id = language.language_id

--Get all films, even if they don’t have languages.
select title, description, name from film
left join language on film.language_id = language.language_id

--Get all languages, even if there are no films in those languages.
select title, description, name, language.language_id from film
right join language on film.language_id = language.language_id

--Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY NOT NULL,
film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE,
language_id INTEGER REFERENCES language(language_id),
title VARCHAR (100) NOT NULL,
score INTEGER NOT NULL,
review_text VARCHAR NOT NULL,
last_update DATE NOT NULL
);
--
--Create a new table called new_film with the following columns :
--id, name. Add some new films to the table.
insert into new_film(name)
values
('Titanic'),
('The lord of the rings'),
('Star wars'),
('Harry Potter'),
('Godzilla')



insert into customer_review (film_id, language_id, title, score, review_text, last_update)
values
(1, 1, 'review1', 9, 'Lovely movie', '12-02-2020'),
(2, 1, 'review2', 10, 'Great movie', '20-08-2020'),
(5, 1, 'review3', 3, 'Boring movie', '12-10-2019')


select * from new_film 
inner join customer_review
on new_film.id = customer_review.film_id

delete from new_film
where name ilike 'titanic'
--disappeard the movies and also the review because the delete cascade

--Exercise 2 : DVD Rental
--Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 2
WHERE
    film_id = 3
RETURNING 
	film_id, 
	title,
	language_id
--Which foreign keys (references) are defined for the customer table?
--How does this affect the way in which we INSERT into the customer table?
--dont know how to check

--We created a new table called customer_review.
--Drop this table. Is this an easy step, or does it need extra checking?

drop table if exists customer_review

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

select * from rental 
where return_date is NULL

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select rental.return_date, film.replacement_cost, film.film_id, title from film 
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on inventory.inventory_id = rental.inventory_id
where return_date is null order by replacement_cost desc limit 30

--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

select description, title, actor.first_name, actor.last_name from film 
inner join film_actor
on film.film_id = film_actor.film_id
inner join actor
on film_actor.actor_id = actor.actor_id
where actor.first_name = 'Penelope' and actor.last_name = 'Monroe' and film.description ilike '%wrestler%'

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.

select category.name, film.title, length, rating from film
inner join film_category
on film.film_id = film_category.film_id
inner join category
on film_category.category_id = category.category_id
where length < 60 and rating = 'R' and name = 'Documentary'

--The 3rd film : A film that his friend Matthew Mahan rented. 
--He paid over $4.00 for the rental, 
--and he returned it between the 28th of July and the 1st of August, 2005.
select distinct title, return_date, first_name, last_name, amount from customer
inner join payment
on customer.customer_id = payment.customer_id
inner join rental
on customer.customer_id = rental.customer_id
inner join inventory
on inventory.inventory_id = rental.inventory_id
inner join film
on film.film_id = inventory.film_id
where 
amount > 4 and customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
and return_date between '2005-07-28' and '2005-08-01'

--dont know why appear the same movies many times if i put distinct
-- same movie but different customer always cause the from is on customer and not movie
--The 4th film : His friend Matthew Mahan watched this film, as well. 
--It had the word “boat” in the title or description, and 
--it looked like it was a very expensive DVD to replace.

select first_name, last_name, title, description, replacement_cost from customer
inner join rental
on customer.customer_id = rental.customer_id
inner join inventory
on inventory.inventory_id = rental.inventory_id
inner join film
on inventory.film_id = film.film_id
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
and (film.title ilike '%boat%' or film.description ilike '%boat%') 
order by replacement_cost desc limit 1
