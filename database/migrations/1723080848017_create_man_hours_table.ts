import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'man_hours'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('namaKaryawan')
      table.string('namaProyek')
      table.string('kodeJobOrder')
      table.integer('tanggal')
      table.integer('kerjaJam')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}