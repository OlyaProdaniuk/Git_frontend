// "use strict";

let name = 'peter';
let differentName = name;
differentName = 'steve';

console.log({name, differentName});

const user ={
    name: '',
    age: 20,
    addressOfLiving: '',
    'place of birth': 'Lviv'
}
console.log(user.age);
console.log(user['place of birth']); //

console.log(user.hobbies)

const woman = user;
const man = user;

woman.name = 'Vita';
man.age = 30;

console.log({user, woman, man});

// масиви пишуться в квадратних дужках

const array = [1, 2, 3, 4, 'string', true, undefined, null];

console.log({array}, array[0]);

// hoisting

// підняття наверх var

// scope: global, functional, block

function calculate(){
    var a = 2;
    var b = 3;
    return a + b

}
calculate()
console.log({a, b});

// if statement

// if(true){
//     var name ='vitalii';
// }
// console.log(name);

//loop

const testArray = [1, 2, 3, 4]
const copyArray = testArray
testArray[0] = 0
console.log({testArray, copyArray});
