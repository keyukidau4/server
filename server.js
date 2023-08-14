import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()

//connections
import connect from './database/conn.js'
//port
const PORT = process.env.PORT || 8080

//routes
app.use('/api', router) //apis

app.get('/', (req, res) => {
    try {
        res.send('home page')
    } catch (err) {
        res.json(err)
    }
})

//start server only connections
connect()
    .then(() => {
        try {
            app.listen(PORT, () => {
                console.log('ser ver connected at 8000')
            })
        } catch (error) {
            console.log('cannot connect to the server', error)
        }
    })
    .catch((error) => {
        console.log('Invalid Connect')
    })
