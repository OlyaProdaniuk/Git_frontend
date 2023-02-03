// syntax

//declarative f-ction - important to have "return". Hoisting is present (for var or function)

function sum(a, b){
    console.log({a, b}, a + b);
    return a + b 
}
console.log(sum(3,6));

const randomNumber = Math.floor(Math.random() * sum(3,6))
console.log(randomNumber);

//arrow function - for arrow 'return' optional, but if we use curly braces 'return' important

const sumArrow = (a, b) =>{
    return a + b
}
console.log(sumArrow(3,6));

//anonymus f-ction

const myFunc = function(a,b){
    return a + b
}

// no params

function sumNoParams(){
    return 3 + 6
}
const sumArrowNoParams = () => 3 + 6;

// arguments

function minusOperation (){
    console.log({arguments});
    let sum = 0

    arguments.map(x => sum += x)
}
console.log(minusOperation(9,4));

// same names for params

function test(a, a){
    return a + a
}
const testArrow = (a, a) => a + a

// return object

const objectReturn = () => ({name: 'Olya', age: 16})
console.log(objectReturn());

//default params (adding = 0)



const sumDefaultPar = (a, b, c = 0) => a + b + c;

// c = c || 0

console.log(sumDefaultParams(2, 5));

const fullName = (firtName='steve', lastName='madison') => `Your full name is ${firtName} ${lastName}`;
console.log(fullName());
console.log(fullName('christina', 'jean'));
console.log(fullName('christina'));

// function in function

function sumCallBack(a){
    console.log('sum', {arguments});{
    return a + b}
}

//замикання / closure

function cache({
    const cache = []
    return function(a){
        const number = 1000 + 20/100
    }
return 
})

// метод .hasOwnProperty

function cacheFunc(){
    const cache = {}
    console.log({cache});
    return function(a){
        console.log('inside', {cache});
        // a in cache
        if (cache.hasOwnProperty(a)) {
          return cache[a];
        }
        else {
          console.log('calc');
          let result = (1000 + a) / 100;
          cache[a] = result;
          return result;
        }
    }
}
const cachedResult = cacheFunc()
console.log(cachedResult(20));
console.log(cachedResult(20));

