import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login ({ request, auth }: HttpContextContract) {
    const password = request.input('password')
    const email = request.input('email')

    const token = await auth.use('api').attempt(email, password)
    return token.toJSON()
  }
}
