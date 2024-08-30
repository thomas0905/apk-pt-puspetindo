import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import ManHour from './man_hour.js'
import Departeman from './departemen.js'

export default class Karyawan extends BaseModel {
  @hasOne(() => ManHour, {
    foreignKey: 'karyawanId',
  })
  declare manHour: HasOne<typeof ManHour>

  @belongsTo(() => Departeman, {
    foreignKey: 'departemen_Id'
  })
  declare departemen: BelongsTo<typeof Departeman>

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare user: BelongsTo<typeof User>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare nama: string


  @column()
  declare departemen_Id: number

  @column()
  declare jabatan: string

  @column()
  declare tempat_lahir: string

  @column()
  declare tanggal_lahir: Date

  @column()
  declare usia: number

  @column()
  declare jenis_kelamin: string

  @column()
  declare pendidikan: string

  @column()
  declare jurusan: string

  @column()
  declare bpjs_kk: string

  @column()
  declare bpjs_kesehatan: string

  @column()
  declare no_rekening: number

  @column()
  declare nama_bank: string

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}