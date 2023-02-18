import app from './app.js'
import { sequelize } from './database/db.js'

import './models/Books.js'
import './models/Authors.js'
import './models/Genres.js'

async function main() {
  try {
    await sequelize.sync()
    // await sequelize.sync({ force: true })

    app.listen(app.get('port'), () => {
      console.log(`Server on port ${app.get('port')}`)
    })
  } catch (err) {
    console.error(`Not conection database ${err}`)
  }
}

main()
