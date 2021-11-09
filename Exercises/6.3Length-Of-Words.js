function stringLength(array) {
  let wordsLength = [];
  for (let i = 0; i < array.length; i++) {
    wordsLength[i] = array[i].length;
  }
  return wordsLength;
}
console.log(stringLength(["adfasd", "fffddd", "ffdd", "f"]));
