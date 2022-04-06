const d = new Date()
let printDate = function printDate(){
    console.log("date is " + d.getDate())
}
let printMonth = function printMonth(){
    console.log("month is " + (d.getMonth()+ 1))
}
let getBatchInfo = function getBatchInfo(){
    console.log("Uranium, W2D3, the topic for today is Nodejs module system");
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo