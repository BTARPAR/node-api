import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/demoRoutes'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4000

// mongoose connection

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/demodb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log({mongoose})

// body parser set up
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.get('/', (req, res)=>{
    res.send(`Node & Express Server running on port ${PORT}`)
})

app.listen(PORT, () =>{
    console.log('Your Server is UP')
})
