---
title: Chai API Reference

language_tabs:
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

The Chai API is broken down by style or task.

## Assertion Styles

The Expect / Should API covers the BDD assertion styles.
The Assert API covers the TDD assertion style.

### Plugins

The Plugin API will be of use to anyone interested in building plugins as helpers to DRY up your tests, or for release to the community.

### Tools

The Online Test Suite is a live run of Chai’s test suite. Use it to ensure browser compatibility.

# Assert

The assert style is very similar to node.js’ included assert module, with a bit of extra sugar. 
Of the three style options, assert is the only one that is not chainable. Check out the [Style Guide](http://chaijs.com/guide/styles/) for a comparison.

##{Mixed} expression to test for truthiness
#### assert(expression, message)
Write your own test expressions.

```javascript
assert('foo' !== 'bar', 'foo is not bar');
assert(Array.isArray([]), 'empty arrays are arrays');
```

#### Parameters
- {Mixed} expression to test for truthiness
- {String} message to display on error


##fail
#### .fail(actual, expected, [message], [operator])
Throw a failure. Node.js `assert` module-compatible.
```

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message
- {String} operator


##isOk
#### .isOk(object, [message])
Asserts that `object` is truthy.

```javascript
assert.isOk('everything', 'everything is ok');
assert.isOk(false, 'this will fail');
```

#### Parameters
- {Mixed} object to test
- {String} message


##isNotOk
#### .isNotOk(object, [message])
Asserts that `object` is falsy.

```javascript
assert.isNotOk('everything', 'this will fail');
assert.isNotOk(false, 'this will pass');
```

#### Parameters
- {Mixed} object to test
- {String} message


##equal
#### .equal(actual, expected, [message])
Asserts non-strict equality (`==`) of `actual` and `expected`.

```javascript
assert.equal(3, '3', '== coerces values to strings');
```

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message


##notEqual
#### .notEqual(actual, expected, [message])
Asserts non-strict inequality (`!=`) of `actual` and `expected`.

```javascript
assert.notEqual(3, 4, 'these numbers are not equal');
```

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message


##strictEqual
#### .strictEqual(actual, expected, [message])
Asserts strict equality (`===`) of `actual` and `expected`.

```javascript
assert.strictEqual(true, true, 'these booleans are strictly equal');
```

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message


##notStrictEqual
#### .notStrictEqual(actual, expected, [message])
Asserts strict inequality (`!==`) of `actual` and `expected`.

```javascript
assert.notStrictEqual(3, '3', 'no coercion for strict equality');
```

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message


##deepEqual
#### .deepEqual(actual, expected, [message])
Asserts that `actual` is deeply equal to `expected`.

```javascript
assert.deepEqual({ tea: 'green' }, { tea: 'green' });
```

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message


##notDeepEqual
#### .notDeepEqual(actual, expected, [message])
Assert that `actual` is not deeply equal to `expected`.

```javascript
assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
```

#### Parameters
- {Mixed} actual
- {Mixed} expected
- {String} message


##isAbove
#### .isAbove(valueToCheck, valueToBeAbove, [message])
Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.

```javascript
assert.isAbove(5, 2, '5 is strictly greater than 2');
```

#### Parameters
- {Mixed} valueToCheck
- {Mixed} valueToBeAbove
- {String} message


##isAtLeast
#### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.

```javascript
assert.isAtLeast(5, 2, '5 is greater or equal to 2');
assert.isAtLeast(3, 3, '3 is greater or equal to 3');
```

#### Parameters
- {Mixed} valueToCheck
- {Mixed} valueToBeAtLeast
- {String} message


##isBelow
#### .isBelow(valueToCheck, valueToBeBelow, [message])
Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.

```javascript
assert.isBelow(3, 6, '3 is strictly less than 6');
```

#### Parameters
- {Mixed} valueToCheck
- {Mixed} valueToBeBelow
- {String} message


##isAtMost
#### .isAtMost(valueToCheck, valueToBeAtMost, [message])
Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.

```javascript
assert.isAtMost(3, 6, '3 is less than or equal to 6');
assert.isAtMost(4, 4, '4 is less than or equal to 4');
```

#### Parameters
- {Mixed} valueToCheck
- {Mixed} valueToBeAtMost
- {String} message


##isTrue
#### .isTrue(value, [message])
Asserts that `value` is true.

```javascript
var teaServed = true;
assert.isTrue(teaServed, 'the tea has been served');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotTrue
#### .isNotTrue(value, [message])
Asserts that `value` is not true.

```javascript
var tea = 'tasty chai';
assert.isNotTrue(tea, 'great, time for tea!');
```

#### Parameters
- {Mixed} value
- {String} message


##isFalse
#### .isFalse(value, [message])
Asserts that `value` is false.

```javascript
var teaServed = false;
assert.isFalse(teaServed, 'no tea yet? hmm...');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotFalse
#### .isNotFalse(value, [message])
Asserts that `value` is not false.

```javascript
var tea = 'tasty chai';
assert.isNotFalse(tea, 'great, time for tea!');
```

#### Parameters
- {Mixed} value
- {String} message


##isNull
#### .isNull(value, [message])
Asserts that `value` is null.

```javascript
assert.isNull(err, 'there was no error');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotNull
#### .isNotNull(value, [message])
Asserts that `value` is not null.

```javascript
var tea = 'tasty chai';
assert.isNotNull(tea, 'great, time for tea!');
```

#### Parameters
- {Mixed} value
- {String} message


##isNaN
#### .isNaN
Asserts that value is NaN.

```javascript
assert.isNaN(NaN, 'NaN is NaN');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotNaN
#### .isNotNaN
Asserts that value is not NaN.

```javascript
assert.isNotNaN(4, '4 is not NaN');
```

#### Parameters
- {Mixed} value
- {String} message


##exists
#### .exists
Asserts that the target is neither `null` nor `undefined`.

```javascript
var foo = 'hi';

assert.exists(foo, 'foo is neither `null` nor `undefined`');
```

#### Parameters
- {Mixed} value
- {String} message


##notExists
#### .notExists
Asserts that the target is either `null` or `undefined`.

```javascript
var bar = null
  , baz;

    assert.notExists(bar);
    assert.notExists(baz, 'baz is either null or undefined');
```

#### Parameters
- {Mixed} value
- {String} message


##isUndefined
#### .isUndefined(value, [message])
Asserts that `value` is `undefined`.

```javascript
var tea;
assert.isUndefined(tea, 'no tea defined');
```

#### Parameters
- {Mixed} value
- {String} message


##isDefined
#### .isDefined(value, [message])
Asserts that `value` is not `undefined`.

```javascript
var tea = 'cup of chai';
assert.isDefined(tea, 'tea has been defined');
```

#### Parameters
- {Mixed} value
- {String} message


##isFunction
#### .isFunction(value, [message])
Asserts that `value` is a function.

```javascript
function serveTea() { return 'cup of tea'; };
assert.isFunction(serveTea, 'great, we can have tea now');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotFunction
#### .isNotFunction(value, [message])
Asserts that `value` is _not_ a function.

```javascript
var serveTea = [ 'heat', 'pour', 'sip' ];
assert.isNotFunction(serveTea, 'great, we have listed the steps');
```

#### Parameters
- {Mixed} value
- {String} message


##isObject
#### .isObject(value, [message])
Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
_The assertion does not match subclassed objects._

```javascript
var selection = { name: 'Chai', serve: 'with spices' };
assert.isObject(selection, 'tea selection is an object');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotObject
#### .isNotObject(value, [message])
Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).

```javascript
var selection = 'chai'
assert.isNotObject(selection, 'tea selection is not an object');
    assert.isNotObject(null, 'null is not an object');
```

#### Parameters
- {Mixed} value
- {String} message


##isArray
#### .isArray(value, [message])
Asserts that `value` is an array.

```javascript
var menu = [ 'green', 'chai', 'oolong' ];
assert.isArray(menu, 'what kind of tea do we want?');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotArray
#### .isNotArray(value, [message])
Asserts that `value` is _not_ an array.

```javascript
var menu = 'green|chai|oolong';
assert.isNotArray(menu, 'what kind of tea do we want?');
```

#### Parameters
- {Mixed} value
- {String} message


##isString
#### .isString(value, [message])
Asserts that `value` is a string.

```javascript
var teaOrder = 'chai';
assert.isString(teaOrder, 'order placed');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotString
#### .isNotString(value, [message])
Asserts that `value` is _not_ a string.

```javascript
var teaOrder = 4;
assert.isNotString(teaOrder, 'order placed');
```

#### Parameters
- {Mixed} value
- {String} message


##isNumber
#### .isNumber(value, [message])
Asserts that `value` is a number.

```javascript
var cups = 2;
assert.isNumber(cups, 'how many cups');
```

#### Parameters
- {Number} value
- {String} message


##isNotNumber
#### .isNotNumber(value, [message])
Asserts that `value` is _not_ a number.

```javascript
var cups = '2 cups please';
assert.isNotNumber(cups, 'how many cups');
```

#### Parameters
- {Mixed} value
- {String} message


##isFinite
#### .isFinite(value, [message])
Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.

```javascript
var cups = 2;
assert.isFinite(cups, 'how many cups');

    assert.isFinite(NaN); // throws
```

#### Parameters
- {Number} value
- {String} message


##isBoolean
#### .isBoolean(value, [message])
Asserts that `value` is a boolean.

```javascript
var teaReady = true
  , teaServed = false;

    assert.isBoolean(teaReady, 'is the tea ready');
    assert.isBoolean(teaServed, 'has tea been served');
```

#### Parameters
- {Mixed} value
- {String} message


##isNotBoolean
#### .isNotBoolean(value, [message])
Asserts that `value` is _not_ a boolean.

```javascript
var teaReady = 'yep'
  , teaServed = 'nope';

    assert.isNotBoolean(teaReady, 'is the tea ready');
    assert.isNotBoolean(teaServed, 'has tea been served');
```

#### Parameters
- {Mixed} value
- {String} message


##typeOf
#### .typeOf(value, name, [message])
Asserts that `value`'s type is `name`, as determined by
`Object.prototype.toString`.

```javascript
assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
    assert.typeOf('tea', 'string', 'we have a string');
    assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
    assert.typeOf(null, 'null', 'we have a null');
    assert.typeOf(undefined, 'undefined', 'we have an undefined');
```

#### Parameters
- {Mixed} value
- {String} name
- {String} message


##notTypeOf
#### .notTypeOf(value, name, [message])
Asserts that `value`'s type is _not_ `name`, as determined by
`Object.prototype.toString`.

```javascript
assert.notTypeOf('tea', 'number', 'strings are not numbers');
```

#### Parameters
- {Mixed} value
- {String} typeof name
- {String} message


##instanceOf
#### .instanceOf(object, constructor, [message])
Asserts that `value` is an instance of `constructor`.

```javascript
var Tea = function (name) { this.name = name; }
  , chai = new Tea('chai');

    assert.instanceOf(chai, Tea, 'chai is an instance of tea');
```

#### Parameters
- {Object} object
- {Constructor} constructor
- {String} message


##notInstanceOf
#### .notInstanceOf(object, constructor, [message])
Asserts `value` is not an instance of `constructor`.

```javascript
var Tea = function (name) { this.name = name; }
  , chai = new String('chai');

    assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
```

#### Parameters
- {Object} object
- {Constructor} constructor
- {String} message


##include
#### .include(haystack, needle, [message])
Asserts that `haystack` includes `needle`. Can be used to assert the
inclusion of a value in an array, a substring in a string, or a subset of
properties in an object.

```javascript
assert.include([1,2,3], 2, 'array contains value');
assert.include('foobar', 'foo', 'string contains substring');
    assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');

Strict equality (===) is used. When asserting the inclusion of a value in
an array, the array is searched for an element that's strictly equal to the
given value. When asserting a subset of properties in an object, the object
is searched for the given property keys, checking that each one is present
and stricty equal to the given property value. For instance:

    var obj1 = {a: 1}
      , obj2 = {b: 2};
    assert.include([obj1, obj2], obj1);
    assert.include({foo: obj1, bar: obj2}, {foo: obj1});
    assert.include({foo: obj1, bar: obj2}, {foo: obj1, bar: obj2});
```

#### Parameters
- {Array|String} haystack
- {Mixed} needle
- {String} message


##notInclude
#### .notInclude(haystack, needle, [message])
Asserts that `haystack` does not include `needle`. Can be used to assert
the absence of a value in an array, a substring in a string, or a subset of
properties in an object.

```javascript
assert.notInclude([1,2,3], 4, 'array doesn't contain value');
assert.notInclude('foobar', 'baz', 'string doesn't contain substring');
    assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn't contain property');

Strict equality (===) is used. When asserting the absence of a value in an
array, the array is searched to confirm the absence of an element that's
strictly equal to the given value. When asserting a subset of properties in
an object, the object is searched to confirm that at least one of the given
property keys is either not present or not strictly equal to the given
property value. For instance:

    var obj1 = {a: 1}
      , obj2 = {b: 2};
    assert.notInclude([obj1, obj2], {a: 1});
    assert.notInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
    assert.notInclude({foo: obj1, bar: obj2}, {foo: obj1, bar: {b: 2}});
```

#### Parameters
- {Array|String} haystack
- {Mixed} needle
- {String} message


##deepInclude
#### .deepInclude(haystack, needle, [message])
Asserts that `haystack` includes `needle`. Can be used to assert the
inclusion of a value in an array or a subset of properties in an object.
Deep equality is used.

```javascript
var obj1 = {a: 1}
  , obj2 = {b: 2};
    assert.deepInclude([obj1, obj2], {a: 1});
    assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
    assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 2}});
