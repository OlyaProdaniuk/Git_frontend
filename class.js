// if statement - if less than 3 cases

const { arrayBuffer } = require("stream/consumers");


if(typeof number === 0){
    console.log(object);
}else if(condition1){
console.log(object);}
else(condition){
console.log(object);}

//switch when more than 3 cases. Important to use <DEFAULT> and <break> after each case. Строге порівяння.
// 

switch(typeof number){
    case 'number':
        console.log('one');
        break;
    case 'string':
        console.log('two');
        break;
    case 'undefined':
        console.log('undefined');
        break;
    case 'null':
        console.log('null');
        break;
    default: 
        console.log('invalid');
    }
// truthy value = number/not empty string/object/array/ function/ true

//falsy = 0, empty string, undefined, null, false

    switch(typeof number){
        case 'number':
        case 'string':
            console.log('truthy');
            break;
        case 'undefined':
        case 'null':
            console.log('falsy');
            break;
        default:
            console.log('This is invalid value');
        }

//ternary operator - одна перевірка або/або. 

const ifSelected = true
const value = ifSelected ? 'true' : 'falsy';

if(ifSelected){
    console.log('truthy');
}else{
    console.log('falsy');
}
const name = ''
const ifNameProvided = true

const text = `hello how are you today ${ifNameProvided ? name : 'user'}`

// цикли

// while and do while

let i = 0;

while(i < 5){
 
 console.log({i});
 i++
 if(i == 4)
 console.log(i + 5);
 break
 
}

//do while
do{
    i++
    console.log({1});


}while(i < 5)

//for
// 1) variable 2) condition 3) increment
// inside for can be switch case



for(let i = 0; i < 5; i++){
    console.log({i});
}

const testArray = [34, 5, 277, 19]


// testArray[0] - виводить 34

for(let i = 0; i < testArray.length; i++ ){
    console.log(array[i]);
}


//testArray.length - стосується всіх цифр

//decrement

for(let i = 5; i > 0; i--){
    console.log(i);
}