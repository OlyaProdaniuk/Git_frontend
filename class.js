const sayHi = () => console.log("hi");

const openButton = document.getElementById("button");
console.log(openButton);
const modal = document.getElementById("modal");

// const openCloseModal = () => {
//   openModalButton.innerText =
//     openModalButton.innerText === "Open" ? "Close" : "Open";
//   modal.style.display = openModalButton.innerText === "Open" ? "none" : "block";
//   modal.className = modal.className === "hidden" ? "block" : "hidden";
// };

// modal.style.display = "none";

//practice

const inputPass = document.getElementById("password");
const shownPassword = document.getElementById("shown-password");
shownPassword.style.display = "none";
const passwordBtn = document.getElementById("password-btn");
console.log(shownPassword);

const displayPassword = () => {
  shownPassword.innerText += password.value;
  shownPassword.style.display = "block";
  shownPassword.innerText = "hide password";
  passwordBtn.style.innerText =
    passwordBtn.style.innerText === "none" ? "block" : "none";
};

passwordBtn.addEventListener("click", displayPassword);

const passwordAsTyped = document.getElementById("password");

passwordAsTyped.addEventListener("click", function () {
  if (passwordAsTyped.getAttribute("type") === "password") {
    passwordAsTyped.setAttribute("type", "text");
  } else {
    passwordAsTyped.setAttribute("type", "password");
  }
});
