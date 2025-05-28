
export function printAge(age) {     // export to being visible outside
    console.log(age)
}

class CustomerDetails {      // export to being visible outside, then remove it
    printFirstName(firstName) {
        console.log(firstName)
    }
    /**
     * This method will print the last name
     * @param {lastName} lastName 
     */
    printLastName(lastName) {
        console.log(lastName) 
    }
}

export const customerDetails = new CustomerDetails() 