```

#### Parameters
- {Array|String} haystack
- {Mixed} needle
- {String} message


##notDeepInclude
#### .notDeepInclude(haystack, needle, [message])
Asserts that `haystack` does not include `needle`. Can be used to assert
the absence of a value in an array or a subset of properties in an object.
Deep equality is used.

```javascript
var obj1 = {a: 1}
  , obj2 = {b: 2};
    assert.notDeepInclude([obj1, obj2], {a: 9});
    assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 9}});
    assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 9}});
```

#### Parameters
- {Array|String} haystack
- {Mixed} needle
- {String} message


##nestedInclude
#### .nestedInclude(haystack, needle, [message])
Asserts that 'haystack' includes 'needle'. 
Can be used to assert the inclusion of a subset of properties in an 
object.
Enables the use of dot- and bracket-notation for referencing nested 
properties.
'[]' and '.' in property names can be escaped using double backslashes.

```javascript
assert.nestedInclude({'.a': {'b': 'x'}}, {'\\.a.[b]': 'x'});
assert.nestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'x'});
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##notNestedInclude
#### .notNestedInclude(haystack, needle, [message])
Asserts that 'haystack' does not include 'needle'. 
Can be used to assert the absence of a subset of properties in an 
object.
Enables the use of dot- and bracket-notation for referencing nested 
properties. 
'[]' and '.' in property names can be escaped using double backslashes.

