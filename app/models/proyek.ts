import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Proyek extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare namaProyek: string

  @column()
  declare kodeJobOrder: string

  @column()
  declare pemilik: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}