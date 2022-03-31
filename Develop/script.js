// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here
// prompt the user to choose the number of charcters in their password
var characterLength = Number(prompt("how many charcters would you like in your password?"));
  console.log(characterLength + typeof characterLength)

// If character length input meets the condtion of being a number between 8 and 128, it sets that as the password variable's length.
// Otherwise it alerts the user and returns to the set character length prompt 
if (characterLength >= 8 && characterLength <= 128){
  console.log("number in correct range: " + characterLength);
  characterLength = password.length;
} else {
  alert("you must enter a number between 8 and 128")
  Number(prompt("choose the password's character length"));
}

// make and empty string of random characters 
// var randomCharacters = " ";
// for every character category the user selects, that category will be added on to the random charcters string 
//  // Got this code from: geeksforgeeks, loop through each charcter in the password's length, at each position of the password, randomly select an index in the random characters string and add that charcter to the password.
//   for (var i = 0; i <= password.length; i++) {
//   var char = Math.floor(Math.random()
//         * randomCharacters.length);
                  
//     password += randomCharacters.charAt(char);     
//      }
// console.log(randomCharacters)
// console.log(password.length)

// confirm if they would like to have lowercase characters
var lowercaseLetters = confirm("Would you like to inclue lowercase letters?")
console.log(lowercaseLetters);
// if true, randomly select at least 1 lower case letter to be in the password
if (lowercaseLetters) {
var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
var randomLowercase = alphabetLower[Math.floor(Math.random() * alphabetLower.length)]
console.log(randomLowercase)
// randomCharacters += randomLowercase
}

// confirm if they would like to have uppercase charcters
var uppercaseLetters = confirm("Would you like to inclue uppercase letters?")
console.log(uppercaseLetters);
// if true, include at least 1 random uppercase letter in password
if (uppercaseLetters) {
  var alphabetUpper = alphabetLower.toUpperCase()

  var randomUppercase = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
  console.log(randomUppercase)
}


// confirm if they would like to include special characters
var specialCharacters = confirm("Would you like to include special characters?")
console.log(specialCharacters)
// if true, randomly select at least 1 special charcter to be in the password

// confirm if they would like to include numbers
var includeNumbers = confirm("Would you like to include numbers?")
// if true, randomly select at least 1 number to be in the password

//  Make sure the new password with it set length and random character preferences is rendered on the page

return password;
 };



// 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
