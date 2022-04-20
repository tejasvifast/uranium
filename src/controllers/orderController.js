const orderModel=require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")
// const moment =require("moment")

const createOrder=async function(req,res){
    let orderData = req.body                // contain user id and product id
    let userId1 = orderData.userId           // user id
    let productId1 =orderData.productId     //product id
    // console.log(orderData)
    if(!userId1)                          // check for is user id is given or not
             res.send({msg:"Provide userId"})
             let user=await userModel.findById(userId1)   // finding the user in db by using userid coming in req body
                    if(!user)            //check validity of user
                    res.send({msg:"please Provide valid userId"})
    
    if(!productId1)                      //check for is product id is given or not
            res.send({msg:"Provide productId"})
            let product=await productModel.findById(productId1)  // finding the product in db by using productid coming in req body
                    if(!product)         //check validity of product
                    res.send({msg:"please Provide valid ProductId"})

    let head=req.headers             // contain req headers
    let isfree= head.isfreeappuser  // contain the value which is present in header
    if(isfree=="true")
    {   
        console.log("===========free user===========");
        let orderData1=await orderModel.create(orderData)
        orderData1.amount=0
        orderData1.isFreeAppUser=true
        res.send({msg:orderData1})    
    }

    console.log(product.price)
    let amount1 =product.price     // price of the product
    console.log(user.balance);
    let netBalance =user.balance   // user wallet balance
    if(isfree=="false")
    {
        if(netBalance>amount1)
        {   console.log("===========you can buy=============")
            let userBalance = await userModel.updateMany({_id:userId1},{$inc:{balance:-amount1}},{new:true})
            let orderData1=await orderModel.create(orderData)
            orderData1.amount=70
            orderData1.isFreeAppUser=false
            res.send({msg:orderData1})
        }
        else
        {
           res.send({msg:"You Cant buy this product beacuse you have insufficient balance in your wallet"}) 
        }
    }
}
module.exports.createOrder=createOrder
