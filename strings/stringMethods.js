/**String Methods */

/**1. Everything in JS is an object
 * 2.The string object has many string methods
 * 
 */

/************  1.length   *************/
/** 1. length : The string length method returns the numbeer of characters in a string included empty space. */

let js ="Javascript";
console.log(js.length);

/************  2.Accessing characters in a string   *************/
/** 1. We can access each character in a string using its index.
 * 2. In programming, counting starts from 0.
 * 3. The first index of the string is zero
 * 4. The last index is the length of the string - 1
*/

//Ex: let us access different characters in "Javascript" string.

let string = "Javascript";
let firstLetter = string[0];
console.log(firstLetter);

let secondLetter = string[1];
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter);

let lastIndex = string.length - 1 ;

console.log(lastIndex);
console.log(string[lastIndex]);

/**********3. UpperCase & LowerCase **********/
let firstName ="Bhavana";
console.log(firstName.toUpperCase()); //BHAVANA

let country = "INDIA";
console.log(country.toLowerCase()); //india

/****************4. substr()************** */
/** It takes 2 arguments, 
 *  1.the starting index 
 *  2. no of characters to slice
 */
//Ex: this method was deprecated
// let lastName = "Kumari";
// console.log(lastName.substr(2,5));

/************5.substring() **********/
/** It takes 2 arguments, the starting index and the stopping index
 * but it doesn't include the character at the stopping index
 */

let countryName = "Finland";
console.log(countryName.substring(0,3)); //Fin
console.log(countryName.substring(4)); //and

/********* 6. split() **********/
//The split method splits a string at a specified place & converts string into an array
let text = '30 Days Of JavaScript';
console.log(text.split(' ')) 
// Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

/********7. trim() **********/
let textOne = ' 30 days of React ';
console.log(textOne);
console.log(textOne.trim(' '));

/***********7. includes() ************/
//syntax: string.includes(substring)
/** 1. It takes a substring argument & it checks if substring
 * argument exists in the string.includes()
 * 2.It returns a boolean
 * 3.If a substring exist in a string, it returns true, 
 * 4.otherwise it returns false
 * 5.its case sensitive
 */
let textTwo = '30 Days Of JavaScript'
console.log(textTwo .includes('Days'))     // true
console.log(textTwo .includes('days'))     // false - it is case sensitive!

/**************8.replace() **********/
// it takes as a parameter the old substring and a new substring
//syntax : string.replace(oldsubstring, newsubstring);

let city = "bangalore";
city = city.replace("ban" ,"man");
console.log(city);

/****************9.charAt() **********/
/** charAt(): Takes index and it returns the value at that index */
/** syntax: string.charAt(index) */
let homeTown = "Shimoga is greenary city";
console.log(homeTown.charAt(8));

/************10. charCodeAt() : Takes indexand it returns char code 
 * (ASCII number) of the value  at that index
 * string.charCodeAt(index)
*/
let textThree = "30 Days of Javascript";
console.log(string.charCodeAt(3)); // D -- ASCII number is 68

/*******11. indexOf()  ***************/
/**Takes a substring & if the substring exists in a string 
 * it returns the first position of the substring 
 * if doesnot exist it returns -1
 */

let textFour = "30 Days Of JavaScript";
console.log(string.indexOf('days')); //-1
console.log(string.indexOf('Script')); //15

/************12.lastIndexOf()  *********************/
/** Takes a substring and if the substring exists in a string 
 * it returns the last position of the substring 
 *  if it doesnot exist it returns -1
 * Syntax: string.lastIndexOf(substring)
 */

let stringOne = "I love JavaScript. If you do not love JS what else can you love."
console.log(stringOne.lastIndexOf('love')); //67

/*****************13.concat() *********/
/*** It takes many substrings and joins them. */
/** string.concat(substring, substring, substring) */

let stringTwo = "30";
console.log(stringTwo.concat("Days", "of", "JavaScript"));

/*******************14.startsWith()*********************/
/**It takes a substring as an argument and it checks if the string starts with that specified substring.
 * It returns a boolean(true or false)
 * Ex: string.startsWith(substring)
 */

let stringThree = "Love is the best to in this world ";
console.log(stringThree.startsWith('Love')); //true
console.log(stringThree.startsWith('world')); //false

/****************15.endsWith() ***************/
/**It takes a substring as an argument and it checks if the string ends 
 * with that specified substring.
 * It returns a boolean(true or false)
 * string.endsWith(substring)
 */

let stringFour = "Love is the most powerful feeling in the world";
console.log(string.endsWith('world')); //true
console.log(string.endsWith('love')); //false

/******************16.search() ***********/
/***it takes a substring as an argument & it returns the index of the first match.
 * The search value can be a string or a regular expression pattern
 * Syntax: string.search(substring)
 */

let stringFive = "I love Javascript. If you do not love JavaScript what else can you love."
console.log(string.search("love")) //2

/***********************17.match()********************/
/** it takes a substring or regular expression pattern as an argument
 * and it returns an array if there is match if not it returns null.
 * Let us see how a regular expression pattern looks like.
 * It starts with / sign and ends with / sign.
 * string.match(substring)
 */

let stringSix ="love";
let patternOne = /love/;
console.log(stringSix.match(patternOne));
//['love', index: 0, input: 'love', groups: undefined]

/**let us extract numbers from text using a regular expression. */
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/;

console.log(txt.match(regEx));

/***********************18.repeat()********************/
/**it takes a number as argument and it returns the repeated version of the string.
 * syntax: string.repeat(n)
 */

let stringSeven = "love";
console.log(stringSeven.repeat(10))



