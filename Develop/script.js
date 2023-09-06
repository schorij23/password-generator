// List of Character Arrays for the password
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ':', '.', '-', '_', '/',];

//function for password prompt and variable to store password length
function passwordCharOptions() {
  var passwordLength = parseInt(
    prompt('Enter password length between 8 and 128 Characters'), 12
  );

//condition to make sure password is a number and between 8 and 128 Characters  
  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be a number and be between 8 and 128 Characters');
    return null;
  }

//variables used to confirm and store Character Types
let passwordLowercase = confirm("Do you want to use Lowercase, Click Ok for Yes")
let passwordUppercase = confirm("Do you want to use Uppercase, Click Ok for Yes")
let passwordNumber = confirm("Do you want to use Numbers, Click Ok for Yes")
let passwordSpecialC = confirm("Do you want to use Lowercase, Click Ok for Yes");
    
  if (!passwordLowercase && !passwordUppercase && !passwordNumber && !passwordSpecialC) {
    alert('Must have one Character Type');
    return null;
  }

  return {
    passwordLength: passwordLength,
    passwordLowercase,
    passwordUppercase,
    passwordNumber,
    passwordSpecialC
  }
}

//3. Generate Password based on criteria
function generatePassword() {
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

  //4. Display password to the page
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
