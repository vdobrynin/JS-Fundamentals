//Concatenations and Interpolation

// var price = 50
// var itemName = "Cup"
var price = 80
var itemName = "Table"

// var messageToPrint = "The price for your Cup is 50 dollars"
// console.log(messageToPrint)

// var messageToPrint = "The price for your" + " is 50 dollars"
// console.log(messageToPrint)

// var messageToPrint = "The price for your " + itemName + " is 50 dollars"
// console.log(messageToPrint)

var messageToPrint = "The price for your " + itemName + " is " + price + " dollars"//-->concatenation
console.log(messageToPrint)

var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //--> interpolation
console.log(messageToPrint2)
