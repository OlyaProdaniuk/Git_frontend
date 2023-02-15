const passwordInput = document.getElementById("pass");

const { name: inputName, value: inputValue } = passwordInput;
console.log(`${inputName}, ${inputValue}`);
console.log(passwordInput);

const buttonPas = document.getElementById("button");
console.log(buttonPas);
buttonPas.style.backgroundColor = "pink";

const listItem = document.getElementsByClassName("list-item");
const colors = ["yellow", "pink", "red", "blue", "purple"];

for (let i = 0; i < listItem.length; i++) {
  switch (i) {
    case 0:
      listItem[i].style.backgroundColor = "yellow";
      break;
    case 1:
      listItem[i].style.backgroundColor = "pink";
      break;
    case 2:
      listItem[i].style.backgroundColor = "red";
      break;
    case 3:
      listItem[i].style.backgroundColor = "blue";
      break;
    case 4:
      listItem[i].style.backgroundColor = "purple";
      break;
    default:
      break;
  }
}

//innerHTML

buttonPas.innerText = "hi";
