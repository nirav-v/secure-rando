// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "1234567890"
var characterLength = false;
var includeLowercase = false;
var includeUppercase = false;
var includeSpecialCharacters = false;
var includeNumbers = false;
// candidates will be a list of all the possible data types that the user chooses (lowercase, uppercase, numbers etc.)
var candidates = "";
// char will be the randomly generated character in the final candidates string
var char = "";

  var password = "";
  // TODO: add code to generate the password here
// prompt the user to choose the number of charcters in their password
var characterLength = Number(prompt("How many characters would you like in your password?"));

// If character length input meets the condtion of being a number between 8 and 128, it sets that as the password variable's length.
// Otherwise it alerts the user and returns to the set character length prompt 
// if (characterLength < 8 || characterLength > 128){
//   alert("you must enter a number between 8 and 128")
//   Number(prompt("choose the password's character length"));

while (characterLength < 8 || characterLength > 128){
  alert("you must enter a number between 8 and 128")
  characterLength = Number(prompt("How many characters would you like in your password??"));
}

// confirm if they would like to have lowercase characters
var includeLowercase = confirm("Would you like to inclue lowercase letters?")
// if true, randomly select at least 1 lower case letter to be in the password
if (includeLowercase) {
  var randomLowercase = alphabetLower[Math.floor(Math.random() * alphabetLower.length)]
  // add the chosen character type string to the candidates list
  candidates += alphabetLower
  // ensure that the password includes at least one random character from each type selected by the user
  char = randomLowercase
  password += char 
}

// confirm if they would like to have uppercase charcters
var includeUppercase = confirm("Would you like to inclue uppercase letters?")
// if true, include at least 1 random uppercase letter in password
if (includeUppercase) {
  var randomUppercase = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
  candidates += alphabetUpper
  char = randomUppercase
  password += char
}

// confirm if they would like to include special characters
var includeSpecialCharacters = confirm("Would you like to include special characters?")
// if true, randomly select at least 1 special charcter to be in the password
if (includeSpecialCharacters) {
  var randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  candidates += specialCharacters;
  char = randomSpecialCharacter
  password += char
}

// confirm if they would like to include numbers
var includeNumbers = confirm("Would you like to include numbers?")
// if true, randomly select at least 1 number to be in the password
if (includeNumbers) {
var randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
console.log(randomNumber)
candidates += numbers;
char = randomNumber;
password += char;
console.log(password)
}

// randomly select an integer wihtin the length of the candidates list 
while(password.length < characterLength){
  char = candidates[Math.floor(Math.random() * candidates.length)]
  password += char;
}

if (candidates.length === 0){
  alert("please include at least one character type to generate your password")
  password = "please generate a password with at least one character type";
};

//  Make sure the new password  is rendered on the page
return password;
 };


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
