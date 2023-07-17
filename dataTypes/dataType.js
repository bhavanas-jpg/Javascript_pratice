//Primitive DataTypes - number,string, boolean, null, undefined, symbol
//Non-primitive datatypes - object , array

// 1. Primitive datatypes are immutuable(non-modifiable) data types.
//once a primitive dataType is created we cannot modify it

//Ex:
let word = "Javascript";
word[0] = 'Y'
console.log(word)

//2. Primitive datatypes are compared by its value.
//Ex:

let numOne = 8;
let numTwo = 8;
console.log(numOne == numTwo); //true

let js = "JavaScript";
let py = "Python";
console.log(js == py); //false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); //false

//1.Non primitive DataTypes are mutuable
//2.Non primitive DataTypes are compared by its reference

//1.Ex:
let nums = [1,2,3];
nums[0] = 20;
console.log(nums); //[ 20, 2, 3 ]

//2.Ex:
let values = [2, 4,6];
let valueArr = [2, 4,6];
console.log(values == valueArr , "have different reference" ) // false

let numbers = [1, 2,3];
let numArr = numbers ;
console.log(numArr == numbers , "have same reference"); //true