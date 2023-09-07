// List of Character Arrays for the password
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [' ','!','"','#','$','%','&','(',')','*','+',',','-','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

//Function for password prompt, variable to store password length, parses string to Integer
function passwordCharOptions() {
  var passwordLength = parseInt(
    prompt('Enter a password length between 8 and 128 Characters'),
  );

//Variable to store Maximum and Minimum Password Lengths
var minLength = 8;
var maxLength = 128;

//Conditional Statement that checks requirements for a Password Number between 8 and 128 Characters or the prompt will end
if (Number.isNaN(passwordLength) || passwordLength < minLength || passwordLength > maxLength) {
    alert('Password length must be a number and be between 8 and 128 Characters');
    return null;
  }

//variables used to confirm and store Character Types
let passwordLowercase = confirm("Do you want to use Lowercase, Click Ok for Yes or Cancel for No")
let passwordUppercase = confirm("Do you want to use Uppercase, Click Ok for Yes or Cancel for No")
let passwordNumber = confirm("Do you want to use Numbers, Click Ok for Yes or Cancel for No")
let passwordSpecialC = confirm("Do you want to use Lowercase, Click Ok for Yes or Cancel for No");

//Conditional Statement that checks the user password for the minimum required characters or the prompt will end
  if (!passwordLowercase && !passwordUppercase && !passwordNumber && !passwordSpecialC) {
    alert('Password must have one Character Type');
    return null;
  }

//returns the user imput from the function passwordChaOptions
  return {
    passwordLength: passwordLength,
    passwordLowercase,
    passwordUppercase,
    passwordNumber,
    passwordSpecialC
  }
}

// Function to generate password
function generatePassword() {
// Variable userOptions to store previous function and possibleArrays to store empty array
  var userOptions = passwordCharOptions(); 
  var possibleArrays = [];

  if (userOptions.passwordLowercase) {
      possibleArrays = possibleArrays.concat(lowerCaseChar)
  }

  if (userOptions.passwordUppercase) {
    possibleArrays = possibleArrays.concat(upperCaseChar)
  }

  if (userOptions.passwordNumber) {
    possibleArrays = possibleArrays.concat(numberChar)
  }

  if (userOptions.passwordSpecialC) {
    possibleArrays = possibleArrays.concat(specialChar)
  }
    var genPassword = "";

    for (let i = 0; i < userOptions.passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleArrays.length);
    var randomChar = possibleArrays[randomNumber]
    genPassword += randomChar 
      
  }

  // Display password to the page
  return genPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
