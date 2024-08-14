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

  @hasOne(() => Proyek)
  declare proyek: HasOne<typeof Proyek>
  
  @column()
  declare karyawan_id: string

  @column()
  declare proyek_id: string

  @column()
  declare kodeJobOrder: string

  @column()
  declare tanggal: DateTime

  @column()
  declare jamKerja: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}