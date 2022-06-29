const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  name: { type: String, required: true },
  image: { type: String, required: true },
  lens: { type: Number, required: true },
  Type: { type: String, required: true },
  bookedTimeSlots: [
    {
    from: { type: String, required: true },
    to: { type: String, required: true }

  }
  ],
  rentPerHour: { type: Number, required: true },



}, { timestamps: true }

)

const productModel = mongoose.model('products', productSchema)
module.exports = productModel