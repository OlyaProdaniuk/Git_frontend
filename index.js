const myList = document.createElement("OL");
myList.setAttribute("id", "myOl");
document.body.appendChild(myList);
myList.innerText = "List of fruits";

let data = [
  "kiwi",
  "apple",
  "lemon",
  "orange",
  "peach",
  "grapes",
  "strawberry",
  "raspberry",
  "banana",
  "blueberry",
  "watermelon",
  "mango",
  "pineapple",
  "cherry",
  "pear",
  "pomegranate",
  "blackberry",
  "plum",
  "apricot",
  "grapefruit",
];
let list = document.getElementById("myOl");
for (i = 0; i < data.length; ++i) {
  let li = document.createElement("li");
  li.innerText = data[i];
  list.appendChild(li);
}

//going through even and odd elements

const listItem = document.getElementsByTagName("li");

for (let i = 0; i < listItem.length; i++) {
  if (i % 2 === 0) {
    listItem[i].style.backgroundColor = "blue";
    listItem[i].style.color = "white";
    listItem[i].style.textAlign = "right";
  } else {
    listItem[i].style.backgroundColor = "pink";
    listItem[i].style.color = "black";
  }
}

listItem[0].innerHTML = `<h2>${data[0]}</h2>`;
listItem[listItem.length - 1].innerHTML = `<h2>${data[data.length - 1]}</h2>`;
listItem[0].style.textAlign = "center";
listItem[listItem.length - 1].style.textAlign = "center";
