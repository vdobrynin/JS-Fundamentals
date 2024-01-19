//        //--> Declarative function

// helloTwo()
// function helloOne() {
//     console.log('Hello One!')
// }
// helloOne()

//        //--> Anonymous function
// var helloTwo = function () {
//     console.log('Hello Two!')
// }
// helloTwo()

//        //--> ES6 function syntax or arrow function
// var helloThree = () => {
//     console.log('Hello Three!')
// }
// helloThree()

//        //--> Function with arguments
// function printName(name) {
//     console.log(name)
// }
// // printName('John')
// printName('Mike')

// function printName2(name, lastName) {
//     console.log(name + ' ' + lastName)
// }
// printName2('John', 'Smith')

//        //--> Function with return
function multiplyByTwo(number) {
    var result = number * 2;
    // console.log(result)
    return result
}
var myResult = multiplyByTwo(7)
console.log(myResult)

//        //--> import function
// import { printAge } from '../helpers/printHelper.js' //--> this how to import
// printAge(5)

//        //--> import everything
import * as helper from '../helpers/printHelper.js' //--> this how to import the other way
helper.printAge(12)