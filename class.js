//math operators

console.log(Math.ceil(4.1));//5 піднімає вверх
console.log(Math.round(4.5));//4 заокру
console.log(Math.floor(4.9));//4

console.log(Math.pow(3, 3));//27 = 3 * 3 * 3

console.log(Math.random());//довільне число
console.log(Math.random() * 10)

console.log(Math.min(10, 20, 9));// min integer
console.log(Math.max(10, 20, 9));//max integer

console.log(Max.abs(-10));//поверне 10

//arythmetic operators

let number = 5
console.log(number + 10); //etc
// + - / *
console.log(number ** 5); //5 в 5 ступені

console.log(number % 2); // залишок від 5/2=1

console.log(object);

//assignment operators

let newNumber = 10
newNumber += // -+ *= /=

//ternary operator

let ifFemale = true

let user = ifFemale ? 'woman' : 'men'

console.log(user);// буде жінка

const time = 'morning'
time === 'morning'? console.log('Good morning') : console.log('Good evening');

console.log(time);//поверне good morning

//methods перетворення

let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber + '765');// number + string = string

// number + number = number

console.log('30' + 3);// result 303 string

const element = '40'
const updatedElement = typeof element === 'string' ? +element : element;


Number.isNaN()//число Nan


isFinite

const finiteNumber = 20

console.log(isFinite(finiteNumber));

// true when number is finite
//false when number is not finite
//false when not a number


//comparison operator !!!

// > < >= <= == ===  повертає або тру або фолс


console.log(10 > 9); //true
console.log(7>8);
console.log(9 >= 9);
console.log(9 <= 9);

console.log(object);

console.log(20 == '20');// compare value -> true

console.log(20 === 20);// false because diffent types

console.log(20 != '20') //false
console.log(20 !== 20);//true

console.log(!false);//true

console.log(!!flase);//false

//logical operator (!, ||, && )

// || returns first true value

console.log('tea' || 'coffee');

//objects always true value
//empty string = false


//operator && returns last if both true, if at least 1 falsy then return falsy
const food = 'cucumber' && 'tomato'//returns tomato

console.log(food);

const eveningChoice = (undefined || null) && 'tea'
//1. undefined || null 

