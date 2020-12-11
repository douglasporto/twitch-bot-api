import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CommandRepository from 'App/Repositories/Command/CommandRepository'
import CommandValidation from 'App/Validations/Command/CommandValidation'

export default class CommandController {
  protected validation: CommandValidation
  protected repository: CommandRepository
  constructor () {
    this.validation = new CommandValidation()
    this.repository = new CommandRepository()
  }

  public async index ({ request, response }: HttpContextContract) {
    const { userId } = request
    const perPage = request.input('perPage')
    const page = request.input('page')
    const commands = await this.repository.index(userId, perPage, page)
    return response.status(200).json(commands)
  }

  public async get ({ response, params }: HttpContextContract) {
    const { id } = params
    const commands = await this.repository.get(id)
    return response.status(200).json(commands)
  }

  public async create ({ request, response }: HttpContextContract) {
    const dataValidated = await this.validation.create(request)

    const { userId } = request
    const command = await this.repository.create({ userId, ...dataValidated })

    return response.status(201).json(command)
  }

  public async update ({ request, response, params }: HttpContextContract) {
    const { id } = params
    const dataValidated = await this.validation.create(request)
    const user = await this.repository.update(dataValidated, id)
    return response.status(200).json(user)
  }

  public async remove ({ response, params }: HttpContextContract) {
    const { id } = params
    await this.repository.destroy(id)
    return response.status(200).json({ message: 'Command was delete'})
  }
}
