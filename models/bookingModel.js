const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


product : {type: mongoose.Schema.Types.ObjectId,ref:"products"},
user : {type: mongoose.Schema.Types.ObjectId,ref:"users"},
bookedTimeSlots :{
  from : {type:String},
  to:{type:String}
},
totalHours :{type:Number},
totalAmount:{type:Number},
transactionId:{type:String}
  
},
  {timestamps:true}
    )

const bookingModel =mongoose.model("bookings" , bookingSchema)
module.exports = bookingModel