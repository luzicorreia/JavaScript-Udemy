// BOOLEANS & COMPRARIONS
console.log(true, false, "true", "false" );

// METHODS CAN RETURN BOOLEANS
let email = 'luig@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('@'); 
//let result = email.includes('!');

let result2 = names.includes('luigi');
console.log(result2);


//CONSOLE.LOG(RESULT)

//COMPARISON OPERATORS
let age = 25;

//console.log(age == 25)
//console.log(age == 30)
//console.log(age != 30)
//console.log(age > 20)
//console.log(age < 20)
//console.log(age <= 25)
//console.log(age >= 25)

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');  /*  o JavaSript diferencia letras maiusculas e minusculas) */ 
console.log(name > 'crystal'); /* considera a primeira letra do alfabeto ( 's' vs 'c') */
console.log(name > 'Shaun');   /* letra minuscula tem valor MAIOR que letra minuscula */
console.log(name > 'Crystal');
