create table city (
  uuid id primary key,
  varchar name is not null,
  varchar woeid is not null unique,
  varchar code is not null
);

insert into city values (lower(hex(randomblob(16))), 'Samara', '2077746', '846');
insert into city values (lower(hex(randomblob(16))), 'Moscow', '2122265', '495');
insert into city values (lower(hex(randomblob(16))), 'St Petersburg', '2123260', '812');