import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UserValidation from 'App/Validations/User'
import UserRepository from 'App/Repositories/User'

export default class UsersController {
  protected validation: UserValidation
  protected repository: UserRepository

  constructor () {
    this.validation = new UserValidation()
    this.repository = new UserRepository()
  }
  public async create ({ request, response }: HttpContextContract) {
    const dataValidated = await this.validation.create(request)

    const user = await this.repository.create(dataValidated)
    return response.status(200).json(user)
  }
}
