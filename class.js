const obj = {
    name: 'Steve',
    'full name': 'Steve Harvey',
    hobbies: ['football', 'volleybal'],
    sayHello: () => console.log('hello')
}
console.log(obj['full name']);
obj['age'] = 45
obj.city = 'lviv'
console.log(obj);

//object prototypes

//methods
//Object.keys() - повертає масив з ключами обєкта

console.log('keys' ,Object.keys(obj));

console.log('keys modified' ,Object.keys(obj).map(x => `${x}!!!` ));


//Object.values повертають велюс

console.log('values' ,Object.values(obj));

console.log('values modified' ,Object.values(obj).map(x => `${x}!!!` ));

const results ={
    high: 100, 
    low: 20,
    medium: 60,
    average: 80,
}
const sum = Object.values

//Object.entries()

console.log(Object.entries(obj));

//Object.assign(results, obj)
console.log(Object.assign(results, obj));

obj.name = 'Dilan'


//Object.freeze() to prevent modification of object values

const freezeObj = Object.freeze(obj)

freezeObj.name = 'Geoff'
console.log(freezeObj);// nothing happened

//Object.seal() prevents new properties being added to object

//.isSealed()

//.isFrozen()

//.hasOwnProperty()

const sealObj = {
    name: 'Steve',
    'full name': 'Steve Harvey',
    hobbies: ['football', 'volleybal'],
    sayHello: () => console.log('hello'),
    favouriteWeather: 'summer',
}

console.log('hasOwnProperty' ,sealObj.hasOwnProperty('favouriteWeather'));

const student = {
    firstName: 'Alisa',
    secondName: 'Harvey',
    favoriteSubjects: {
        chemistry: '100',
        math: '90',
        geography: '50',
        history: '100',
    }
}
const anotherStudent = {...student}
console.log('check students' , student === anotherStudent);

student.secondName = 'Madison'

student.favoriteSubjects.geography = '80'
console.log(student.favoriteSubjects.geography, anotherStudent.favoriteSubjects.geography);


//JSON.parse(JSON.stringify)

const anotherStudentV2 = JSON.parse(JSON.stringify(student))

//деструктуризація - змінні з обєкту чи масиву 

const props = {
    user: {name: 'alina'},
    onClick: () => {},
    isAvailable: true,
    isLoading: false,
    isError: false,
    error: []
}
console.log('user', props.user);

// const user = props.user


const{user} = props



//for homwwork - Minimum: 1.1 Object.entries, 1.2 addDriver: () => {
   // drivers + name
//} obj.addDriver('new driver)
//obj.drivers
//['new driver] (look at THIS)

//1.3 isDriverIncluded: (name) => {
    //name in drivers (check array method)
//}
//1.4 

/* norma 1.1 alert, 1.2 
maximum 1.1 */