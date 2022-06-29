const express = require("express");
const router =express.Router();
const Booking=require("../models/bookingModel");
const Product=require("../models/productModel");


router.post("/bookproduct",async(req,res)=>{

req.body.transactionId ='1234'
  try {
    const newbooking = new Booking(req.body)
    await newbooking.save()

    
const product = await Product.findOne({_id : req.body.product})
    product.bookedTimeSlots.push(req.body.bookedTimeSlots)
    console.log(req.body.product)
    await product.save()
    
    res.send('your booking is successfull')
  } catch (error) {
    return res.status(400).json(error);
  }
  
});


module.exports=router