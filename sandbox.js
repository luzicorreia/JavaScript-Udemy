/* Inicio JavaScript - 23/11/2020
DataTypes:
=========
Number  - 1, 2, 3, 100, 3.14
String  - 'Hello, guys', "luzicorreia@life.co.uk"
Boolean - True / False
Null    - Explicity set a variable with NO value
Undefined   - For variables that have not yet been defined
Object  - Complex data structures - Arrays, Dates, Literals
Symbol  - Used with objects

// strings
console.log('Hello, Guys');

let email = 'luzi@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characteres
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

//commom string methods = 25/11/2020
let email = 'mario@thenetninja.co.uk';

// let result1 = email.lastIndexOf('n');

// let result1 = email.slice(2,10);

// let result1 = email.substr(4,10);

// let result1 = email.replace('m', 'w');

// let result1 = email.replace('n', 'w');   Nota: Quando há mais de uma variavel, altera APENAS a pimeira que encontrar

console.log(result1);

// NUMEROS
let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//math operations: +, -, /, **, %

//console.log(10/2);
//let result2 = radius % 3;
let result2 = pi * radius**2;
console.log(result2);

// order of operations: BIDMAS (Blaktes, Index, Division, Multiply, Adiction, Subtraction)

// let result = 5 *  (10-3)**2;
// console.log(result3);

*/
let likes = 10;
// likes = likes + 1;
// operations shorthand 
// likes++;
// likes--;

// likes += 10;
// likes -= 10;
// likes *= 10;
// likes /= 10;

// console.log(likes);
 
// NaN - Not a number

// console.log(5* 'hello');
// console.log(5* @);

//Concatenando texto e variavel numerica
 let result4 = 'the blog has ' + likes + ' likes';
 console.log(result4);

 



 console.log(likes);

