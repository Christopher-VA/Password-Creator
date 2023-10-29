// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '?']

function selector() {
  var index = Math.floor(Math.random() * alphabet.length);
  var randAlphabet = alphabet[index];
  var options = Math.floor(Math.random() * specialCharacter.length)
  var randSCharacters = specialCharacter[options];
  var randNumber = Math.floor(Math.random() * numbers.length);

  var numeric = window.confirm("Do you want the password to have Numbers?");
  var Uppercase = window.confirm("Do you want the password to have Uppercase?");
  var special = window.confirm("Do you want the password to have Special Characters");


  if (numeric = true) {
  }
}






// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  var minAmount = window.prompt("Minimum passcode?")

  if (minAmount > 126) {
    window.alert("Too many characters!");
    writePassword();
    return
  }
  else if (minAmount < 8) {
    window.alert("Not enough characters!");
    writePassword();
    return
  }
  else {
    selector();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);