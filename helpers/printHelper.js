export function printAge(age) {     // 'export' to being visible outside #lesson 8
    console.log(age)
}

class CustomerDetails {          // 'export' to being visible outside, then remove it
    /**
     * This method will print the first name
     * @param {string} firstName 
     */
    printFirstName(firstName) {
        console.log(firstName)
    }
    /**
     * This method will print the last name
     * @param {string} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails() // --> import instance of the class