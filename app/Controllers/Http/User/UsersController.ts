import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UserValidation from 'App/Validations/User/UserValidation'
import UserRepository from 'App/Repositories/User/UserRepository'

export default class UsersController {
  protected validation: UserValidation
  protected repository: UserRepository

  constructor () {
    this.validation = new UserValidation()
    this.repository = new UserRepository()
  }
  public async create ({ request, response, auth }: HttpContextContract) {
    const dataValidated = await this.validation.create(request)

    const user = await this.repository.create(dataValidated)

    const token = await auth.use('api').attempt(user.email, dataValidated.password)
    return response.status(201).json({user, token})
  }

  public async update ({ request, response, params }: HttpContextContract) {
    const { id } = params
    const dataValidated = await this.validation.update(request)
    const user = await this.repository.update(dataValidated, id)
    return response.status(200).json(user)
  }
}
