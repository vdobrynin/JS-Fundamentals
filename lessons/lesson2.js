//Concatenations and Interpolation
var price1 = 50
var itemName1 = "Cup"
var price2 = 80
var itemName2 = "Table"
var messageToPrint1 = "The price for your Cup is 50 dollars"
var messageToPrint2 = "The price for your Table is 80 dollars"
console.log(messageToPrint1)
console.log(messageToPrint2)

var messageToPrint = "The price for your" + " is 50 dollars"
console.log(messageToPrint1)
var messageToPrint = "The price for your " + itemName1 + " is 50 dollars"
console.log(messageToPrint1)

var messageToPrint = "The price for your " + itemName2 + " is " + price2 + " dollars"//--> concatenation
console.log(messageToPrint2)
var messageToPrint2 = `The price for your ${itemName2} is ${price2} dollars` //--> interpolation
console.log(messageToPrint2)
