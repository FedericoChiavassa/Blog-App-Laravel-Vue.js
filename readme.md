# Blog App - Laravel & Vue.js

> This is a blog application made with Laravel and MySQL at the backend and for the frontend Vue.js and Bootstrap 4.

## Quick Start

### Install Dependencies
``` bash
composer install
```

### Setup .env File
``` bash
cp .env.example .env
php artisan key:generate
```

### Create Database
Create a database in MySQL with just its name and nothing more.

Inside .env file edit DB_DATABASE, DB_PASSWORD and DB_USERNAME.

### Run Migrations
``` bash
php artisan migrate
```
If you get an error go to your PHP folder and inside the php.ini file uncomment the extension:
``` bash
;extension=pdo_mysql
```
Then do a quick server restart.

### Import Posts
``` bash
php artisan db:seed
```

### Add Virtual Host
Add a virtual host if using Apache and you are ready to use the application.
