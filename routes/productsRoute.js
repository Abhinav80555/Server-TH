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

router.post("/editproduct",async(req,res)=>{
  try{
    const product= await Product.findOne({_id:req.body._id})
    product.name =req.body.name
    product.image =req.body.image
    product.Type =req.body.Type
    product.rentPerHour =req.body.rentPerHour
    product.lens =req.body.lens
    
      await product.save()
    res.send('Product details updated successfully')
  }catch(error){
return res.status(400).json(error)    
  }
})


router.post("/deleteproduct",async(req,res)=>{
  try{
    
      await Product.findOneAndDelete({_id:req.body.productId})
    res.send('Product deleted successfully')
  }catch(error){
return res.status(400).json(error)    
  }
})

      
module.exports = router;