import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type {BelongsTo, HasOne} from '@adonisjs/lucid/types/relations'
import ManHour from './man_hour.js'

export default class Proyek extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => ManHour,{
    localKey:'id'
  })
  declare manHour: BelongsTo<typeof ManHour>

  @column()
  declare namaProyek: string

  @column()
  declare kodeJobOrder: string

  @column()
  declare status: string

  @column()
  declare pemilik: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}