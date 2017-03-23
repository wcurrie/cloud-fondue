'use strict';

const fs = require('fs');
const Multimap = require('multimap');

const wordFile = fs.readFileSync('long_words');
let words = wordFile.toString().split("\n");
const by_letter = new Multimap();
for (let i in words) {
  let word = words[i];
  if (word.length > 0) {
    by_letter.set(word[0].toLowerCase(), word);
  }
}

const sensible = new Map();
sensible.set('c', 'cloud');
sensible.set('e', 'elastic');
sensible.set('v', 'virtual');

function randomWordFor(letter) {
  let proper = sensible.get(letter.toLowerCase());
  if (proper && Math.random() > 0.5){
    return proper;
  }
  let candidates = by_letter.get(letter.toLowerCase());
  if (candidates) {
    let choice = Math.floor(Math.random() * candidates.length);
    return candidates[choice];
  } else {
    return letter;
  }
}

function withFirstUppercased(word) {
  return word[0].toUpperCase() + word.slice(1);
}

exports.nameIt = function nameIt(acronym) {
  let letters = acronym.split('');
  return letters.map(randomWordFor).map(withFirstUppercased).join(' ')
};

