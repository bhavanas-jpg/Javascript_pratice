// In JavaScript the Math Object provides a lots of methods to work with numbers.

const PI = Math.PI;
console.log(PI); //3.141592653589793

//Rounding to the closest number
// if above 0.5 up rounding
// if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)) // 10

//floor (rounding down)
console.log(Math.floor(9.41)) //9
console.log(Math.floor(9.81)) //9

//ceil (rounding up)
console.log(Math.ceil(PI)); //4
console.log(Math.ceil(9.31)); //10

console.log(Math.min(-5,3,20,4,5)); // -5 , returns the minimun value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) //20, returns the maximum value

//Random
const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

//create a random number b/w 0 to 10
console.log(Math.random() * 11); // 0 to 10.999
//as we used floor here,it will be round dowm to 10
const num = Math.floor(Math.random() * 11);
console.log(num);

// function to generate random values
const random = Math.random();
const randomValues = (maxValue) =>{
 return Math.floor(random * maxValue);
}

console.log(randomValues(11)  , "random");


//Absolute value
console.log(Math.abs(-10));

//square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)