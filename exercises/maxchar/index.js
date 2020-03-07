// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    // First Method
    // var chars = {};
    // var max = 1;
    // var maxForArray = 0;
    // var mostRepeatedChar = '';
    // var arrayOfSimilarRepChar = [];

    // for (char of str) {

    //     if (!chars[char]) {
    //         chars[char] = 1;
    //     }
    //     else {
    //         chars[char]++;

    //         if (chars[char] >= max) {
    //             if (chars[char] === max && chars[char] > 1) {
    //                 arrayOfSimilarRepChar.push(char);
    //                 max = chars[char];
    //                 maxForArray = chars[char];
    //             }
    //             else {
    //                 max = chars[char];
    //                 arrayOfSimilarRepChar.push(char);
    //                 mostRepeatedChar = char;
    //             }
    //         }
    //     }
    // }

    // return maxForArray >= max ? arrayOfSimilarRepChar : mostRepeatedChar;
    
    
    // Return duplicate characters
    
    // Given a string return an of the characters which are duplicated
    
    // var arrayOfDups = [];
    // var chars = {};
    
    // for(char of str) {
    //     // add char to the object if doesnt exits and assign value of 1
    //     // if it already exits, just add it to the array. No need to increment
    //     if(!chars[char]) {
    //         chars[char] = 1;
    //     } else {
            
    //         if(arrayOfDups.indexOf(char) === -1) {
    //             arrayOfDups.push(char);
    //         }
    //     }
    // }
    
    // return arrayOfDups;
}

console.log(maxChar("abcbcdddeee"));