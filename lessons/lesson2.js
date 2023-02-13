        //Concatination and Interpolation

console.log()
        // var price = 50
        // var itemName = "Cup"
var price = 80
var itemName = "Table"

var messageToPrint = "The price for your Cup is 50 dollars"
console.log(messageToPrint)
console.log()

var messageToPrint = "The price for your is 50 dollars"
console.log(messageToPrint)
console.log()

var messageToPrint = "The price for your" + " is 50 dollars"
console.log(messageToPrint)
console.log()

var messageToPrint = "The price for your " + itemName + " is 50 dollars"
console.log(messageToPrint)
console.log()

var messageToPrint1 = "The price for your " + itemName + " is " + price + " dollars" //concatination
console.log(messageToPrint)
console.log()

console.log(messageToPrint1)
console.log()

var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`            //interpolation
console.log(messageToPrint2)
console.log()