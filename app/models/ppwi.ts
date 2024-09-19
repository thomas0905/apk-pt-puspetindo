import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import JudulPpwi from './judul_ppwi.js'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'

export default class Ppwi extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => JudulPpwi, {
    foreignKey: 'judulId'
  })
  declare judulPpwi: BelongsTo<typeof JudulPpwi>

  @column()
  declare judulId:string

  @column()
  declare dokumen:File

  @column()
  declare namaFile:string

  @column()
  declare link:string
  
  @column()
  declare keterangan:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}