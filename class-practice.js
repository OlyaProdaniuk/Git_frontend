// // 1  ask user an operator, number, and another number. 
// //Based on operator perform action and provide result
// //console.log(`${number1} + ${number2} = ${result}`);
// // in case none of the above console log unrecognized


let operator = prompt("Please enter operator")
let firstNumber = prompt("Please enter number")
let secondNumber = prompt("Please enter next number")
let result

switch (operator) {
    case '+' :
        result = +firstNumber + +secondNumber;
        console.log(`${firstNumber} + ${secondNumber} = ${result}`);
        break;
    case '-' :
            result = +firstNumber - +secondNumber;
            console.log(`${firstNumber} - ${secondNumber} = ${result}`);
            break;

    default: 
    console.log("unrecognized");
        break;
}




// // 2 write check if user enters either strawberry, 
// //rassberry or blueberry console log berry,
// // enters potato or carrot or cucumber console log vegetable
// // enters mango, orange or dragon fruit console log fruit
// // in case none of the above console log unrecognized

// // let food = prompt("Please enter what you'd like to eat")

switch(food){
    case 'strawberry':
    case 'rassberry':
    case 'blueberry':
        console.log('berry');
        break;
    case 'potato':
    case 'carrot':
    case 'cucumber':
        console.log('vegetable');
        break;
    case 'mango':
    case 'orange':
    case 'dragon fruit':
        console.log('fruit');
        break;
    default:
        console.log('unrecognised');}

//      //3. Check if a number is odd or even in JavaScript

    // let number = prompt('Enter your number: ')

    if (number % 2 == 0 ){
    console.log('The number is even');}
    else{
        console.log('Number is odd');
    }

    number % 2 == 0? console.log('The number is even') : console.log('Number is odd');
    

//     //4. Check if input variable is a number or not

    let inputVariable = prompt('Please enter text or number: ')

    if(inputVariable == typeof num){
        console.log("It's a number");
    }else if(inputVariable !== NaN){
        console.log("It's text");
    }else{
        console.log("I can't recognise");
    }
    
    const isNumber = isNaN(inputVariable)? "I can't recognise" : "It's a number"
    console.log(isNumber);
    
    // statement? true : false
    
    // 5. Find the largest of three number
    let number1 = 210;
    let number2 = 105;
    let number3 = 114;
    let largest;

    if(number1 >= number2 && number1 >= number3) {
        largest = number1;
    }
    else if (number2 >= number1 && number2 >= number3) {
        largest = number2;
    }
    else {
        largest = number3;
        console.log(number3);
        console.log(largest);
    }
    console.log("The largest number is " + largest);


    //6. Find the a number is present in given range

    let someNumber = prompt("Enter your number from 1 to 10")
    let isNumberInRange = someNumber >= 1 && someNumber <=10? "You're in  my range" : "Go home";
    console.log(isNumberInRange);
    if(someNumber >= 1 && someNumber <=10){
        console.log("You're in  my range");
    }else{
        console.log("Go home");
    }

    //7. Print “S grade” if marks is between 90 and 100.
    
   // Print “A grade” if marks is between 80 and 90.
   // Print “B grade” if marks is between 70 and 80.
   // Print “C grade” if marks is between 60 and 70.
   // Print “D grade” if marks is between 50 and 60.
   // Print “E grade” if marks is between 40 and 50.
   // Print “Student has failed” if marks is between 0 and 40.
   // Else print “Invalid marks”.
    let grade = prompt("What's your grade")

    switch(true){
        case grade > 90 && grade <= 100:
            console.log('S grade');
            break;
        case grade > 80 && grade <= 90:
            console.log('A grade');
            break;
        case grade > 70 && grade <= 80:
            console.log('B grade');
            break;
        default: 
        console.log('Student has failed');
    }


    const month = prompt('Enter a month:')
const monthNormalized = month.toLowerCase();

switch (monthNormalized) {
    case 'february':
        console.log(28);
        break;

    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(30);
        break;

    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(31);
        break;

    default:
}