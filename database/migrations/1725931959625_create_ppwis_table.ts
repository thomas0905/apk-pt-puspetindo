import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ppwis'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.integer('judul_id').unsigned().references('judul.id').onDelete('CASCADE')
      table.string('dokumen')
      table.string('keterangan')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}