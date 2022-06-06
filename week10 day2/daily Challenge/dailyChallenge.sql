--1
select count(first_name) as actors from actor
--2
insert into actor(actor_id, first_name, last_name, last_update)
values(5, 'ASD', 'ASDAS',NULL)
--i think i cant because the fields are not-null
select * from actor