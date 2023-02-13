        //objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}

console.log(customer)
console.log(customer.firstName)

customer.firstName = "Mike"

        //dot notation
console.log(customer.lastName)

        //bracket notation
console.log(customer['firstName'])

console.log(`${customer.firstName} ${customer.lastName}`)

        //arrays
var car = ["Volvo", "Toyota", "Tesla"]
console.log(car[0])
console.log(car[2])

car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])

