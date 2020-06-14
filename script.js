// Assignment code here
function generatePassword() {
  var pw = '';

  // password can have any upper case letters, lower case letters,
  // numbers and special characters

  var str = '';
  var strUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var strLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var strDigitsAndSpecialChar = '0123456789!@#$%^&*()';
  

// Funcrion returns user response to for password length
  var getPwLen = function() {
    var response = prompt('Pls enter the length of password. Length should be between 1 and 124');
    if (response === "" || response === null || response <= 0 || response > 124) {
      window.alert("You need to provide a valid answer! Please try again."); 
      getPwLen();
    }
    return response;
  }

// Funcrion returns user response to include upper case letters
  var includeUpperCase = function() {
    var response = window.confirm('Do you want to include upper case letter in password?');
    console.log(response);
    return response;
  }

// Funcrion returns user response to include lower case letters
  var includeLowerCase = function() {
    var response = window.confirm('Do you want to include lower case letter in password?');
    console.log(response);
    return response;
  }

// Funcrion returns user response to include digits and special chars
  var includeDigitsAndSpecialChar = function() {
    var response = window.confirm('Do you want to include special char in password?');
    console.log(response);
    return response;
  }

  //prompt user to get password length
  var pwLen = getPwLen();
  var upperCase, lowerCase, specialChar;
  var pickLettersAndSpecialChar = function () {
    upperCase = includeUpperCase();
    if (upperCase) {
      str += strUpperCase;
      console.log(str);
    }
    lowerCase = includeLowerCase();
    if (lowerCase) {
      str += strLowerCase;
      console.log(str);
    }
  
    specialChar = includeDigitsAndSpecialChar();
    if (specialChar) {
      str += strDigitsAndSpecialChar;
      console.log(str);
    }
  }

  //prompt user to spcify upper case, lower case, digits and special char
  pickLettersAndSpecialChar();

  if (!upperCase && !lowerCase && !specialChar) {
      window.alert("You need to pick any combination of uppercase letters, lowercase letters and special chars for password! Please try again."); 
    pickLettersAndSpecialChar();
  }

  for (let i = 0; i < pwLen; i++) {
      var random = Math.floor(Math.random() * str.length);
      pw += str[random];
  }
  console.log(pw);
  return pw;
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
