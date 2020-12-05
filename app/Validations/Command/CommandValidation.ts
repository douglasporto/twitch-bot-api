import { schema } from '@ioc:Adonis/Core/Validator'

export default class CommandValidation {
  public async create (request) {
    const createValidate = schema.create({
      name: schema.string(),
      answer: schema.string(),
    })

    return await request.validate({
      schema: createValidate,
    })
  }
}
