const mongoose= require("mongoose")
const ObjectId= mongoose.Schema.Types.ObjectId
const moment =require("moment")
let date = moment()

const orderSchema = mongoose.Schema({
        userId: {
            type:ObjectId,
            ref:"User"
        },
        productId: {
            type:ObjectId,
            ref:"Product"
        },
        amount: Number,
        isFreeAppUser: Boolean,
        date : { type: String, default: date.format("DD-MM-YYYY") } 

},{timestamps:true})

module.exports=mongoose.model("Order",orderSchema)