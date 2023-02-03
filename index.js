//Напиши всі можливі варіанти створення функцій.

//Function declaration - allows hoisting

function declaration (a){
   return a
}

// Function expression 

const expression = function(a){
   return a
}

// Arrow function

let func = (arg1, arg2, arg3) => expression;



//Створи функцію, яка буде виводити кількість переданих їй аргументів.

function func1(a, b, c) {
    console.log(func1.length);
  }
 console.log(func1());

/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

let frstNum = prompt("Please enter number")
let scndNum = prompt("Please enter number")

function twoNumbers(a, b){
    if(a < b){
    console.log(-1);
}else if (a > b){
    console.log(1);
}else if (a === b){
console.log(0);
}else (a === NaN || b === NaN);{
    return NaN;
}}
console.log(twoNumbers(5, 6))

//Напиши функцію, яка обчислює факторіал переданого їй числа.

//4! = 1 * 2 * 3 * 4 * 

function factorial (num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }}

console.log(factorial (8));

/*Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/
let firstNum = prompt("Please enter first number")
let secondNum = prompt("Please enter second number")
let thirdNum = prompt("Please enter third number")

let result = String(firstNum) + String(secondNum) + String(thirdNum)

function concatenation (a, b, c){
    if(a !== isNaN && b !== isNaN && c !== isNaN){
    return +result;
} else (a === isNaN || b === isNaN || c === isNaN)
    return("Please enter valid number")
    
}
console.log(concatenation());

/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/


const rectangularArea = (a = 0, b = 0) => {
    if(b == 0){
        return a * a
    }
    return a * b
};