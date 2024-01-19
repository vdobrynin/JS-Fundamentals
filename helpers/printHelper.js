
export function printAge(age) {
    console.log(age)
}

export class CustomerDetails {
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