--Basic Select Statement
--1
SELECT first_name "First Name",  last_name "Last Name" 
	FROM employees;
--2
select distinct department_id from public.employees

--3
select * from public.employees order by first_name desc
--4
select first_name, last_name, salary, salary*.15 "PF" from public.employees
--5
select employee_id, first_name, last_name, salary from public.employees order by salary asc
--6
select sum(salary) from public.employees
--7
select max(salary), min(salary) from public.employees
--8
select avg(salary) from public.employees
--9
select count(* )from public.employees
--10
SELECT UPPER(first_name) FROM employees;
--11
SELECT SUBSTRING(first_name,1,3) FROM employees;
--12
select concat(first_name, ' ', last_name) as full_name from employees
--13
select length(concat(first_name, ' ', last_name)), concat(first_name, ' ', last_name) from employees
--14
SELECT * FROM employees WHERE  first_name !~ '[0-9]'
--15
SELECT * FROM employees limit 10

--Restricting And Sorting

--1
select first_name, last_name, salary from employees where salary between 10000 and 15000
--2
select first_name, last_name, hire_date from employees where hire_date between '1987-01-01' and '1987-12-31'
--3
select * from employees where first_name like '%c%' and first_name like '%e%'
--4
select employees.last_name, jobs.job_title, employees.salary from employees inner join jobs
on employees.job_id = jobs.job_id where job_title != 'Programmer' and job_title != 'Shipping Clerk'
and salary not in (4500,10000, 15000)
--5
select last_name from employees where length(last_name) = 6
--6
select last_name from employees where first_name like '__e%'
--7
select employees.*, jobs.job_title from employees 
left join jobs on employees.job_id = jobs.job_id
--8
select * from employees where upper(last_name) in ('KING','BLAKE','SCOTT','KING','FORD')



