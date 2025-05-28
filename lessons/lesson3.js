//        // --> objects
var customer = {
        firstName: 'John',
        lastName: 'Smith',
        cars: ["Volvo", "Toyota", "Tesla"]
}
// console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.firstName + ' ' + customer.lastName)

//         //--> dot notation
customer.firstName = "Mike"
//         //--> bracket notation
customer['lastName'] = "Silver"
console.log(customer['firstName'])
console.log(customer['lastName'])
//         //-->interpolation
console.log(`${customer.firstName} ${customer.lastName}`)

//      //--> arrays
var car = ["Volvo", "Toyota", "Tesla"]
console.log(car[0])
console.log(car[2])
console.log(car[0] + ' ' + car[2])

car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])
console.log(car[1] + ' ' + customer.cars[0])