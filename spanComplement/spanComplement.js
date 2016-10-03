/*
Span Complement

Given a string of letters/words and a string of delimiters, find the position where the first delimiter exists in the string. If no delimiters are found, return the string length;

Tokens

Given a string and delimiters, return an array of the words in the string.

*/

function spanComplement(str, delim) {
  if (!str) return null;

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < delim.length; j++) {
      if (str[i] === delim[j]) {
        return i;
      }
    }
  }

  return str.length;
}

function tokens(str, delim) {
  var words = [];

  while(str.length) {
    var endPosition = spanComplement(str, delim);
    if (endPosition === null) {
      words.push(str);
      break;
    }

    // 0
    if (endPosition === 0) {
      str = str.substring(1);
      continue
    }

    if (endPosition === null) {
      break;
    }

    var word = str.substring(0, endPosition)
    words.push(word);
    str = str.substring(endPosition + 1)
  }

  return words;
}

console.log(spanComplement("monkey", "abc")); // 6
console.log(spanComplement("monkey", "abck")); // 3
console.log(spanComplement("monkey", "kmy")); // 0
console.log(spanComplement("", "abc")); // null
console.log(tokens("cat,dog-mouse.horse", ";,.-")); // ["cat", "dog", "mouse", "horse"]
console.log(tokens(".......armadillo,;kangaroo........;-", ";,.-")); // ["armadillo", "kangaroo"]