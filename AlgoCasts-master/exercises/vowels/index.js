// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  str = str.toLowerCase();
  let sum = 0;
  const vowel = ['a','e','i','o','u'];
  for(let char of str) {
    if(vowel.includes(char)) {
      sum++;
    }
  }
  return sum;
}

module.exports = vowels;

// ---------------------
// Alternate solution
// function vowels(str) {
//   str = str.toLowerCase();
//   let sum = 0;
//   const vowel = 'aeiou';
//   for(let char of str) {
//     if(vowel.indexOf(char) >= 0) {
//       sum++;
//     }
//   }
//   return sum;
// }
