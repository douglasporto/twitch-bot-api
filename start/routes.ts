import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/user', 'UsersController.create')
Route.post('/login', 'AuthController.login')
