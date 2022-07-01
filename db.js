
const mongoose=require('mongoose')
require('dotenv').config();

function connectDB(){
    // mongoose.connect('mongodb+srv://:@cluster0.wxcot1l.mongodb.net/shey',
  mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.wxcot1l.mongodb.net/shey`,{useUnifiedTopology:true,useNewUrlParser:true})
  
const connection=mongoose.connection

  connection.on('connected',()=>{
    console.log('Mongo DB connection Sucessfull')
  })
  
    connection.on('error',()=>{
    console.log('Mongo DB connection Error')
  })
}
connectDB()

module.exports=mongoose