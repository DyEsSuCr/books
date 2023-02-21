import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Genres = sequelize.define('genres', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(40),
    unique: true
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
})
