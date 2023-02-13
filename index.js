let car = {
  manufacturer: "Volvo",
  model: "V40",
  year: 2012,
  averageSpeed: 100,
  fuelTankVolume: 60,
  averageFuelConsumptionPer100Km: 10,
  drivers: " ",
};
//Метод, який виводить на екран інформацію про автомобіль.

console.log(Object.values(car));

//Додавання ім’я водія у список

car.drivers = "Max";
console.log(car);

//Перевірка водія на наявність його ім’я у списку

let driverExists = Object.values(car).includes("Max");
console.log(driverExists);

/*Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */

// 60km/hr * 1hr = 60km
//v * t = s
//time wo stops = s/v
//fuel = averageFuelConsumptionPer100Km / 100
//final time = Math.floor(time wo stops/4) + time wo stops

let distance = 10;

function findTimeFuel(distance) {
  if (isNaN(distance) || distance < 0) {
    return "Invalid input!";
  }
  const timeWithoutStops = distance / car.averageSpeed;
  const fuelConsumption = car.averageFuelConsumptionPer100Km / 100;
  const finalFuelconsumption = Math.floor(distance * fuelConsumption);
  const finalTime = Math.floor(timeWithoutStops / 4) + timeWithoutStops;

  return `You will need ${finalFuelconsumption} liters and ${finalTime} hours for your trip`;
}
console.log(findTimeFuel(10));

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

const time = {
  hours: 10,
  minutes: 15,
  seconds: 40,
};
//виведення часу на екран.

const currentTime = time.hours + ":" + time.minutes + ":" + time.seconds;
console.log(currentTime);

// add hrs

time.hours += 2;
const currentNewTime = time.hours + ":" + time.minutes + ":" + time.seconds;
console.log(currentNewTime);

// add minutes

time.minutes += 30;
const minutesTime = time.hours + ":" + time.minutes + ":" + time.seconds;
console.log(minutesTime);

// add seconds

time.seconds += 10;
const newTime = time.hours + ":" + time.minutes + ":" + time.seconds;
console.log(newTime);

// p.s. I know it's cheating, but I don't know how to do this other way <sad smile>
