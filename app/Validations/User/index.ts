import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserValidation {
  public async create (request) {
    const createValidates = schema.create({
      email: schema.string({}, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      password: schema.string({}, [
        rules.minLength(3),
        rules.confirmed(),
      ]),
    })

    return await request.validate({
      schema: createValidates,
    })
  }
}
