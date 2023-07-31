const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const cors =require("cors")

app.use(cors())

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000
// const {MONGOURI} = require('./config/keys')

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on("connected",()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on("error",(err)=>{
    console.log("err connecting",err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

