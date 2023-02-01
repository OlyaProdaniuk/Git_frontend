//Мінімум

//Запитай у користувача його вік і визначи, ким він є: 
//дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let userAge = prompt("How old are you?")

if(userAge >= 0 && userAge <= 10){
    console.log('Hi, kiddo!');
}else if(userAge >= 18 && userAge <= 59){
    console.log('Hello, adult!');
}else if(userAge >= 60 && userAge <= 100){
    console.log('Ahoj, grandpa!');
}else(userAge == NaN);{
    console.log('Please enter a number');
}

//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let userNumber = prompt("Please enter any number from 0 to 9")

switch(userNumber){
    case '0':
        console.log(')');
        break;
    case '1':
        console.log("!");
        break;
    case '2':
        console.log("@");
        break;
    case '3':
        console.log("#");
        break;
    case '4':
        console.log("$");
        break;
    case '5':
        console.log("%");
        break;
    case '6':
        console.log("^");
        break;
    case '7':
        console.log("&");
    case '8':
        console.log("*");
        break;
    case '9':
        console.log("(");
        break;
    default:
        console.log('out of range');
    }

//Підрахуй суму всіх чисел в заданому користувачем діапазоні.


firstNumb = prompt("Enter first number")
secondNumb = prompt("Enter second number")
let result = 0;

for(let i = firstNumb; i <= secondNumb; i++){
    result += i;
}
console.log(result);

//Норма

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let sumPaid = prompt("How much did you pay?")
let discountedSum;

if(sumPaid >= 200 && sumPaid <= 299){
    discountedSum = sumPaid - (sumPaid/100 * 3);
    console.log(discountedSum);
}else if(sumPaid >= 300 && sumPaid <= 499){
    console.log(sumPaid/100 * 5);
}else(sumPaid >= 500);{
    discountedSum = sumPaid - (sumPaid/100 * 7);
    console.log(discountedSum);
}


//Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
//При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
//Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let arrayNumbers = [10,-12,89,56,-83,8,90,-8]

let pos_count = neg_count = 0

for(let i = 0; i < arrayNumbers.length; i++){
      if (arrayNumbers[i] < 0){
       neg_count++;}
      else{
       pos_count++;}
    }
console.log(`The positive numbers in an array is ${pos_count}`)
console.log(`The negative numbers in an array is ${neg_count}`)

//Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » 
//і так до тих пір, поки користувач натискає OK.

let days = new Array();
	days[0] = "Monday";
	days[1] = "Tuesday";
	days[2] = "Wednesday";
	days[3] = "Thursday";
	days[4] = "Friday";
	days[5] = "Saturday";
	days[6] = "Sunday";
	
	
	alert(days.length);
	
	for (i = 0;i < days.length; i++)
		{
			confirm(`${days[i]}. Want to sea what's next?`)
		}