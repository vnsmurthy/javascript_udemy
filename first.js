//demonstration of single line comment
var firstName = 'Tanya';
console.log(firstName + ' Hello World');
alert(firstName + ' Hello World');

//simple operator 
var year = 2018;
var age = 98;
var birthYear = year - age;

console.log(birthYear);


/**
 * multi line 
 * comment
 */

 /*code to show assignments go from right to left while 
 statements get evaluated from left to right. also demonstrates
 operator precedence
*/
 var x = y = 5 + 2 /10;
 console.log(x);
 console.log(y);

 /* strict equality check vs equality check with type coercion
 also demonstrates if else if else block
 */
 var age1 = 23; //a number
 var age2 = '23'; //a string

 if (age1 === age2) {
     console.log('this should not be logged');
 } else if (age1 == age2) {
     console.log('this should be logged');
 } else {
     console.log('this again should not be logged');
 }

//demonstration of the switch case construct
var occupation = 'chef';
switch(occupation) {
    case 'chef': 
      console.log(firstName + ' is a chef');
      break;
    case 'teacher':
      console.log(firstName + ' is a teacher');
      break;
    default: 
      console.log (firstName + ' is a musician');   
}


//truthy and falsy statements

/*
 undefined, null, 0 empty strings and NaN are all falsy values
 anything that is !falsy = truthy
 */
var myVar;

if (myVar) {
    console.log('myVar is undefined hence this should not be printed');
} 

myVar = null;

if (!myVar) {
    console.log('null is falsy so this should be printed');
} 

myVar = NaN;
if (!myVar) {
    console.log('told ya NaN is falsy');
}











