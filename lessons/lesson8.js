//Functions
// Declarative function

helloOne()
function helloOne() {
    console.log('Hello One!')
}
// helloOne()
// helloOne()

        // Anonymous function
var helloTwo = function () {
    console.log('Hello Two!')
}
helloTwo()

        // ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three!')
}
helloThree()

        //Function with arguments
function printName(name) {
    console.log(name)
}
printName('John')

function printName2(name, lastName) {
    console.log(name + ' ' + lastName)
}
printName2('John', 'Smith')

        //Function with return
function multiplyByTwo(number) {
    var result = number * 2;
    // console.log(result)
    return result
}
var myResult = multiplyByTwo(10)
console.log(myResult)

        // import function
import { printAge } from '../helpers/printHelper.js'
printAge(15)

        // import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)