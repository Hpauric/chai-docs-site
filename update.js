'use strict';


const fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data) {
if (err) throw err;
runThroughText(data);
});

function runThroughText(testString) {
const titleRegex = /####\s*Parameters/g;
const curlyBracketsRegex = /{(.*?)}(.*)/;
const emDashRegex = /^\s*-/;

const linesOfText = testString.split('\n');

for (let i = 0; i < linesOfText.length; i++) {
let thisLine = linesOfText[i];

let outcome = thisLine.search(titleRegex);
if (outcome !== -1) {
console.log('| Parameter | Type |');
console.log('| ------------- | ------------- |');
}
else if (thisLine.search(emDashRegex) !== -1 &&
thisLine.search(curlyBracketsRegex) !== -1) {

let results = curlyBracketsRegex.exec(thisLine);
let type = results[1];
let parameter = results[2];
console.log("| " + parameter + ' | ' + type + ' | ');
}
else {
console.log(thisLine);
}
}
}