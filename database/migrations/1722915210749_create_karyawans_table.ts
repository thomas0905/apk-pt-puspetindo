import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'karyawans'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('departemen_id').unsigned().references('departemen.id').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.string('nama').unique()
      table.string('nik').unique()
      table.string('jabatan')
      table.string('tempat_lahir')
      table.date('tanggal_lahir')
      table.integer('usia')
      table.string('jenis_kelamin')
      table.string('pendidikan')
      table.string('jurusan')
      table.string('bpjs_kk')
      table.string('bpjs_kesehatan')
      table.integer('no_rekening')
      table.string('nama_bank')
      table.string('status')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}