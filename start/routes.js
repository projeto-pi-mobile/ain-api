'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { greeting: 'AIN API' }
});


Route.get('/categories', 'CategoryController.index').prefix('api/v1');
Route.get('/category/:id', 'CategoryController.show').prefix('api/v1');
Route.get('/category/:id', 'CategoryController.destroy').prefix('api/v1');

Route.get('/users', 'UserController.index').prefix('api/v1');
Route.post('/users', 'UserController.store').prefix('api/v1');
Route.get('/users/:id', 'UserController.show').prefix('api/v1');
Route.post('/users/token', 'UserController.token').prefix('api/v1');
Route.put('/users/:id', 'UserController.update').middleware('auth').prefix('api/v1');
Route.delete('/users/:id', 'UserController.destroy').middleware('auth').prefix('api/v1');

Route.group(()=>{

  Route.resource('/jobs', 'JobController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Job']
  ]));


}).middleware('auth').prefix('api/v1');