```javascript
assert.notNestedInclude({'.a': {'b': 'x'}}, {'\\.a.b': 'y'});
assert.notNestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'y'});
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##deepNestedInclude
#### .deepNestedInclude(haystack, needle, [message])
Asserts that 'haystack' includes 'needle'.
Can be used to assert the inclusion of a subset of properties in an 
object while checking for deep equality.
Enables the use of dot- and bracket-notation for referencing nested 
properties.
'[]' and '.' in property names can be escaped using double backslashes.

```javascript
assert.deepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {x: 1}});
assert.deepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {x: 1}});
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##notDeepNestedInclude
#### .notDeepNestedInclude(haystack, needle, [message])
Asserts that 'haystack' does not include 'needle'.
Can be used to assert the absence of a subset of properties in an 
object while checking for deep equality.
Enables the use of dot- and bracket-notation for referencing nested 
properties.
'[]' and '.' in property names can be escaped using double backslashes.

```javascript
assert.notDeepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {y: 1}})
assert.notDeepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {y: 2}});
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##ownInclude
#### .ownInclude(haystack, needle, [message])
Asserts that 'haystack' includes 'needle'.
Can be used to assert the inclusion of a subset of properties in an 
object while ignoring inherited properties.

```javascript
assert.ownInclude({ a: 1 }, { a: 1 });
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##notOwnInclude
#### .notOwnInclude(haystack, needle, [message])
Asserts that 'haystack' includes 'needle'.
Can be used to assert the absence of a subset of properties in an 
object while ignoring inherited properties.

