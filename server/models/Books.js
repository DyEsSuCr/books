import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Books = sequelize.define('books', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  tittle: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publiched_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
})
