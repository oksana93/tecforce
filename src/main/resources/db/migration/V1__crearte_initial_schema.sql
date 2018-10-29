create table city (
  id    uuid primary key,
  name  varchar not null,
  woeid int     not null,
  code  int     not null
);

create table forecast (
  id           uuid primary key,
  image_url    varchar,
  date         date not null,
  day          varchar,
  max_wind     int,
  min_wind     int,
  current_wind int,
  max_temp     int,
  min_temp     int,
  current_temp int,
  city_id      uuid not null,
  text         varchar,
  foreign key (city_id) references city (id)
);

