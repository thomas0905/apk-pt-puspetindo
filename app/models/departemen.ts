import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Karyawan from './karyawan.js'
import type {BelongsTo, HasOne} from '@adonisjs/lucid/types/relations'

export default class Departeman extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Karyawan)
  declare karyawan: BelongsTo<typeof Karyawan>

  
  @column()
  declare namaDepartemen:string
  
  @column()
  declare namaPegawai:string
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}