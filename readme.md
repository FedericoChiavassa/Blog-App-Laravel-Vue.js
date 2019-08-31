# Blog App - Laravel & Vue.js

> Blog application created with the aim to improve and showcase my skills in working with different technologies including the following.

## Technologies
- Vue.js
- Vuex
- Laravel
- MySql
- Bootstrap 4

## Getting Started

#### Install Dependencies
``` bash
composer install
```

#### Setup .env File
``` bash
cp .env.example .env
php artisan key:generate
```

#### Create Database
Create a database in MySQL with just its name and nothing more.

Inside .env file edit DB_DATABASE, DB_PASSWORD and DB_USERNAME.

#### Run Migrations
``` bash
php artisan migrate
```
If you get an error go to your PHP folder and inside the php.ini file uncomment the extension:
``` bash
;extension=pdo_mysql
```
Then do a quick server restart.

#### Import Posts
``` bash
php artisan db:seed
```

#### Run Server
Run a server using:
``` bash
php artisan serve
```
As an alternative add a virtual host if using Apache.

If you get an error while trying to create a post go to your PHP folder and inside the php.ini file uncomment the extension:
``` bash
;extension=php_fileinfo
```
Then do a quick server restart.