```javascript
Object.prototype.b = 2;

assert.notOwnInclude({ a: 1 }, { b: 2 });
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##deepOwnInclude
#### .deepOwnInclude(haystack, needle, [message])
Asserts that 'haystack' includes 'needle'.
Can be used to assert the inclusion of a subset of properties in an 
object while ignoring inherited properties and checking for deep equality.

```javascript
 assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}});
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##notDeepOwnInclude
#### .notDeepOwnInclude(haystack, needle, [message])
Asserts that 'haystack' includes 'needle'.
Can be used to assert the absence of a subset of properties in an 
object while ignoring inherited properties and checking for deep equality.

```javascript
 assert.notDeepOwnInclude({a: {b: 2}}, {a: {c: 3}});
```

#### Parameters
- {Object} haystack
- {Object} needle
- {String} message


##match
#### .match(value, regexp, [message])
Asserts that `value` matches the regular expression `regexp`.

```javascript
assert.match('foobar', /^foo/, 'regexp matches');
```

#### Parameters
- {Mixed} value
- {RegExp} regexp
- {String} message


##notMatch
#### .notMatch(value, regexp, [message])
Asserts that `value` does not match the regular expression `regexp`.

```javascript
assert.notMatch('foobar', /^foo/, 'regexp does not match');
```

#### Parameters
- {Mixed} value
- {RegExp} regexp
- {String} message


##property
#### .property(object, property, [message])
Asserts that `object` has a direct or inherited property named by
`property`.

```javascript
assert.property({ tea: { green: 'matcha' }}, 'tea');
assert.property({ tea: { green: 'matcha' }}, 'toString');
```

#### Parameters
- {Object} object
- {String} property
- {String} message


##notProperty
#### .notProperty(object, property, [message])
Asserts that `object` does _not_ have a direct or inherited property named
by `property`.

```javascript
assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
```

#### Parameters
- {Object} object
- {String} property
- {String} message


##propertyVal
#### .propertyVal(object, property, value, [message])
Asserts that `object` has a direct or inherited property named by
`property` with a value given by `value`. Uses a strict equality check
(===).

```javascript
assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##notPropertyVal
#### .notPropertyVal(object, property, value, [message])
Asserts that `object` does _not_ have a direct or inherited property named
by `property` with value given by `value`. Uses a strict equality check
(===).

```javascript
assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good');
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##deepPropertyVal
#### .deepPropertyVal(object, property, value, [message])
Asserts that `object` has a direct or inherited property named by
`property` with a value given by `value`. Uses a deep equality check.

