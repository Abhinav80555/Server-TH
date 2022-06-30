const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Product = require("../models/productModel");
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51LCG0gSFmd6Rsl6r4qYWAIZiD1qnPd5kY7Iz0EQamRkRbuG01ZnWSd7ef8H39tksQAvLTnPHiq6FUnGfdiIxiWjX00gyG2Uj9Q')


router.post("/bookproduct", async (req, res) => {


  const { token } = req.body
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const payment = await stripe.charges.create({
      amount: req.body.totalAmount * 100,
      currency: 'INR',
      customer: customer.id,
      receipt_email: token.email
    }, {
      idempotencyKey: uuidv4(),
    })

    if (payment) {
      req.body.transactionId = payment.source.id
      const newbooking = new Booking(req.body)
      await newbooking.save()


      const product = await Product.findOne({ _id: req.body.product })
      product.bookedTimeSlots.push(req.body.bookedTimeSlots)
      console.log(req.body.product)
      await product.save()

      res.send('your booking is successfull')
    } else {
      return res.status(400).json(error);
    }


  } catch (error) {
    return res.status(400).json(error);
  }

});


module.exports = router