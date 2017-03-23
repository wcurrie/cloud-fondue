const fs = require('fs');

const wordFile = fs.readFileSync('/usr/share/dict/words');
const outFile = fs.openSync('long_words', 'w');

let words = wordFile.toString().split("\n");
for (let i in words) {
  let word = words[i];
  if (word.length > 5) {
    fs.write(outFile, word + "\n");
  }
}
