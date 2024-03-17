import express, {Express} from 'express'
import router from './router'

const app:Express = express()

app.use("/api", router)

export default app