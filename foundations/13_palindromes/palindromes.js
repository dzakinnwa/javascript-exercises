const palindromes = function(string) {
    const allowedChars = "abcdefghijklmnopqrstuvwxyz1234567890";
    
    const reversedStr = string
    .toLowerCase("")
    .split("")
    .filter((char) => allowedChars.includes(char))
    .reverse("")
    .join("")
    ;
    
    const str = string
    .toLowerCase("")
    .split("")
    .filter((char) => allowedChars.includes(char))
    .join("")
    ;

    return str === reversedStr;
}
// Do not edit below this line
module.exports = palindromes;
