// Assignment code here
function arrayFromLowToHigh(low, high){

  var array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array;
}

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

function generatePassword(characteramount, lowercase, uppercase, numeric, specialcharacter) {

  var characterAmount = (1,128);
  String.fromCharCode(65);
  console.log(LOWERCASE_CHAR_CODES);

  var pickNumber = window.prompt("How many characters? Must be at least 8, Maximum of 128");
  console.log(typeof pickNumber);
  var num = parseInt(pickNumber);
  console.log(num);

  if (pickNumber < 8 || pickNumber > 128 || pickNumber == "" || pickNumber == null) {
    window.alert('Invalid response, please try again.');
    return generatePassword();
  }
  
  console.log(pickNumber);
  var lowerCase= window.confirm("Do you want to include lowercase?");
  console.log(lowerCase);
  var upperCase=window.confirm("Do you want to include uppercase?");
  console.log(upperCase);
  var numeric=window.confirm(' Do you want to include number?');
  console.log(numeric);
  var specialChar=window.confirm('Do you want to include special character?');
  console.log(specialChar);
debugger;
  var charCodes = LOWERCASE_CHAR_CODES
  if(upperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if(numeric) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if(specialcharacter) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
  var passwordCharacters = []
  for (let i = 0; i < characterAmount, i++) {
    var characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(String.fromCharCode(charCodes))
  }
    return passwordCharacters.join('');

  if (lowerCase == false && upperCase== false && numeric == false && specialChar == false) {
    window.confirm('Must pick AT LEAST one characteristic')
    return generatePassword();
 }
  };
  

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
