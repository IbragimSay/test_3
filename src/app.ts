import express, {Express} from 'express'

const app:Express = express()

app.get('/', (req, res)=>{
    res.send('<h1>argen</h1>')
})

export default app