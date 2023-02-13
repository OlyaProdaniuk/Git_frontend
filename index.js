/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/

const products = [
  {
    name: "orange",
    quantity: 5,
    priceForPiece: "10",
    purchaseStatus: "yes",
    sumPrice: "50",
  },
  {
    name: "apple",
    quantity: 10,
    priceForPiece: "3",
    purchaseStatus: "no",
    sumPrice: "30",
  },
  {
    name: "lemon",
    quantity: 15,
    priceForPiece: "7",
    purchaseStatus: "yes",
    sumPrice: "105",
  },
  {
    name: "grapes",
    quantity: 2,
    priceForPiece: "40",
    purchaseStatus: "yes",
    sumPrice: "80",
  },
];

const boughtProducts = products.filter(
  (product) => product.purchaseStatus == "yes"
);
console.log(boughtProducts);
const notBoughtProducts = products.filter(
  (product) => product.purchaseStatus == "no"
);
console.log(notBoughtProducts);

/* Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
    в якому продукт, що ми шукаємо, буде відсутнім)*/

// const cars = [
//     { name: 'toyota', color: 'red', year: 2001},
//     { name: 'volvo', color: 'white', year: 2017},
//     { name: 'bmw', color: 'green', year: 1995},
// ]

const newProducts = [
  {
    name: "orange",
    quantity: 5,
    priceForPiece: "10",
    purchaseStatus: "yes",
    sumPrice: "50",
  },
  {
    name: "apple",
    quantity: 10,
    priceForPiece: "3",
    purchaseStatus: "no",
    sumPrice: "30",
  },
  {
    name: "lemon",
    quantity: 15,
    priceForPiece: "7",
    purchaseStatus: "yes",
    sumPrice: "105",
  },
  {
    name: "grapes",
    quantity: 2,
    priceForPiece: "40",
    purchaseStatus: "yes",
    sumPrice: "80",
  },
];

const removedProduct = newProducts.splice(1, 1);
console.log(removedProduct);
console.log(newProducts);

/*Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
    необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
    При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
    а кількості товарів стало 2, то сума буде 24.*/

const finalProducts = [
  {
    name: "orange",
    quantity: 5,
    priceForPiece: 10,
    purchaseStatus: "yes",
    sumPrice: 50,
  },
  {
    name: "apple",
    quantity: 10,
    priceForPiece: 3,
    purchaseStatus: "no",
    sumPrice: 30,
  },
  {
    name: "lemon",
    quantity: 15,
    priceForPiece: 7,
    purchaseStatus: "yes",
    sumPrice: 105,
  },
  {
    name: "grapes",
    quantity: 2,
    priceForPiece: 40,
    purchaseStatus: "yes",
    sumPrice: 80,
  },
];

function addProduct(array, newProduct) {
  const isRelevantArray =
    Array.isArray(array) &&
    array.every((product) => product.hasOwnProperty("name")) &&
    array.every((product) => product.hasOwnProperty("quantity")) &&
    array.every((product) => product.hasOwnProperty("priceForPiece")) &&
    array.every((product) => product.hasOwnProperty("sumPrice"));
  const isRelevantProduct =
    newProduct.hasOwnProperty("name") && newProduct.hasOwnProperty("quantity");
  if (isRelevantArray && isRelevantProduct) {
    newProduct.name = newProduct.name.toLowerCase();
    const productIndex = array.findIndex(
      (product) => product.name === newProduct.name
    );

    if (productIndex !== -1) {
      array[productIndex].quantity += newProduct.quantity;
      array[productIndex].sumPrice =
        array[productIndex].priceForPiece * array[productIndex].quantity;
    } else {
      array.push(newProduct);
    }
  } else {
    console.log("Invalid input!");
  }
}
addProduct(finalProducts, {
  name: "orange",
  quantity: 10,
  purchaseStatus: true,
  priceForPiece: 10,
  sumPrice: 50,
});
console.log(finalProducts);

//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

const productsSum = [5, 10, 15, 2];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = productsSum.reduce(sum_reducer);
console.log(sum);
