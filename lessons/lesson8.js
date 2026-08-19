// //                    // --> Declarative function
// helloOne()               // // --> will work every time --> invoking function any where
function helloOne() {
    console.log('Hello One!')
}
helloOne()

// //                   // --> Anonymous function
// helloTwo()               // --> will not work
var helloTwo = function () {
    console.log('Hello Two!!')
}
helloTwo()

//                       // --> ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three!!!')
}
helloThree()

//                          // --> Function with arguments
function printName(name) {
    console.log(name)
}
printName('Mike')

function printName2(name, lastName) {
    console.log(name + ' ' + lastName)
}
printName2('John', 'Smith')

//                       // --> Function with return
function multiplyByTwo(number) {
    var result = number * 2
    // console.log(result)
    return result
}
// var result1 = multiplyByTwo(5)
// console.log(result1)
var result2 = multiplyByTwo(7)
console.log(result2)

//                                  // --> import function
import { printAge } from '../helpers/printHelper.js' // --> this how to import
printAge(5)                             // --> add word export in the printHelper
printAge(9)                             // --> add in the package.json --> "type": "module",

//                                  // --> import everything
import * as helper from '../helpers/printHelper.js' //--> this how to import the other way
helper.printAge(11)
helper.printAge(15)