// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Set up a minimun and maximum length of password  
  var maxLength = 128;
  var minLength = 8;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //create lists of lowercase, uppercase, numeric, and special character in an array.
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numeric = [0,1,2,3,4,5,6,7,8,9];
  var specialCharacter = [" ","\"", "!", "#", "$", "%", "&","\'" , "(", ")","*", "+", ",", "-", ".", "/", ":", ";", "<", "=",
    ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var passwordList = [];
  //Assume the user to enter a number.
  var passLength = window.prompt("How many characters would you like your password to contain? ");
    //Prompt the user to re-enter if it doens't meet the requirements.
    if ((passLength < minLength) || (passLength > maxLength)) {
        passLength = window.prompt("Password should be at least 8 characters and no more than 128 characters, Please enter again.");
    }
  //if the user confirm including numeric character, adding a numeric array properties into passwordList   
  var confirmNum = window.confirm("Click OK to confirm including numeric character.");
    if (confirmNum == true) {
        passwordList = passwordList.concat(numeric);
    }
  //if the user confirm including lowercase character, adding a lowercase array properties into passwordList     
  var confirmLower = window.confirm("Click OK to confirm including lowercase character.");
    if (confirmLower == true)   {
        passwordList = passwordList.concat(lowerCase);
    }  
  //if the user confirm including uppercase character, adding an uppercase array properties into passwordList     
  var confirmUpper = window.confirm("Click OK to confirm including uppercase character.");
    if (confirmUpper == true)   {
        passwordList = passwordList.concat(upperCase);
    }
  //if the user confirm including special character, adding a special character array properties into passwordList        
  var confirmSpecial = window.confirm("Click OK to confirm including special CharacterData.");
    if (confirmSpecial == true) {
        passwordList = passwordList.concat(specialCharacter);
    }  
  //call generatePassword function.  
  var password = generatePassword(passwordList, passLength); 
  //assign the password value so that it can appear on the box. 
  passwordText.value = password;

}

//Generate a random password using for loop
function generatePassword(passwordList, passLength) {
    //declare a password value 
    var password = "";
    //starting at passwordList[0], ending at the password length from the user prompt, incrementing 1 by 1 
    for (i=0; i<passLength; i++)    {
        //generating a random index number inside of the passwordList
        randomIndex = Math.floor(Math.random() * passwordList.length);
        //adding the random properties into the password value.
        password += passwordList[randomIndex];
    }
    return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

