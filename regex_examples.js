// There are different regex methods we can use in javascript including test, as well as string methods where regex is useful
// such as match, replace and split  


// Format a phone number using regex
function formatPhoneNumber(phoneNumber) {
    // Regular expression pattern for a 10-digit phone number
    let pattern = /^(\d{3})(\d{3})(\d{4})$/;
    // Use the regex test method to test if the phoneNumber parameter matches the regex pattern, returns true or false
    if(pattern.test(phoneNumber)) {
    // Use the string replace method, which accepts two arguments, the original pattern and the replacement pattern 
        return phoneNumber.replace(pattern, "($1) $2-$3");

    }
    // Replace the matched number with the phone number in the new format 

}


  // Example usage
let phoneNumber = "1234567890";
let formattedNumber = formatPhoneNumber(phoneNumber);
console.log(formattedNumber); // Output: "(123) 456-7890"


// Extract all spam keywords in email text:
const str = "Free cash, Rolex watches, and Pedro Pascal!";
const spamRegex = /(cash|rolex|Pedro Pascal|inheritance|lottery|earn money|cash|million dollars)/gi;
const spamArray = str.match(spamRegex);

console.log(spamArray); 



//Regex using the split method to return an array cleansed of unnecessary white space 
movieCastInput = "Michelle Yeoh,  Ke Huy Quan, Jamie Lee Curtis, Stephanie Hsu,     James Hong";
// return an array of the movie cast, split on a comma, ignoring additional spacing 
movieCastArray = movieCastInput.split(',');
// log the result 
console.log(movieCastArray);

//regex pattern
pattern = /\s*,\s*/;
//split on pattern
movieCastArray2 = movieCastInput.split(pattern);
//return array where additional white space is removed 
console.log(movieCastArray2);
