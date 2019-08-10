import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createConnection } from "typeorm";
import pino from 'express-pino-logger'

import { port, dbUrl } from './config'
import routes from './routes'

(async _ => {
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.use(routes)

  await createConnection({
    entities: ["dist/models/**/*.js"],
    synchronize: true,
    url: dbUrl,
    type: "postgres"
  });

  app.listen(port, function () {
    console.log(`🚀 Server started on port ${port}`)
  })
})()
