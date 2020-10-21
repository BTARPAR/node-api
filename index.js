import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/demoRoutes'

const app = express()
const PORT = 4000

// mongoose connection

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/demodb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// body parser set up
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res)=>{
    res.send(`Node & Express Server running on port ${PORT}`)
})

app.listen(PORT, () =>{
    console.log('Your Server is UP')
})