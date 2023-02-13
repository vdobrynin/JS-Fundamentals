// Loops
// console.log('Hello World!')

// for (statement1; statement2; statement3) {}

        // for loop (for i loop)
for (let i = 0; i < 5; i++) {
    console.log('Hello World! ' + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]
// for (let i = 0; i < car.length; i++) {
//     // console.log(car.length + ' ' + car[2])
// }

// for of loop  --> ***
for (let car of cars) {
    console.log(car)
    if (car == "Toyota") {
        break
    }
}
// for (let c of cars) {
//     console.log(c)
// }

console.log()
        // ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})
