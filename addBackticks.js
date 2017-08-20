'use strict';


const fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data) {
if (err) throw err;
runThroughText(data);
});

function runThroughText(testString) {
const titleRegex = /####\s*\./g;
const captureRegex = /####\s*(\..*)/;

const linesOfText = testString.split('\n');

for (let i = 0; i < linesOfText.length; i++) {
let thisLine = linesOfText[i];
let outcome = thisLine.search(titleRegex);
if (outcome !== -1) {
let results = captureRegex.exec(thisLine);
console.log('`' + results[1] + '`');
}
else {
console.log(thisLine);
}
}

}