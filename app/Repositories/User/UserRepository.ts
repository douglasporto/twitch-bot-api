import User from 'App/Models/User'

interface DataCreate {
  email: string;
  password: string;
}

interface DataUpdate {
  email: string;
  password: string;
}

export default class UserRepository {
  protected model: any

  constructor () {
    this.model = User
  }

  public async create (data: DataCreate): Promise<User> {
    return await this.model.create(data)
  }

  public async update (data: DataUpdate, id: number): Promise<User> {
    const user = await this.model.find(id)
    user.password = data.password
    await user.save()
    return user
  }
}
