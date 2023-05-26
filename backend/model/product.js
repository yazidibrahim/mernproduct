const mongoose=require('mongoose');
const Schema=mongoose.Schema

const product=new Schema({
    title:String,
    price:String,
    desc:String,
    image:String
})

const PRODUCT = mongoose.model('product', product)
module.exports=PRODUCT