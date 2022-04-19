const mongoose = require("mongoose")

const newDeveloperSchema = new mongoose.Schema({
    name:String,
	gender:{
        type:String,
        enum:["female","male","other"]
    },
	percentage:Number,
    batch:{
        type:Object,
        ref:"Batch"
    }

},{ timestamps: true })

module.exports=mongoose.model('Developer',newDeveloperSchema)