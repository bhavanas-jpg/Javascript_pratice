//Checking Data Types
/*** To check the data type of a certain variable we use the typeof method.*/

// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

//Changing DataType (Casting)
/**casting: Converting one dataType to another dataType.
 * we use parseInt(), parseFloat(), Number(), +sign, str()
 * when we do arithmetic operations string numbers should be
 *  first converted to integer or float if not it returns an error.
 */