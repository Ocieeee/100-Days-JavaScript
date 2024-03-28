const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  //   console.log(words[1].toUpperCase());
  words = words.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
  );
  //   console.log(words);
  words = `#${words.join(" ")}`;
  console.log(words);
  //   return words;
};
console.log(generateHash("my name is Om techincal"));
