/*
Reverse String

Return a reversed string.

Constraint:  in place
*/

const reverseString = (string) => {
  let copy = string.split('');
  copy.reverse();

  return copy.join('');
}

console.log(reverseString('abc')); // cba
console.log(reverseString('abcd efgh jklm')); // mlkj hgfe dcba