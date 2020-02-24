// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // First Method
    // var reverseString = '';

    // for(var i = str.length-1; i >= 0;  i--) {
    //     reverseString +=   str[i];
    // }

    // return reverseString;

    // Second method

    // return str.split('').reverse().join('');

    // Third Method

    // return str.split('').reduce( (rev, arr) => arr + rev , '' )

}

module.exports = reverse;