```javascript
assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##notDeepPropertyVal
#### .notDeepPropertyVal(object, property, value, [message])
Asserts that `object` does _not_ have a direct or inherited property named
by `property` with value given by `value`. Uses a deep equality check.

```javascript
assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
    assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##nestedProperty
#### .nestedProperty(object, property, [message])
Asserts that `object` has a direct or inherited property named by
`property`, which can be a string using dot- and bracket-notation for
nested reference.

```javascript
assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green');
```

#### Parameters
- {Object} object
- {String} property
- {String} message


##notNestedProperty
#### .notNestedProperty(object, property, [message])
Asserts that `object` does _not_ have a property named by `property`, which
can be a string using dot- and bracket-notation for nested reference. The
property cannot exist on the object nor anywhere in its prototype chain.

```javascript
assert.notNestedProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
```

#### Parameters
- {Object} object
- {String} property
- {String} message


##nestedPropertyVal
#### .nestedPropertyVal(object, property, value, [message])
Asserts that `object` has a property named by `property` with value given
by `value`. `property` can use dot- and bracket-notation for nested
reference. Uses a strict equality check (===).

```javascript
assert.nestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##notNestedPropertyVal
#### .notNestedPropertyVal(object, property, value, [message])
Asserts that `object` does _not_ have a property named by `property` with
value given by `value`. `property` can use dot- and bracket-notation for
nested reference. Uses a strict equality check (===).

```javascript
assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'coffee.green', 'matcha');
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##deepNestedPropertyVal
#### .deepNestedPropertyVal(object, property, value, [message])
Asserts that `object` has a property named by `property` with a value given
by `value`. `property` can use dot- and bracket-notation for nested
reference. Uses a deep equality check.

```javascript
assert.deepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yum' });
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##notDeepNestedPropertyVal
#### .notDeepNestedPropertyVal(object, property, value, [message])
Asserts that `object` does _not_ have a property named by `property` with
value given by `value`. `property` can use dot- and bracket-notation for
nested reference. Uses a deep equality check.

```javascript
assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' });
assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' });
    assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' });
```

#### Parameters
- {Object} object
- {String} property
- {Mixed} value
- {String} message


##lengthOf
#### .lengthOf(object, length, [message])
Asserts that `object` has a `length` property with the expected value.

```javascript
assert.lengthOf([1,2,3], 3, 'array has length of 3');
assert.lengthOf('foobar', 6, 'string has length of 6');
```

#### Parameters
- {Mixed} object
- {Number} length
- {String} message


##hasAnyKeys
#### .hasAnyKeys(object, [keys], [message])
Asserts that `object` has at least one of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.hasAnyKey({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
assert.hasAnyKey({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337]);
    assert.hasAnyKey(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'thisKeyDoesNotExist']);
    assert.hasAnyKey(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'thisKeyDoesNotExist']);
```

#### Parameters
- {Mixed} object
- {Array|Object} keys
- {String} message


##hasAllKeys
#### .hasAllKeys(object, [keys], [message])
Asserts that `object` has all and only all of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337]);
    assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
    assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
```

#### Parameters
- {Mixed} object
- {String[]} keys
- {String} message


##containsAllKeys
#### .containsAllKeys(object, [keys], [message])
Asserts that `object` has all of the `keys` provided but may have more keys not listed.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
    assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
    assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
    assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
    assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
    assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}]);
    assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
```

#### Parameters
- {Mixed} object
- {String[]} keys
- {String} message


##doesNotHaveAnyKeys
#### .doesNotHaveAnyKeys(object, [keys], [message])
Asserts that `object` has none of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
    assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
    assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
```

#### Parameters
- {Mixed} object
- {String[]} keys
- {String} message


##doesNotHaveAllKeys
#### .doesNotHaveAllKeys(object, [keys], [message])
Asserts that `object` does not have at least one of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
    assert.doesNotHaveAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
    assert.doesNotHaveAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
```

#### Parameters
- {Mixed} object
- {String[]} keys
- {String} message


##doesNotHaveAllKeys
#### .hasAnyDeepKeys(object, [keys], [message])
Asserts that `object` has at least one of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), [{one: 'one'}, {two: 'two'}]);
    assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
    assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {three: 'three'}]);
    assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
```

#### Parameters
- {Mixed} object
- {Array|Object} keys
- {String} message


##hasAllDeepKeys
#### .hasAllDeepKeys(object, [keys], [message])
Asserts that `object` has all and only all of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne']]), {one: 'one'});
assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    assert.hasAllDeepKeys(new Set([{one: 'one'}]), {one: 'one'});
    assert.hasAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
```

#### Parameters
- {Mixed} object
- {Array|Object} keys
- {String} message


##containsAllDeepKeys
#### .containsAllDeepKeys(object, [keys], [message])
Asserts that `object` contains all of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
    assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
