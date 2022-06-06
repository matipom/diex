insert into students (first_name, last_name, birth_date)
values ('Marc', 'Benichou', '02/11/1998'),
		('Yoan', 'Cohen', '03/12/2010'),
		('Lea', 'Benichou', '27/07/1987'),
		('Amelia', 'Dux', 	'07/04/1996'),
		('David', 'Grez', '14/06/2003'),
		('Omer', 'Simpson', '03/10/1980')
		
insert into students(first_name, last_name, birth_date)
values('Matias', 'Pomerantz','27/10/1989')
--1
select * from students
--2
select first_name, last_name from students

--3
--1
select first_name, last_name from students where id=2
--2
select first_name, last_name from students where last_name like 'Benichou' and first_name like 'Marc'
--3
select first_name, last_name from students where last_name like 'Benichou' or first_name like 'Marc'
--4
select first_name, last_name from students where first_name ilike '%a%'
--5
select first_name, last_name from students where first_name ilike 'a%'
--6
select first_name, last_name from students where first_name ilike '%a'
--7
dont know how to do it
--8
select first_name, last_name from students where id in(1,3)

--4
select * from students where birth_date >= '1/01/2000'