// Assignment code here

// // Critia prompts for password to generate

// var uppercase = confirm("Your password should have uppercase letters! Click OK to continue");
// var lowercase = confirm("Your password should have lowercase letters! Click OK to continue");
// var symbols = confirm("Your password should have a symbol! Click OK to continue");
// var numbers = confirm("Your password should have a number! Click OK to continue");
// var passKey = prompt("Password must be between 8 and 128 characters! Click OK to continue");

// // allowable password variables

// var uppercaseL = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
// var lowercaseL ="abcdefghijklmnopqrstuvwxyz";
// var symbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
// var numbers ="0123456789"
// var multiSelect =[];


// // password match criteria

// if (passKey < 8 || passKey > 128) {
// alert("Password does not meet the criteria")
// var passKey = prompt ("Password must be between 8 and 128 characters"); }

// if (uppercaseL === false && lowercaseL === false && symbols === false && numbers
// === false) {
//  return "Password does not meet the criteria"} 

// var writePassword = function () {  
//   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var passKey;

//   if(passKey <8 || passKey > 128) {
//     alert ("Password does not meet criteria");
//     var passKey = prompt("Password must be between 8 and 128 characters in length");
//   }

//   for (var i = 0; i <= passKey; i++) {
//     var randomPass = Math.floor(Math.random() * chars.length);
//   }
// }


function generatePassword () {
   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var minLength = 8;
   var maxLength = 128;

   var passwordLength = Math.floor(Math.random() * (maxLength - minLength +1)) + minLength;
    
    let password = prompt ("Enter password between 8 and 128 characters")
      console.log(password);
    console.log ("You clicked the button")
  
//1. Prompt the user for the password criteria
//    a. Password Length 8 - 128
//    b. Lowercase, uppercase, numbers, special characters


//2. Valadate the imput


//3. Generate Password based on criteria
  for (let i = 0; i < passwordLength; i++) {
   var randomPass = Math.floor(Math.random() * chars.length);
   password += chars[randomPass];
  }


//4. Display password to the page
  return"Generated password goes here";
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
