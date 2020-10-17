// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays for the functions to pull from
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration to confirm password requirements from the user
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// This function prints the randomly generated password to the webpage
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This function generates a random password based off of user set requirements
function generatePassword() {

  // Prompt request password length from user
  var passwordLength = (prompt("How many characters long would you like your password to be?"));

  // While loop to insure the user keeps the password in the required range 
  while(passwordLength < 7 || passwordLength > 129) {
      alert("Please keep password length between 8-128 characters.");
      var passwordLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Alert the user the password length that was requested  
      alert("Your password will be "+ passwordLength + " characters long.");

    // Have the user confirm the password requirements
    var confirmSpecialCharacter = confirm("Click OK or press enter if you want your password to have special characters");
    var confirmNumberCharacter = confirm("Press OK or enter if you want your password to have number characters");    
    var confirmLowerCase = confirm("Press OK or enter if you want your password to have lowercase characters");
    var confirmUpperCase = confirm("Press OK or enter if you want your password to have uppercase characters");
    
      // While loop to confirm password requirements from the user
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumberCharacter === false) {
        alert("Please choose a character requirement for your password to be or press enter");
        var confirmSpecialCharacter = confirm("Press OK or enter if you want your password to have special characters");
        var confirmNumberCharacter = confirm("Press OK or enter if you want your password to have number characters");    
        var confirmLowerCase = confirm("Press OK or enter if you want your password to have lowercase characters");
        var confirmUpperCase = confirm("Press OK or enter if you want your password to have uppercase characters");   
    } 

      // Assign characters generated to the passwordCharacters Array
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumberCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

      //console.log(passwordCharacters)

      // Empty string that is filled by the passwordCharacters Array
      var randomPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        //console.log(randomPassword)
      }
      return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
