//--> Loops
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// for (statement1; statement2; statement3) {
// }

//--> for loop (for i loop)
// for (let i = 0; i < 5; i++) {
//     console.log('Hello World! ' + i)
// }

var car = ["Volvo", "Toyota", "Tesla"]
// for (let i = 0; i < car.length; i++) {
//     // console.log(car.length + ' ' + car[2])
//     // console.log(car.length + ' ' + car[0])
//     console.log(car.length + ' ' + car[1])
// }

//        //--> for of loop  --> ***
var cars = ["Volvo", "Toyota", "Tesla"]
// for (let car of cars) {
//     console.log(car)
// }

// for (let c of cars) {
//     console.log(c)
// }

// for (let car of cars) {
//     console.log(car)
//     if (car == "Toyota") {
//         break
//     }
// }

//       //--> ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})
