import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import { appRouter } from './src/module/index.routes.js'
import express from 'express'
const __direname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__direname, './config/.env') })

const port = process.env.PORT ||3000

const app = express()
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
import cors from "cors"
var corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
}
app.use(cors("*"))
appRouter(app)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


