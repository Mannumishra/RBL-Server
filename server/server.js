const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const Router = require('./Router/Route')
const connectDb = require('./Config/db')
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extends: true }))

app.use('/v1', Router)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('server run on', PORT)
})

connectDb()