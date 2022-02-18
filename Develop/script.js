// Assignment code here
// var resultEl = document.getElementById('password')
// var characterLengthEl = num
// var lowerCaseEl = lowerCase
// var upperCaseEl = upperCase
// var numberEl = numeric
// var specialCharEl = specialChar
// var generateEl = generateBtn

// var randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   Symbol: getRandomSymbol
// };

// function getRandomLower () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log(getRandomLower());

// function getRandomUpper () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// console.log(getRandomUpper());

// function getRandomNumber () {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log(getRandomNumber());

// function getRandomSymbol() {
//   return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
// }
// console.log(getRandomSymbol());
// function arrayFromLowToHigh(low, high){

//   var array = []
//   for (let i = low; i <= high; i++){
//     array.push(i)
//   }
//   return array;
// }

// const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
// const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
// const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
// const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function generatePassword() {
  var pickNumber = window.prompt(
    "How many characters? Must be at least 8, Maximum of 128"
  );
  console.log(typeof pickNumber);
  var num = parseInt(pickNumber);
  console.log(num);

  if (
    pickNumber < 8 ||
    pickNumber > 128 ||
    pickNumber == "" ||
    pickNumber == null
  ) {
    window.alert("Invalid response, please try again.");
    return generatePassword();
  }
  console.log(pickNumber);

  var lowerCase = window.confirm("Do you want to include lowercase?");
  console.log(lowerCase);

  var upperCase = window.confirm("Do you want to include uppercase?");
  console.log(upperCase);

  var numeric = window.confirm(" Do you want to include number?");
  console.log(numeric);

  var specialChar = window.confirm("Do you want to include special character?");
  console.log(specialChar);

  if (
    lowerCase == false &&
    upperCase == false &&
    numeric == false &&
    specialChar == false
  ) {
    window.confirm("Must pick AT LEAST one characteristic");
    return generatePassword();
  }

  var possibleCharCode = [];

  if (lowerCase) {
    possibleCharCode = possibleCharCode.concat(lowerCasedCharacters);
  }
  if (upperCase) {
    possibleCharCode = possibleCharCode.concat(upperCasedCharacters);
  }
  if (numeric) possibleCharCode = possibleCharCode.concat(numericCharacters);
  if (specialChar)
    possibleCharCode = possibleCharCode.concat(specialCharacters);
  console.log(possibleCharCode);
  var password = "";
  for (let i = 0; i < pickNumber; i++) {
    var passwordChar =
      possibleCharCode[Math.floor(Math.random() * possibleCharCode.length)];
    password += passwordChar;
  }
  console.log(password);
  return password;
}

//window.prompt "how many character 8 to 128 " link to the function generate password
//if valid answer move to next prompt, if not then try again return to first prompt
//next prompt is lowercase? then uppercase prompt etc..
//if no prompt choosen, return to first prompt
//execute by clicking the generate password button

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