```

#### Parameters
- {Mixed} object
- {Array|Object} keys
- {String} message


##doesNotHaveAnyDeepKeys
#### .doesNotHaveAnyDeepKeys(object, [keys], [message])
Asserts that `object` has none of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
    assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
    assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
```

#### Parameters
- {Mixed} object
- {Array|Object} keys
- {String} message


##doesNotHaveAllDeepKeys
#### .doesNotHaveAllDeepKeys(object, [keys], [message])
Asserts that `object` does not have at least one of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

```javascript
assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {one: 'one'}]);
    assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
    assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {fifty: 'fifty'}]);
```

#### Parameters
- {Mixed} object
- {Array|Object} keys
- {String} message


##throws
#### .throws(fn, [errorLike/string/regexp], [string/regexp], [message])
If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an
instance of `errorLike`.
If `errorLike` is an `Error` instance, asserts that the error thrown is the same
instance as `errorLike`.
If `errMsgMatcher` is provided, it also asserts that the error thrown will have a
message matching `errMsgMatcher`.

```javascript
assert.throws(fn, 'function throws a reference error');
assert.throws(fn, /function throws a reference error/);
    assert.throws(fn, ReferenceError);
    assert.throws(fn, errorInstance);
    assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg');
    assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg');
    assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
    assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);
```

#### Parameters
- {Function} fn
- {ErrorConstructor|Error} errorLike
- {RegExp|String} errMsgMatcher
- {String} message


##doesNotThrow
#### .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])
If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an
instance of `errorLike`.
If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same
instance as `errorLike`.
If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a
message matching `errMsgMatcher`.

```javascript
assert.doesNotThrow(fn, 'Any Error thrown must not have this message');
assert.doesNotThrow(fn, /Any Error thrown must not match this/);
    assert.doesNotThrow(fn, Error);
    assert.doesNotThrow(fn, errorInstance);
    assert.doesNotThrow(fn, Error, 'Error must not have this message');
    assert.doesNotThrow(fn, errorInstance, 'Error must not have this message');
    assert.doesNotThrow(fn, Error, /Error must not match this/);
    assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
```

#### Parameters
- {Function} fn
- {ErrorConstructor} errorLike
- {RegExp|String} errMsgMatcher
- {String} message


##operator
#### .operator(val1, operator, val2, [message])
Compares two values using `operator`.

```javascript
assert.operator(1, '<', 2, 'everything is ok');
assert.operator(1, '>', 2, 'this will fail');
```

#### Parameters
- {Mixed} val1
- {String} operator
- {Mixed} val2
- {String} message


##closeTo
#### .closeTo(actual, expected, delta, [message])
Asserts that the target is equal `expected`, to within a +/- `delta` range.

```javascript
assert.closeTo(1.5, 1, 0.5, 'numbers are close');
```

#### Parameters
- {Number} actual
- {Number} expected
- {Number} delta
- {String} message


##approximately
#### .approximately(actual, expected, delta, [message])
Asserts that the target is equal `expected`, to within a +/- `delta` range.

```javascript
assert.approximately(1.5, 1, 0.5, 'numbers are close');
```

#### Parameters
- {Number} actual
- {Number} expected
- {Number} delta
- {String} message


##sameMembers
#### .sameMembers(set1, set2, [message])
Asserts that `set1` and `set2` have the same members in any order. Uses a
strict equality check (===).

```javascript
assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##notSameMembers
#### .notSameMembers(set1, set2, [message])
Asserts that `set1` and `set2` don't have the same members in any order.
Uses a strict equality check (===).

```javascript
assert.notSameMembers([ 1, 2, 3 ], [ 5, 1, 3 ], 'not same members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##sameDeepMembers
#### .sameDeepMembers(set1, set2, [message])
Asserts that `set1` and `set2` have the same members in any order. Uses a
deep equality check.

```javascript
assert.sameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##notSameDeepMembers
#### .notSameDeepMembers(set1, set2, [message])
Asserts that `set1` and `set2` don't have the same members in any order.
Uses a deep equality check.

```javascript
assert.notSameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { f: 5 }], 'not same deep members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##sameOrderedMembers
#### .sameOrderedMembers(set1, set2, [message])
Asserts that `set1` and `set2` have the same members in the same order.
Uses a strict equality check (===).

```javascript
assert.sameOrderedMembers([ 1, 2, 3 ], [ 1, 2, 3 ], 'same ordered members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##notSameOrderedMembers
#### .notSameOrderedMembers(set1, set2, [message])
Asserts that `set1` and `set2` don't have the same members in the same
order. Uses a strict equality check (===).

```javascript
assert.notSameOrderedMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'not same ordered members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##sameDeepOrderedMembers
#### .sameDeepOrderedMembers(set1, set2, [message])
Asserts that `set1` and `set2` have the same members in the same order.
Uses a deep equality check.

