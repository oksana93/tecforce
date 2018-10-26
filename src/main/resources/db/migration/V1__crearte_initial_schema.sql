create table city (
  id    uuid primary key,
  name  varchar is not null,
  woeid int is not null,
  code  int is not null
);

create table forecast (
  id   uuid primary key,
  date date    not null,
  max_wind int,
  min_wind int,
  max_temp int,
  min_temp int,
  city_id uuid not null,
  foreign key (city_id) references city(id)
);

