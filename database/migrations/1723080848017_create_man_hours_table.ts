import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'man_hours'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('karyawan_id').unsigned().references('karyawans.id')
      table.integer('proyek_id').unsigned().references('proyeks.id')
      table.date('tanggal')
      table.time('jam_kerja')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}