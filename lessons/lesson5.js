// logical "AND" operator
// console.log(true && true) // all values have to be TRUE for expression to be TRUE

// console.log(true && false)

// logical "OR" operator
// console.log(true || false) // any value should to TRUE for expression to be TRUE

// console.log(false || false)

var ageIsMoreThanEighteen = false
var isUSCitizen = true

// var eligibilityForDriverLicence = ageIsMoreThanEighteen && isUSCitizen
// console.log('This customer is eligible for DL: ' + eligibilityForDriverLicence)

var eligibilityForDriverLicence = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicence)

        // logical "NOT"
console.log(!true)

console.log(6 == 10)
console.log(7 !== 10)
