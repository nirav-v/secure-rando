// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here

// ask if the user wants to set the password length
var passwordLengthOption = confirm("Would you like to set the password length?")
console.log("pw length option: " + passwordLengthOption); // return true if clicked ok button and false for cancel

// if they click OK when asked to choose the password length, then a prompt displays for them to set the length
// if they click cancel, it should proceed to the special characters prompt
if (passwordLengthOption == true) {
  var characterLength = Number(prompt("choose the password's character length"));
  console.log(characterLength + typeof characterLength)
} 

// If character length input meets the condtion of being a number between 8 and 128, it sets that as the password variable's length.
// Otherwise it alerts the user and returns to the set character length prompt 
if (characterLength >= 8 && characterLength <= 128){
  console.log("number in correct range: " + characterLength)
  // characterLength = password.length
} else {
  alert("you must enter a number between 8 and 128")
  Number(prompt("choose the password's character length"));
}










return password;
 };



// 


// if they CANCEL on the special characters option it writes the password to the DOM from there





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
