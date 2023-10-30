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


function generatePassword() {
  // var index = Math.floor(Math.random() * alphabet.length);
  // var randAlphabet = alphabet[index];
  // var options = Math.floor(Math.random() * specialCharacter.length)
  // var randSCharacters = specialCharacter[options];
  // var randNumber = Math.floor(Math.random() * numbers.length);

  var characters = window.confirm("Do you want the password to have Lowercased Characters")
  var numeric = window.confirm("Do you want the password to have Numbers?");
  var Uppercase = window.confirm("Do you want the password to have Uppercased Characters?");
  var special = window.confirm("Do you want the password to have Special Characters");

  var minAmount = window.prompt("Minimum passcode?")
  var combinedCharacters = [];

  if (numeric) {
    // combinedCharacters.concat(numbers);
    combinedCharacters = combinedCharacters + numbers;
  }

  if (Uppercase) {
    // combinedCharacters.concat(upperCasedCharacters);
    combinedCharacters = combinedCharacters + upperCasedCharacters;
  }

  if (special) {
    // combinedCharacters.concat(specialCharacters);
    combinedCharacters = combinedCharacters + specialCharacters;
  }

  if (characters) {
    // combinedCharacters.concat(alphabet);
    combinedCharacters = combinedCharacters + alphabet;
  }

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
    // writePassword();
    window.alert(combinedCharacters);
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();