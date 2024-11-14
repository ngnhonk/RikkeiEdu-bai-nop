CREATE DATABASE project_db;
use project_db;

CREATE TABLE host(
	id int PRIMARY KEY,
    host_name varchar(45),
    adress varchar(45)
);

CREATE TABLE design(
	building_id int,
    architect_id int,
    foreign key (building_id)references building(id),
    foreign key (architect_id)references architect(id),
    benefit varchar(45)
);

CREATE TABLE architect(
	id int PRIMARY KEY,
    architect_name varchar(255),
    sex tinyint(1),
    birthday date,
    place varchar(255),
    address varchar(255)
);

CREATE TABLE work(
	building_id int,
    worker_id int,
	foreign key (building_id)references building(id),
    foreign key (worker_id)references worker(id),
	date date,
    total varchar(45)
);

CREATE TABLE worker(
	id int PRIMARY KEY,
    name varchar(45),
    birthday varchar(45),
    year varchar(45),
    skill varchar(45)
);

CREATE TABLE contractor(
	id int PRIMARY KEY,
    name varchar(255),
    address varchar(255),
    contractor varchar(45)
);

CREATE TABLE building(
	id int primary key,
    name varchar(45),
    address varchar(45),
    city varchar(45),
    cost float,
    start date,
    host_id int,
    contractor_id int,
    foreign key (host_id)references project_db.host(id),
    foreign key (contractor_id)references contractor(id)
);

drop table design;