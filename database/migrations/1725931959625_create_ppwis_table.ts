import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ppwis'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('judul_id').unsigned().references('id').inTable('judul_ppwis').onDelete('CASCADE')
      table.string('dokumen')
      table.string('nama_file')
      table.string('link')
      table.text('keterangan')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}