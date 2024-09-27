import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'
import Karyawan from './karyawan.js'
import {belongsTo } from '@adonisjs/lucid/orm'
export default class Tiketing extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Karyawan,{
    foreignKey:'karyawan_id'
  })
  declare karyawan: BelongsTo<typeof Karyawan>
  
  @column()
  declare problem: string

  @column()
  declare keterangan: string

  @column()
  declare tanggal: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}