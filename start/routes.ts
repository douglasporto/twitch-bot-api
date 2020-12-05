import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// USER ROUTES
Route.group(() => {
  Route.post('/user', 'UsersController.create')
  Route.post('/login', 'AuthController.login')
}).namespace('App/Controllers/Http/User')
