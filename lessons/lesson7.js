//                                      // --> for loop (for i loop)
for (let i = 0; i < 5; i++) {
    // console.log('Hello World!')
    console.log('Hello World! ' + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]
for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i])
    // console.log(cars[0])
    console.log(cars.length + ' ' + cars[2])
    // console.log(cars.length + ' ' + cars[0])
    // console.log(cars.length + ' ' + cars[1])
}

//                                      // --> for of loop  --> ***
for (let car of cars) {
    console.log(car)
}

for (let car of cars) {
    console.log(car)
    if (car == "Toyota") {
        break
    }
}

//                           // --> ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})
