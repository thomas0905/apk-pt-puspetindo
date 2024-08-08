import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ManHour extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare namaKaryawan: string

  @column()
  declare namaProyek: string

  @column()
  declare kodeJobOrder: string

  @column()
  declare tanggal: number

  @column()
  declare kerjaJam: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}