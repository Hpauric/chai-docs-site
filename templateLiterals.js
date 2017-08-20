const testString = `###equal

\`\`\`javascript
assert.equal(3, '3', '== coerces values to strings');
\`\`\`
#### \`.equal(actual, expected, [message])\`
Asserts non-strict equality (\`==\`) of \`actual\` and \`expected\`.

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message`


const extra = `
| Parameter | Type |
| ------------- | ------------- |
| actual  | Mixed  |
| expected| Mixed  |`