import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Ppwi from './ppwi.js'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'

export default class JudulPpwi extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Ppwi)
  declare Ppwi: BelongsTo<typeof Ppwi>

  @column()
  declare judul:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}