assert.sameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { c: 3 } ], 'same deep ordered members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##notSameDeepOrderedMembers
#### .notSameDeepOrderedMembers(set1, set2, [message])
Asserts that `set1` and `set2` don't have the same members in the same
order. Uses a deep equality check.

assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { z: 5 } ], 'not same deep ordered members');
assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { c: 3 } ], 'not same deep ordered members');
```

#### Parameters
- {Array} set1
- {Array} set2
- {String} message


##includeMembers
#### .includeMembers(superset, subset, [message])
Asserts that `subset` is included in `superset` in any order. Uses a
strict equality check (===). Duplicates are ignored.

```javascript
assert.includeMembers([ 1, 2, 3 ], [ 2, 1, 2 ], 'include members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##notIncludeMembers
#### .notIncludeMembers(superset, subset, [message])
Asserts that `subset` isn't included in `superset` in any order. Uses a
strict equality check (===). Duplicates are ignored.

```javascript
assert.notIncludeMembers([ 1, 2, 3 ], [ 5, 1 ], 'not include members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##includeDeepMembers
#### .includeDeepMembers(superset, subset, [message])
Asserts that `subset` is included in `superset` in any order. Uses a deep
equality check. Duplicates are ignored.

```javascript
assert.includeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { b: 2 } ], 'include deep members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##notIncludeDeepMembers
#### .notIncludeDeepMembers(superset, subset, [message])
Asserts that `subset` isn't included in `superset` in any order. Uses a
deep equality check. Duplicates are ignored.

```javascript
assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##includeOrderedMembers
#### .includeOrderedMembers(superset, subset, [message])
Asserts that `subset` is included in `superset` in the same order
beginning with the first element in `superset`. Uses a strict equality
check (===).

```javascript
assert.includeOrderedMembers([ 1, 2, 3 ], [ 1, 2 ], 'include ordered members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##notIncludeOrderedMembers
#### .notIncludeOrderedMembers(superset, subset, [message])
Asserts that `subset` isn't included in `superset` in the same order
beginning with the first element in `superset`. Uses a strict equality
check (===).

```javascript
assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 1 ], 'not include ordered members');
assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 3 ], 'not include ordered members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##includeDeepOrderedMembers
#### .includeDeepOrderedMembers(superset, subset, [message])
Asserts that `subset` is included in `superset` in the same order
beginning with the first element in `superset`. Uses a deep equality
check.

```javascript
assert.includeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 } ], 'include deep ordered members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##notIncludeDeepOrderedMembers
#### .notIncludeDeepOrderedMembers(superset, subset, [message])
Asserts that `subset` isn't included in `superset` in the same order
beginning with the first element in `superset`. Uses a deep equality
check.

```javascript
assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { f: 5 } ], 'not include deep ordered members');
assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 } ], 'not include deep ordered members');
    assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { c: 3 } ], 'not include deep ordered members');
```

#### Parameters
- {Array} superset
- {Array} subset
- {String} message


##oneOf
#### .oneOf(inList, list, [message])
Asserts that non-object, non-array value `inList` appears in the flat array `list`.

```javascript
assert.oneOf(1, [ 2, 1 ], 'Not found in list');
```

#### Parameters
- {*} inList
- {Array<*>} list
- {String} message


##changes
#### .changes(function, object, property, [message])
Asserts that a function changes the value of a property.

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 22 };
    assert.changes(fn, obj, 'val');
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {String} message _optional_


##changesBy
#### .changesBy(function, object, property, delta, [message])
Asserts that a function changes the value of a property by an amount (delta).

```javascript
var obj = { val: 10 };
var fn = function() { obj.val += 2 };
    assert.changesBy(fn, obj, 'val', 2);
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {Number} change amount (delta)
- {String} message _optional_


##doesNotChange
#### .doesNotChange(function, object, property, [message])
Asserts that a function does not change the value of a property.

```javascript
var obj = { val: 10 };
var fn = function() { console.log('foo'); };
    assert.doesNotChange(fn, obj, 'val');
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {String} message _optional_


##changesButNotBy
#### .changesButNotBy(function, object, property, delta, [message])
Asserts that a function does not change the value of a property or of a function's return value by an amount (delta)

```javascript
var obj = { val: 10 };
var fn = function() { obj.val += 10 };
    assert.changesButNotBy(fn, obj, 'val', 5);
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {Number} change amount (delta)
- {String} message _optional_


##increases
#### .increases(function, object, property, [message])
Asserts that a function increases a numeric object property.

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 13 };
    assert.increases(fn, obj, 'val');
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {String} message _optional_


##increasesBy
#### .increasesBy(function, object, property, delta, [message])
Asserts that a function increases a numeric object property or a function's return value by an amount (delta).

```javascript
var obj = { val: 10 };
var fn = function() { obj.val += 10 };
    assert.increasesBy(fn, obj, 'val', 10);
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {Number} change amount (delta)
- {String} message _optional_


