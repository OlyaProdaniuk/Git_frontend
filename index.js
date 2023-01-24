// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let name = prompt('What is your name?', 'Type your name here');
alert("Hi,  " + name);

//Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

let age = prompt('What year were born?')
const currentYear = 2023;
let ageAnswer = currentYear - age;
alert(ageAnswer);

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

let sideLength = prompt('What is the length of the side of the square?', 'Type your answer here');
let squarePerimeter = sideLength * 4;
console.log(squarePerimeter);


