var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //26 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //26
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]//10 
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "[", "]", "}", "|", ";", ":", "'", ",", "<", ">", ".", "/", "?"] //31
var userPopArr = [""]
var password = 10;



//asignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// how am i going to get the users password length?
//prompt

function generatePassword(){
    var inputLength = prompt("Input password, character count between 8 - 128")
// is the user length bigger than 8 but smaller than 128

if(inputLength < 8 && inputLength > 128){
    alert("Chosen password must be between 8 - 128 characters...")
    return generatePassword();
} 

var lc = confirmation("Do you want uppercase characters included?")

var uc = confirmation("Do you want uppercase characters included?")

var n = confirmation("Do you want numbers included?")

var spc = confirmation("do you want special characters included?")

// potentially generated user error's
if (!lc && !uc && !n && !spc) {
    alert("You must choose one of the preceeding options...")

    return generatePassword();
}

//concats implemented for userGenArrs
if (lc) {
    userPopArr = userPopArr.concat(lowerCase);

    password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
}
if (uc) {
    userPopArr = userPopArr.concat(upperCase);

    password.push(upperCase[Math.floor(Math.random() * upperCase.length)])
}
if (n) {
    userPopArr = userPopArr.concat(numbers);

    password.push(numbers[Math.floor(Math.random() * numbers.length)])
}
if (spc) {
    userPopArr = userPopArr.concat(specialCharacters);

    password.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
}

}
