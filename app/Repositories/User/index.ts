import User from 'App/Models/User'

interface DataCreate {
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
}
