import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import adController from "./advertisements/controller"
import setupDb from './db'

const port = process.env.PORT || 4000

const app = createKoaServer({
   controllers: [
    adController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))