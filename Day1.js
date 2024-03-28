//* ------------------------------------------------
//* Programming Question : Longest Word In String
//* -----------------------------------------------

// Q :

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
