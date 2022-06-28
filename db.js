
const mongoose=require('mongoose')

function connectDB(){
  mongoose.connect('mongodb+srv://shey:shey@cluster0.wxcot1l.mongodb.net/shey',{useUnifiedTopology:true,useNewUrlParser:true})
  
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