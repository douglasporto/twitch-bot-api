import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableCommands extends BaseSchema {
  protected tableName = 'commands'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('answer')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
