const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema 
const products = new Schema({
    title: {type:String,required:true},
    description: String,
    price: {type:Number,min:[0,'wrong price'],required:true},
    discountPercentage: {type:Number,min:[0,'wrong price']},
    rating:{type:Number,min:[0,'wrong min rating'],max:[5,'wrong max rating'],default:0},
    stock: Number,
    brand:{type:String,required:true},
    category: String,
    thumbnail: {type:String,required:true},
    images: [String]
  });
  
  exports.Product = mongoose.model('Product',products);