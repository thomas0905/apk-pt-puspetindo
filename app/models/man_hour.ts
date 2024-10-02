import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Karyawan from './karyawan.js'
import type {BelongsTo, HasOne} from '@adonisjs/lucid/types/relations'
import Proyek from './proyek.js'

export default class ManHour extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Karyawan,{
    foreignKey:'karyawan_id'
  })
  declare karyawan: BelongsTo<typeof Karyawan>

  @belongsTo(() => Proyek,{
    foreignKey:'proyek_id'
  })
  declare proyek: BelongsTo<typeof Proyek>
  
  @column()
  declare karyawan_id: string

  @column()
  declare proyek_id: string

  @column()
  declare kodeJobOrder: string

  @column()
  declare tanggal: DateTime

  @column()
  declare jam_kerja: string

  @column()
  declare jam_lembur: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}