import Command from 'App/Models/Command'

export default class CommandRepository {
  protected model: any
  constructor () {
    this.model = Command
  }

  public async index (id, perPage = 50, page): Promise<Command[]> {
    const commands = Command
      .query()
      .select(['name'])
      .where('userId', id)
      .paginate(page, perPage)
    return commands
  }

  public async get (id): Promise<Command> {
    const commands = this.model.find(id)
    return commands
  }

  public async create (data): Promise<Command> {
    const command = await this.model.create(data)
    return command
  }

  public async update (data, id: number): Promise<Command> {
    const command = await this.model.find(id)
    command.merge(data)
    await command.save()
    return command
  }

  public async destroy (id: number): Promise<void> {
    const command = await Command.find(id)
    await command?.delete()
  }
}
