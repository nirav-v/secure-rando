// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
var alphabetUpper = alphabetLower.toUpperCase()
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "1234567890"

// candidates will be a list of all the possible data types that the user chooses (lowercase, uppercase, numbers etc.)
var candidates = " "
// char will be the randomly generated character in the final candidates string
var char = " "


function generatePassword() {
  var password = "password: ";
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

// confirm if they would like to have lowercase characters
var includeLowercase = confirm("Would you like to inclue lowercase letters?")
console.log(includeLowercase);
// if true, randomly select at least 1 lower case letter to be in the password
if (includeLowercase) {
candidates += alphabetLower
var randomLowercase = alphabetLower[Math.floor(Math.random() * alphabetLower.length)]
console.log(randomLowercase)
char += randomLowercase
password += char
}

// confirm if they would like to have uppercase charcters
var includeUppercase = confirm("Would you like to inclue uppercase letters?")
console.log(includeUppercase);
// if true, include at least 1 random uppercase letter in password
if (includeUppercase) {
  var randomUppercase = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
  console.log(randomUppercase)
}


// confirm if they would like to include special characters
var includeSpecialCharacters = confirm("Would you like to include special characters?")
// if true, randomly select at least 1 special charcter to be in the password
if (includeSpecialCharacters) {
  var randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  console.log(randomSpecialCharacter)
}

// confirm if they would like to include numbers
var includeNumbers = confirm("Would you like to include numbers?")
// if true, randomly select at least 1 number to be in the password
if (includeNumbers) {
var randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
console.log(randomNumber)
char += randomNumber
password += char
}

// use the charcterLength to randomly select the correct number of characters
while(password.length < characterLength){
  char = candidates[Math.floor(Math.random() * candidates.length)]
  password += char
}

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
