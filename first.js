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


/*
function statements
*/

function isTanyaNaughty() {
    return true;
}


console.log('Tanya is naughty: ' + isTanyaNaughty());

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
console.log(add('Best ', 'Tanya'));
/* function
expression
*/

var adder = function(a, b) {
    return a + b;
}

console.log(adder(10, 20));
console.log(adder('Sweet ', 'Arjun'));

//arrays
var arr = ['Tanya', 'Arjun', 'Vinod'];
console.log(arr);
//add to end of the array
arr.push('Vidhya');
console.log(arr);
//add to the start of the array
arr.unshift('Family');
console.log(arr);


var arr1 = [5, 10, 15];
//remove from the end of the array
arr1.pop();
console.log(arr1)
//remove from the start of the array
arr1.shift();
console.log(arr1);


//indexOf operator
var alphas = ['a', 'b', 'c', 'd', 'e'];
console.log(alphas.indexOf('c'));

//use of the ternary operator
var temperature = 28;
console.log(temperature > 30? 'Too Hot' : 'Ok temps');

/*
objects along with Methods
*/

var india = {
   capital : 'New Delhi',
   numStates : '29',
   yearOfIndependence : 1947,
   numUnionTerritories : '7',
   nationalBird : 'peacock',
   nationalAnimal : 'tiger',
   bestStates : ['Tamil Nadu', 'Kerela', 'Andhra Pradesh'],
   yearsSinceIndependence : function(currentYear) {
       this.ageOfNation = currentYear - this.yearOfIndependence;
   }
};

console.log(india);
india.yearsSinceIndependence(2018);
console.log(india.ageOfNation);












