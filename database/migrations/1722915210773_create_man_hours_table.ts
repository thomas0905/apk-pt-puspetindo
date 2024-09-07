import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'man_hours'

  /**
   * Run the migrations.
   */
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Auto-incrementing ID
      table.increments('id')

      // Foreign key to the karyawans.id
      table.integer('karyawan_id').unsigned().references('karyawans.id')

      // Foreign key to the proyeks.id
      table.integer('proyek_id').unsigned().references('proyeks.id')

      // Date of the man hour
      table.date('tanggal')

      // Number of hours worked
      table.integer('jam_kerja')

      // Timestamp when the record was created
      table.timestamp('created_at')

      // Timestamp when the record was updated
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}