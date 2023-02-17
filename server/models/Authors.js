import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Authors = sequelize.define('Author', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(80),
  },
})
