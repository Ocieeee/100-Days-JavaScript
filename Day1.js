//* ------------------------------------------------
//* Programming Question : Longest Word In String
//* -----------------------------------------------

//? Q : Write A Function findLongestWord that take a string as input and return the longest word in the string . If there are multiple longest word , return the first one encounted

//* Constrians:
/* The input string may contain alphabetic characters , digits , space , and punctuation
 * The input string is non-empty
 *  The Input string may contain multiple separated by spaces
 */

/* Notes :
 * If the input string is empty or contains only whitespace the function should return an false.
 * The function should ignore leading and trailing whitespace when determining the longest word.
 */

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  //   //console.log(words);
  //   words.sort((a, b) => b.length - a.length);
  //   console.log(words);
  //   // return words.at(-1);
  //   return words[0];
  return words.reduce(
    (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
  );
};

console.log(
  findLongestWord("Watch Thapa Techincal JavaScript Course On Youtube")
);
