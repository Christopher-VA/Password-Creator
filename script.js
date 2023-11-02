// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var passwordGen = '';


function generatePassword() {
  passwordGen = '';
  var characters = window.confirm("Do you want the password to have Lowercased Characters");
  var numeric = window.confirm("Do you want the password to have Numbers?");
  var Uppercase = window.confirm("Do you want the password to have Uppercased Characters?");
  var special = window.confirm("Do you want the password to have Special Characters");

  var passAmount = window.prompt("Minimum passcode?")
  var combinedCharacters = [];

  if (numeric) {
    combinedCharacters = combinedCharacters.concat(numbers);
    
  }

  if (Uppercase) {
    combinedCharacters = combinedCharacters.concat(upperCasedCharacters);
  }

  if (special) {
     combinedCharacters = combinedCharacters.concat(specialCharacters);
  }

  if (characters) {
     combinedCharacters = combinedCharacters.concat(alphabet);
  }

  if (passAmount > 126) {
    window.alert("Too many characters!");
    return;
  }
  else if (passAmount < 8) {
    window.alert("Not enough characters!");
    return;
  }
  else {
    // writePassword();
    for (i=0; i < passAmount; i++){
      var randomCharIndex = Math.floor(Math.random() * combinedCharacters.length);
      var randomChar = combinedCharacters[randomCharIndex];
      passwordGen = passwordGen + randomChar;
    }
    return;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.value = passwordGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);