##doesNotIncrease
#### .doesNotIncrease(function, object, property, [message])
Asserts that a function does not increase a numeric object property.

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 8 };
    assert.doesNotIncrease(fn, obj, 'val');
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {String} message _optional_


##increasesButNotBy
#### .increasesButNotBy(function, object, property, [message])
Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 15 };
    assert.increasesButNotBy(fn, obj, 'val', 10);
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {Number} change amount (delta)
- {String} message _optional_


##decreases
#### .decreases(function, object, property, [message])
Asserts that a function decreases a numeric object property.

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 5 };
    assert.decreases(fn, obj, 'val');
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {String} message _optional_


##decreasesBy
#### .decreasesBy(function, object, property, delta, [message])
Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)

```javascript
var obj = { val: 10 };
var fn = function() { obj.val -= 5 };
    assert.decreasesBy(fn, obj, 'val', 5);
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {Number} change amount (delta)
- {String} message _optional_


##doesNotDecrease
#### .doesNotDecrease(function, object, property, [message])
Asserts that a function does not decreases a numeric object property.

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 15 };
    assert.doesNotDecrease(fn, obj, 'val');
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {String} message _optional_


##doesNotDecrease
#### .doesNotDecreaseBy(function, object, property, delta, [message])
Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 5 };
    assert.doesNotDecreaseBy(fn, obj, 'val', 1);
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {Number} change amount (delta)
- {String} message _optional_


##decreasesButNotBy
#### .decreasesButNotBy(function, object, property, delta, [message])
Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)

```javascript
var obj = { val: 10 };
var fn = function() { obj.val = 5 };
    assert.decreasesButNotBy(fn, obj, 'val', 1);
```

#### Parameters
- {Function} modifier function
- {Object} object or getter function
- {String} property name _optional_
- {Number} change amount (delta)
- {String} message _optional_


##ifError
#### .ifError(object)
Asserts if value is not a false value, and throws if it is a true value.
This is added to allow for chai to be a drop-in replacement for Node's
assert class.

```javascript
var err = new Error('I am a custom error');
assert.ifError(err); // Rethrows err!
```

#### Parameters
- {Object} object


##isExtensible
#### .isExtensible(object)
Asserts that `object` is extensible (can have new properties added to it).

```javascript
assert.isExtensible({});
```

#### Parameters
- {Object} object
- {String} message _optional_


##isNotExtensible
#### .isNotExtensible(object)
Asserts that `object` is _not_ extensible.

```javascript
var nonExtensibleObject = Object.preventExtensions({});
var sealedObject = Object.seal({});
    var frozenObject = Object.freeze({});

    assert.isNotExtensible(nonExtensibleObject);
    assert.isNotExtensible(sealedObject);
    assert.isNotExtensible(frozenObject);
```

#### Parameters
- {Object} object
- {String} message _optional_


##isSealed
#### .isSealed(object)
Asserts that `object` is sealed (cannot have new properties added to it
and its existing properties cannot be removed).

```javascript
var sealedObject = Object.seal({});
var frozenObject = Object.seal({});

    assert.isSealed(sealedObject);
    assert.isSealed(frozenObject);
```

#### Parameters
- {Object} object
- {String} message _optional_


##isNotSealed
#### .isNotSealed(object)
Asserts that `object` is _not_ sealed.

```javascript
assert.isNotSealed({});
```

#### Parameters
- {Object} object
- {String} message _optional_


##isFrozen
#### .isFrozen(object)
Asserts that `object` is frozen (cannot have new properties added to it
and its existing properties cannot be modified).

```javascript
var frozenObject = Object.freeze({});
assert.frozen(frozenObject);
```

#### Parameters
- {Object} object
- {String} message _optional_


##isNotFrozen
#### .isNotFrozen(object)
Asserts that `object` is _not_ frozen.

```javascript
assert.isNotFrozen({});
```

#### Parameters
- {Object} object
- {String} message _optional_


##isEmpty
#### .isEmpty(target)
Asserts that the target does not contain any values.
For arrays and strings, it checks the `length` property.
For `Map` and `Set` instances, it checks the `size` property.
For non-function objects, it gets the count of own
enumerable string keys.

```javascript
assert.isEmpty([]);
assert.isEmpty('');
    assert.isEmpty(new Map);
    assert.isEmpty({});
```

#### Parameters
- {Object|Array|String|Map|Set} target
- {String} message _optional_


##isNotEmpty
#### .isNotEmpty(target)
Asserts that the target contains values.
For arrays and strings, it checks the `length` property.
For `Map` and `Set` instances, it checks the `size` property.
For non-function objects, it gets the count of own
enumerable string keys.

```javascript
assert.isNotEmpty([1, 2]);
assert.isNotEmpty('34');
    assert.isNotEmpty(new Set([5, 6]));
    assert.isNotEmpty({ key: 7 });
```

#### Parameters
- {Object|Array|String|Map|Set} target
- {String} message _optional_




