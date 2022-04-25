const axios = require("axios")
const { options } = require("../routes/route")
//##################################################################################################
const getStates = async function (req, res) {
    try {
        let result = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
        console.log(result)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}
//##################################################################################################
const getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        console.log(id)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options)
        console.log(result)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}
//##################################################################################################
const getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })

    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}
//##################################################################################################
//ASSIGNMENT 1
const getByDistrictId = async function (req, res) {
    try {
        let Id = req.query.district_id
        let date = req.query.date
        console.log(Id, date)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}
//##################################################################################################
//ASSIGNMENT 2
const getLondonTemp = async function (req, res) {
    try {
        let appid = req.query.appid
        let location = req.query.q
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`
        }
        let result = await axios(options)
        let temp = result.data.main.temp
        res.status(200).send({ msg: result.data, temp })
        console.log(temp)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}
//##################################################################################################
//ASSIGNMENT 3
const getWeatherOfCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let FinalResult = [], object = {}, result = [], temp = []
        let id = req.query.appid
        for (let i = 0; i < cities.length; i++) {
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
            }
            result[i] = await axios(options)
            temp[i] = result[i].data.main.temp
            object = { city: cities[i], temperature: temp[i] }
            FinalResult.push(object)
        }

        FinalResult.sort((x, y) => x.temperature - y.temperature)
        // FinalResult.sort(function (x, y) {
        //     return x.temperature - y.temperature;
        //   });
        console.log(FinalResult)
        res.status(200).send({ msg: FinalResult })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//##################################################################################################
//Assignment 4
const makingCustomMeme=async function(req,res){
    try{
        let template_id=req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1
        let username =req.query.username
        let password =req.query.password
        console.log(req.query)
        let options={
            mehtod:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
        }
        let result=await axios(options)
        console.log(result)
        res.status(201).send({msg:result.data})

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//##################################################################################################

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getByDistrictId = getByDistrictId
module.exports.getLondonTemp = getLondonTemp
module.exports.getWeatherOfCities = getWeatherOfCities
module.exports.makingCustomMeme=makingCustomMeme
// module.exports={getStates , getDistricts }