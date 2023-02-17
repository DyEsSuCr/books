import { Sequelize } from 'sequelize'

import { db, user, password } from '../config.js'

export const sequelize = new Sequelize(db, user, password, {
  database: db,
  dialect: 'mysql',
})
