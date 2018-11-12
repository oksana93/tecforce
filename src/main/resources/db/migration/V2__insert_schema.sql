CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

insert into city
values (uuid_generate_v4(), 'Samara', 2077746, 846);
insert into city
values (uuid_generate_v4(), 'Moscow', 122265, 495);
insert into city
values (uuid_generate_v4(), 'St Petersburg', 2123260, 812);