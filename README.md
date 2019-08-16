# todo-app
dead simple todo app.

## setup

### todo-server

* install dependencies `composer install`
* copy `.env.example` into `.env`
* fix `DB_*` values to suit your environment
* exec migration `php artisan migrate`

### todo-client

* install dependencies `npm i`
* fix `environments/environment.ts`
* launch dev server `ng serve`
