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

Route.on('/').render('index').as('home');


Route
  .group(() => {
    Route.get('/:service?', 'HomeController.consulting').as('consulting')
  })
  .prefix('consulting')



//Route.on('/my-url.php').render('index')

Route
  .get('profile', 'UserController.profile')
  .middleware('auth');

Route
  .get('users/:id', 'UserController.show')
  .middleware('auth');

Route.get('login', 'UserController.loginshow').as('login');
Route.get('register', 'UserController.showregisterform').as('register');
Route.post('register', 'UserController.register');
Route.post('login', 'UserController.login').validator('LoginUser');
Route.get('resetpassword', 'UserController.resetpassword').as('resetpassword');
Route.get('logout', async ({ auth, response }) => {
  await auth.logout();
  return response.redirect('/');
}).as('logout');

Route.get('post','PostController.home');
Route.get('post/all','PostController.allPost');
Route.get('sendtest','UserController.sendtest');