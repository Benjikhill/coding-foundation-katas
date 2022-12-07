function zipStrings(strA, strB) {
  let zippedString = "";
  let loopLength = 0;
  console.log(strA.length);
  console.log(strB.length);

  if (strA.length > strB.length) {
    loopLength = strA.length;
  } else {
    loopLength = strB.length;
  }
  for (let i = 0; i < loopLength; i++) {
    if (strA[i] !== undefined) {
      zippedString += strA[i];
    }
    if (strB[i] !== undefined) {
      zippedString += strB[i];
    }
  }
  return zippedString;
}
