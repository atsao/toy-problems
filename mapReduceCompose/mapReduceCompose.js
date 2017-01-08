/*
map & mapWith


reduce and reduceWith


Compose


*/

function map(f, collection) {
  var results = [];
  collection.forEach(function(element) {
    results.push(f(element));
  });

  return results;
}

function mapWith(f) {
  return function(collection) {
    return map(f, collection);
  }
}

function reduce(f, collection, init) {
}

function reduceWith(f, init) {
}

function add(x, y) { return x + y; }
function square(n) { return n * n; }

function compose(f, g) {
  return function(x) {
    return f(g(x));
  }
}

function friendlyGreeting(greet) {
  return `${greet} Hope you\'re having a great day!`;
}

function sayName(name) {
  return `Hi ${name}!`
}

var greet = compose(friendlyGreeting, sayName);

var longestWordLength;

module.exports = {
  map,
  mapWith,
  reduce,
  reduceWith,
  add,
  square,
  compose,
  sayName,
  friendlyGreeting
}