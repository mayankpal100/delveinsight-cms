'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')


Route
  .group(() => {
    Route.get('/:service?', 'HomeController.consulting').as('consulting')
  })
  .prefix('consulting')



//Route.on('/my-url.php').render('index')

Route
  .get('/profile', 'UserController.profile')
  .middleware('auth');

Route
  .get('users/:id', 'UserController.show')
  .middleware('auth');

Route.post('login', 'UserController.login');
Route.get('register', 'UserController.showregisterform');
Route.post('register', 'UserController.register');
Route.get('post','PostController.home');
Route.get('post/all','PostController.allPost');