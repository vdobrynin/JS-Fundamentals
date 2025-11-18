
// import { CustomerDetails } from "../helpers/printHelper.js"; // instead of importing the entire class
import { customerDetails } from "../helpers/printHelper.js";   // import instance of the class from above

// var customerDetails = new CustomerDetails() // -->remove contractor & to put it into printHelper class
customerDetails.printFirstName('Steve')
customerDetails.printLastName('Smith')     