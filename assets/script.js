// building of character arrays for the password
const upperCaseCodes =  arrayL2H(65, 90);
const lowerCaseCodes = arrayL2H(97, 122);
const numberCodes = arrayL2H (48, 57);
const symbolCodes = arrayL2H (33, 47)
     .concat(
    arrayL2H(58, 64)
)    .concat(
    arrayL2H(91,96)
);

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
  
  
passwordText.value = password;
  
 }

 // console prompts and confirms allow user to select character types
var generateBtn = document.querySelector("#generate");
const lengthChoice = Number (window.prompt("How many characters are required? 8-128 "));
const lowerChoice = confirm("Does the password require lower-case letters?");
const upperChoice = window.confirm("Does the password require upper-case letters?");
const numsChoice = window.confirm("Does the password require numbers?");
const spcChoice = window.confirm("Does the password require special characters?");
const password = generatePassword(lengthChoice, lowerChoice, upperChoice, numsChoice, spcChoice);
console.log(lengthChoice);

// concats all character types based on input
function generatePassword(lengthChoice, lowerChoice,
    upperChoice, numsChoice, spcChoice) {
        let codes = lowerCaseCodes
        if (lowerChoice) codes = codes.concat(lowerCaseCodes);
        if (upperChoice) codes = codes.concat(upperCaseCodes);
        if (numsChoice) codes = codes.concat(numberCodes);
        if (spcChoice) codes = codes.concat(symbolCodes);
        const passwordBuild = [];
    for (let i = 0; i < lengthChoice; i++) {
        const inputs = codes[Math.floor(Math.random() * codes.length)];
        passwordBuild.push(String.fromCharCode(inputs));
    }
    return passwordBuild.join('');
    
    }

    generatePassword; 

    function arrayL2H(L, H) {
    const array = []
        for(let i = L; i <= H; i++) {
            array.push(i)
        }
            return array;
}

// Displays password in alert window
window.alert(password);

generateBtn.addEventListener("click", writePassword);