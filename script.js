

// String sets for password generation
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCase = upperCase.toLowerCase(); 
var numbers = "0123456789"; 
var specialChar = "!@#$%^&*(){}[];:<>/|\_-+="; 

// Prompt user for password length
var passwordLength = parseInt(prompt("Enter desired password length. Must be a number between 8 and 128.")); 

if (passwordLength < 8 || passwordLength > 128) {
    alert("You did not pick a number between 8 and 128.  Please start again."); 
       // Redirect back to beginning
    window.location.href = "index.html";                   
}

// **** Don't forget to VALIDATE code and do README.md ****

 //  Prompt user for inclusion of string set types NEED TO VALIDATE INPUTS
var useUpperCase = confirm("Would you like UPPERCASE LETTERS in your password? Click OK for YES or cancel for NO ");               
var useLowerCase = confirm("Would you like LOWERCASE LETTERS in your password? Click OK for YES or cancel for NO");        
var useNumbers = confirm("Would you like NUMBERS in your password? Click OK for YES or cancel for NO");                   
var useSpecialChar = confirm("Would you like SPECIAL CHARACTERS in your password? Click OK for YES or cancel for NO");   

 // Create global variable to hold selected string character sets
var characterSet = "";                                                                             

// Create string character set from which password will be generated
function passwordCharacterSet( ) { 

    if (useUpperCase == true) {                  
        characterSet = upperCase;
    } 
    if (useLowerCase == true) {
        characterSet += lowerCase;  
    }
    if (useNumbers == true) {
        characterSet += numbers.toString(); 
    }
    if (useSpecialChar == true) {
        characterSet += specialChar; 
    }
    return characterSet;
}    

// Generate password using for loop and random number function Math.random( ) 
var stringSet = passwordCharacterSet( );
var password = "";
var  generateEl = document.querySelector("#passwordBtn");

if (stringSet == "") {                                                                                                                                                                   
    alert("Pick some options");                                                                                                                                                  
    // Redirect back to beginning
    window.location.href = "index.html";
}
      
for (var i = 0; i < passwordLength; i++) {                                                                                                                                                               
    password = password + (stringSet.charAt(Math.floor(Math.random( ) * 10 * passwordLength) ) );                               
}

// Display generated password in text area
generateEl.addEventListener("click", function() {
    document.getElementById("textArea").value = password;
});

// click on COPY button
// Copy generated password and save to clipboard  
function copy() {
    var copyText = password; //  **** FIX ****
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copyBtn").addEventListener("click", copy());
