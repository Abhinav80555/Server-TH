const express = require("express");
const router =express.Router();
const Product=require("../models/productModel")


router.get("/getallproducts",async(req,res)=>{
  try{
    const products = await Product.find()
    res.send(products)
  }catch(error){
return res.status(400).json(error)    
  }
})

router.post("/addproduct",async(req,res)=>{
  try{
    const newproduct = new Product(req.body)
      await newproduct.save()
    res.send('Product added successfully')
  }catch(error){
return res.status(400).json(error)    
  }
})

module.exports = router;