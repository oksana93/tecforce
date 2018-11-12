CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 1 day'),
        (select to_char((select now() - interval '1 month - 1 day'), 'dy') as day),
        2,
        1,
        1,
        13,
        10,
        10,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 2 day'),
        (select to_char((select now() - interval '1 month - 2 day'), 'dy') as day),
        2,
        1,
        1,
        17,
        10,
        10,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 3 day'),
        (select to_char((select now() - interval '1 month - 3 day'), 'dy') as day),
        2,
        1,
        1,
        21,
        14,
        14,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 4 day'),
        (select to_char((select now() - interval '1 month - 4 day'), 'dy') as day),
        2,
        1,
        1,
        22,
        17,
        17,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 5 day'),
        (select to_char((select now() - interval '1 month - 5 day'), 'dy') as day),
        2,
        1,
        1,
        20,
        14,
        14,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 6 day'),
        (select to_char((select now() - interval '1 month - 6 day'), 'dy') as day),
        2,
        1,
        1,
        24,
        14,
        14,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 7 day'),
        (select to_char((select now() - interval '1 month - 7 day'), 'dy') as day),
        2,
        1,
        1,
        22,
        14,
        14,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 8 day'),
        (select to_char((select now() - interval '1 month - 8 day'), 'dy') as day),
        2,
        1,
        1,
        16,
        5,
        5,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 9 day'),
        (select to_char((select now() - interval '1 month - 9 day'), 'dy') as day),
        2,
        1,
        2,
        14,
        3,
        3,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 10 day'),
        (select to_char((select now() - interval '1 month - 10 day'), 'dy') as day),
        2,
        1,
        2,
        10,
        3,
        3,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 11 day'),
        (select to_char((select now() - interval '1 month - 11 day'), 'dy') as day),
        2,
        1,
        2,
        9,
        2,
        2,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 12 day'),
        (select to_char((select now() - interval '1 month - 12 day'), 'dy') as day),
        2,
        1,
        2,
        13,
        5,
        5,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 13 day'),
        (select to_char((select now() - interval '1 month - 13 day'), 'dy') as day),
        2,
        1,
        2,
        16,
        5,
        5,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
        (select now() - interval '1 month - 14 day'),
        (select to_char((select now() - interval '1 month - 14 day'), 'dy') as day),
        2,
        1,
        2,
        15,
        3,
        3,
        (select id from city where name = 'Samara'),
        'cloudy');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
        (select now() - interval '1 month - 15 day'),
        (select to_char((select now() - interval '1 month - 15 day'), 'dy') as day),
        2,
        1,
        2,
        16,
        6,
        6,
        (select id from city where name = 'Samara'),
        'cloudy');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
        (select now() - interval '1 month - 16 day'),
        (select to_char((select now() - interval '1 month - 16 day'), 'dy') as day),
        2,
        1,
        2,
        11,
        6,
        6,
        (select id from city where name = 'Samara'),
        'cloudy');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 17 day'),
        (select to_char((select now() - interval '1 month - 17 day'), 'dy') as day),
        2,
        1,
        2,
        14,
        4,
        4,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/rain_day_night@2x.png',
        (select now() - interval '1 month - 18 day'),
        (select to_char((select now() - interval '1 month - 18 day'), 'dy') as day),
        2,
        1,
        2,
        13,
        2,
        2,
        (select id from city where name = 'Samara'),
        'rain');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
        (select now() - interval '1 month - 19 day'),
        (select to_char((select now() - interval '1 month - 19 day'), 'dy') as day),
        2,
        1,
        2,
        12,
        4,
        4,
        (select id from city where name = 'Samara'),
        'cloudy');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 20 day'),
        (select to_char((select now() - interval '1 month - 20 day'), 'dy') as day),
        2,
        1,
        2,
        8,
        2,
        2,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
        (select now() - interval '1 month - 21 day'),
        (select to_char((select now() - interval '1 month - 21 day'), 'dy') as day),
        2,
        1,
        2,
        10,
        4,
        4,
        (select id from city where name = 'Samara'),
        'cloudy');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/rain_day_night@2x.png',
        (select now() - interval '1 month - 22 day'),
        (select to_char((select now() - interval '1 month - 22 day'), 'dy') as day),
        2,
        1,
        2,
        12,
        6,
        6,
        (select id from city where name = 'Samara'),
        'rain');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 23 day'),
        (select to_char((select now() - interval '1 month - 23 day'), 'dy') as day),
        2,
        1,
        2,
        8,
        2,
        2,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 24 day'),
        (select to_char((select now() - interval '1 month - 24 day'), 'dy') as day),
        2,
        1,
        2,
        9,
        2,
        2,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
        (select now() - interval '1 month - 25 day'),
        (select to_char((select now() - interval '1 month - 25 day'), 'dy') as day),
        2,
        1,
        2,
        11,
        6,
        6,
        (select id from city where name = 'Samara'),
        'cloudy');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 26 day'),
        (select to_char((select now() - interval '1 month - 26 day'), 'dy') as day),
        2,
        1,
        2,
        9,
        -1,
        -1,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
        (select now() - interval '1 month - 27 day'),
        (select to_char((select now() - interval '1 month - 27 day'), 'dy') as day),
        2,
        1,
        2,
        8,
        -4,
        -4,
        (select id from city where name = 'Samara'),
        'cloudy');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 28 day'),
        (select to_char((select now() - interval '1 month - 28 day'), 'dy') as day),
        2,
        1,
        2,
        10,
        -2,
        -2,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 29 day'),
        (select to_char((select now() - interval '1 month - 29 day'), 'dy') as day),
        2,
        1,
        2,
        7,
        -7,
        -7,
        (select id from city where name = 'Samara'),
        'clear');

insert into forecast
values (uuid_generate_v4(),
        'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
        (select now() - interval '1 month - 30 day'),
        (select to_char((select now() - interval '1 month - 30 day'), 'dy') as day),
        2,
        1,
        2,
        6,
        -3,
        -3,
        (select id from city where name = 'Samara'),
        'clear');
