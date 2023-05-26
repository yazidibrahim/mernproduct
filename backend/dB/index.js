const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yazidibrahim:yazidibrahim@cluster0.0qegvnd.mongodb.net/ce')
.then(()=>{
    console.log('mongodb atlas connected')
})
.catch(err=>{
    console.log(err)
})