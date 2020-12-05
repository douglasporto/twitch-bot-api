import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// USER ROUTES
Route.group(() => {
  Route.post('/users', 'UsersController.create')
  Route.put('/users/:id', 'UsersController.update')
  Route.post('/login', 'AuthController.login')
})
  .namespace('App/Controllers/Http/User')

// Commands Routes

Route.group(() => {
  Route.get('/commands', 'CommandController.index')
  Route.post('/commands', 'CommandController.create')
  Route.put('/commands/:id', 'CommandController.update')
  Route.get('/commands/:id', 'CommandController.get')
  Route.delete('/commands/:id', 'CommandController.remove')
})
  .namespace('App/Controllers/Http/Command')
  .middleware('auth')
