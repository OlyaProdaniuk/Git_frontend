//Мінімум
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let sum = 0.1 + 0.2;
alert( sum.toFixed(1) ); 

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let str = '1';
let number = 2;

console.log(+str + number);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.


let flashDriveVolume = 1000;
let files = 820;

let freeSpace = flashDriveVolume - files;
console.log(freeSpace);
let filesQuantity = flashDriveVolume / files;
console.log(Math.round(filesQuantity));

//Норма

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let amountOfMoney = 'x';
let chocolatePrice = 'y';
let calculateChange = 'x' % 'y';
let calculateChocolates = 'x' / 'y';
console.log(calculateChange);
console.log(calculateChocolates);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let num = 123;
let reverse = 0;
while(num !== 0){
  reverse = reverse*10;            
  reverse = reverse+(num%10);
  num = Math.trunc(num/10);
}
console.log(reverse);

//Максимум
// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

let twoMonthSum = prompt('Enter your deposit amount', '');
let annualRate = 5 / 100

let monthlyInterest = annualRate / 12;
alert(monthlyInterest)

let monthlyInterestDecimal = monthlyInterest * 100 
let finalSum = alert(monthlyInterestDecimal * 2)