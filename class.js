// arrays methods

// pop, push, shift, unshift


const testArray = [1, 2, 3, 4]
testArray.push(5)

//Array.map() - returns new array with result provided function on every element inthis array

const students = ['jeff', 'chris', 'agi']

const updatedStudents = students.map(student => `${student}!`)


const users = [
    {name: 'steph', age: 24},
    {name: 'chris', age: 15},
    {name: 'agi', age: 21}
]

// const updatedUsers = users.map((user)) => {
//     console.log({user});
//     return `${user.name}!`
// }

// console.log(updatedUsers);

const updatedUsers = users.map

const extendedUsers = [
    { name: 'steph', age: 24, city: 'Lviv', phoneNumber: '53565623534', country: 'Ukraine', street: 'lesi ukrainky' },
    { name: 'jeff', age: 32, phoneNumber: '53565623534', country: 'Ukraine' },
    { name: 'agi', age: 11, city: 'Lviv', phoneNumber: '53565623534', country: 'Ukraine', },
    { name: 'chris', age: 20, city: 'Lviv', country: 'Ukraine', street: 'lesi ukrainky' },
]

const updatedExtendedUsers = users.map((user) =>{
    console.log({user});
    return  {...user,name: `${user.name}!`}
})

// array.filter - 

const filteredStudents = students.filter(student => student !== 'agi') // поверни студентів,які не агі

const userss = [
    {name: 'steph', age: 24},
    {name: 'jeff', age: 32},
    {name: 'agi', age: 11},
    {name: 'chris', age: 20},
    {name: 'fill', age: 24},
    {name: 'lili', age: 32},
    {name: 'megan', age: 11},
    {name: 'john', age: 20},
    {name: 'steve', age: 41},
    {name: 'jenny', age: 45},
]

const underTwentyFive = userss.filter(user => user.age <= 25);// user.age to address each object
console.log({underTwentyFive});

const between25and40 = userss.filter(user => user.age >= 25 && user.age <= 40)
console.log({between25and40});
const olderThan40 = userss.filter(user => user.age >= 40)
console.log({olderThan40});

// under 25 => ['jenny', ...]
// beetween 25 and 40 [] => ['jenny', ...]
// older than 40 => ['jenny', ...]
// under 25 => [{name:'jenny', age: 43}, ...]
// beetween 25 and 40 [] => ['jenny', ...]
// older than 40 => ['jenny', ...]
const usersBelow25Names = users.filter(user => user.age < 25).map(user => user.name);
console.log({usersBelow25Names});

const users25To40Names = users.filter(user => user.age >= 25 && user.age <= 40).map(user => user.name);
console.log({users25To40Names});

const usersOver40Names = users.filter(user => user.age > 40).map(user => user.name);
console.log({usersOver40Names});


//or

const userssUnder25 = users.filter(user => user.age < 25)

//reduce()

// Array.find() - знаходить перше значення, коли треба багато параметрів - filter()

const residents = [
    { name: 'steph', age: 24, city: 'Lviv', phoneNumber: '53565623534', country: 'Ukraine', street: 'lesi ukrainky' },
    { name: 'jeff', age: 32, phoneNumber: '53565623534', country: 'Ukraine' },
    { name: 'agi', age: 11, city: 'Lviv', phoneNumber: '53565623534', country: 'Ukraine', },
    { name: 'chris', age: 20, city: 'Lviv', country: 'Ukraine', street: 'lesi ukrainky' },

]

const residentSteph = residents.find(resident => resident.name === 'steph')
console.log(residentSteph);

//Array.indexOf() - значення по індексу

const studentsList = ['agi', 'jeff', 'jeff', 'agi']

console.log(studentsList.indexOf('agi'));

//Array.lastIndexOf() - знаходить з кінця

const residentos = [
    { name: 'steph', age: 24, city: 'Lviv', phoneNumber: '53565623534', country: 'Ukraine', street: 'lesi ukrainky' },
    { name: 'jeff', age: 32, phoneNumber: '53565623534', country: 'Ukraine' },
    { name: 'agi', age: 11, city: 'Kyiv', phoneNumber: '53565623534', country: 'Ukraine', },
    // this one indexOf
    { name: 'chris', age: 20, city: 'Lviv', country: 'Ukraine', street: 'lesi ukrainky' },
    { name: 'steph', age: 24, city: 'Lviv', phoneNumber: '53565623534', country: 'Ukraine', street: 'lesi ukrainky' },
    { name: 'jeff', age: 32, phoneNumber: '53565623534', country: 'Ukraine' },
    { name: 'agi', age: 11, city: 'Kyiv', phoneNumber: '53565623534', country: 'Ukraine', },
    // this one lastIndexOf
    { name: 'chris', age: 20, city: 'Lviv', country: 'Ukraine', street: 'lesi ukrainky' },
]

const firstIndex = residentos.map(resid => resid.age).indexOf(20)
console.log(firstIndex);

//findIndex()

console.log(residents.findIndex(resident => resident.age == 20));

//include() (true/ false)

console.log(studentsList.includes('agi'));

//splice() overwrites original array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const appleIndex = fruits.indexOf("Apple")

fruits.splice(2, 1, 'Lemon', 'Kiwi')
//first param index to start
// second how many elements to replace


fruits.splice(appleIndex, 0, "Lemon", "Kiwi", "Potato")
console.log({fruits});
console.log(fruits.indexOf("Potato"));

//with spread

//slice() - повертає копію частини масиви, яка нам потрібна !!!NOT SPLICE


const updatedFruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const lemonIndex = fruits.indexOf("Lemon")

updatedFruitss.splice("Banana", "Orange",)
