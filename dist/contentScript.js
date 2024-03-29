/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.js ***!
  \********************************************/
// TODO: content script
// content_script.js
console.log("====================================");
console.log("content script injected");
console.log("====================================");

// function extractCredentials() {
//   const emailField = document.getElementsByTagName("#email");
//   const passwordField = document.querySelector("#password");

//   if (emailField && passwordField) {
//     const loginId = emailField.value;
//     const password = passwordField.value;
//     console.log("Email:", loginId);
//     console.log("Password:", password);
//   }
// }

// // Add event listener to the form submission
// const loginForm = document.querySelector("#login-form");
// loginForm.addEventListener("submit", extractCredentials);

let Field = document.getElementsByTagName("input");
console.log(Field);

const length = Field.length;

for (let i = 0; i < length; i++) {
  const Input = Field.item[i];
  console.log(Input);
  // if (Input.type == "email") {
  //   const email = Field[i].value;
  //   console.log(true);
  // }
  // if (InputType !== "password") continue;
  // if (InputType == "email") {
  //   const email = Field[i].value;
  //   console.log(email);
  // }
}

/******/ })()
;
//# sourceMappingURL=contentScript.js.map