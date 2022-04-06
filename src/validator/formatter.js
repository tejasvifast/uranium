let string = " functionUp "
let trim = function trim(){
    console.log(string.trim())
}
let changetoLowerCase = function changeToLowerCase(){
    console.log(string.toLowerCase())
}
let changetoUpperCase = function changeToUpperCase(){
    console.log(string.toUpperCase())
}

module.exports.trim1=trim
module.exports.changetoLowerCase1=changetoLowerCase
module.exports.changeToUpperCase1=changetoUpperCase