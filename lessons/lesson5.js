//        //--> logical "AND" operator
console.log(true && true) //--> all values have to be TRUE for expression to be TRUE
console.log(true && false) //--> will be FALSE

//        //--> logical "OR" operator
console.log(true || false) //--> any value should to TRUE for expression to be TRUE
console.log(false || false) //--> always FALSE
console.log()

// var ageIsMoreThanEighteen = true //--> more than or == 16
var ageIsMoreThanEighteen = false //--> less than 16
var isUSCitizen = true
// var isUSCitizen = false

var eligibilityForDriverLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)
console.log()

var eligibilityForDriverLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)
console.log()

//        // --> logical "NOT"
console.log(!true)
console.log(6 == 10)
console.log(6 !== 10)
