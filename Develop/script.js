// Assignment code here
function generatePassword(characteramount, lowercase, uppercase, numeric, specialcharacter) {
  var pickNumber = window.prompt("How many characters? Must be at least 8, Maximum of 128");
  console.log(typeof pickNumber);
  var num = parseInt(pickNumber);
  console.log(num);
  if (pickNumber < 8 || pickNumber > 128) {
    window.confirm('Invalid response please try again.');
    generatePassword();
    return;
  }
  console.log(pickNumber);
  var lowerCase= window.confirm("Do you want to include lowercase?");
  console.log(lowerCase);
  var upperCase=window.confirm("Do you wnat to include uppercase?");
  var numeric=window.confirm(' Do you want to include number?');
  var specialChar=window.confirm('Do you want to include special character?');
  if (lowerCase == false && upperCase==false && numeric == false && specialChar == false) {window
    generatePassword();
 }
 return "";
}
//window.prompt "how many character 8 to 128 " link to the functio generate password
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
