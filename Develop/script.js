// Assignment code here
// would start like var writePassword()
// var generateBtn = document.querySelector("#generate");
// function generatePassword() {
// // Critia prompts for password to generate
// var uppercase = confirm("Your password should have uppercase letters! Click OK to continue");
// var lowercase = confirm("Your password should have lowercase letters! Click OK to continue");
// var symbols = confirm("Your password should have a symbol! Click OK to continue");
// var numbers = confirm("Your password should have a number! Click OK to continue");
// var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");


// var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
// var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
// var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
// var numeric ="0123456789"
// var multiSelect =[]


// var writePassword

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
