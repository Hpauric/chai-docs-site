---
title: Chai API Reference

language_tabs:
  - shell
  - ruby
  - python
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

## API Reference

### assert(expression, message)

* @param { Mixed } expression to test for truthiness
* @param { String } message to display on error
Write your own test expressions.

```javascript
assert('foo' !== 'bar', 'foo is not bar');
assert(Array.isArray([]), 'empty arrays are arrays');
```

### .fail(actual, expected, [message], [operator])

* @param { Mixed } actual
* @param { Mixed } expected
* @param { String } message
* @param { String } operator

Throw a failure. Node.js assert module-compatible.

## assert(expression, message)

Write your own test expressions.

    assert('foo' !== 'bar', 'foo is not bar');
    assert(Array.isArray([]), 'empty arrays are arrays');
## .fail(actual, expected, [message], [operator])

Throw a failure. Node.js `assert` module-compatible.
## .isOk(object, [message])

Asserts that `object` is truthy.

    assert.isOk('everything', 'everything is ok');
    assert.isOk(false, 'this will fail');
## .isNotOk(object, [message])

Asserts that `object` is falsy.

    assert.isNotOk('everything', 'this will fail');
    assert.isNotOk(false, 'this will pass');
## .equal(actual, expected, [message])

Asserts non-strict equality (`==`) of `actual` and `expected`.

    assert.equal(3, '3', '== coerces values to strings');
## .notEqual(actual, expected, [message])

Asserts non-strict inequality (`!=`) of `actual` and `expected`.

    assert.notEqual(3, 4, 'these numbers are not equal');
## .strictEqual(actual, expected, [message])

Asserts strict equality (`===`) of `actual` and `expected`.

    assert.strictEqual(true, true, 'these booleans are strictly equal');
## .notStrictEqual(actual, expected, [message])

Asserts strict inequality (`!==`) of `actual` and `expected`.

    assert.notStrictEqual(3, '3', 'no coercion for strict equality');
## .deepEqual(actual, expected, [message])

Asserts that `actual` is deeply equal to `expected`.

    assert.deepEqual({ tea: 'green' }, { tea: 'green' });
## .notDeepEqual(actual, expected, [message])

Assert that `actual` is not deeply equal to `expected`.

    assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
## .isAbove(valueToCheck, valueToBeAbove, [message])

Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.

    assert.isAbove(5, 2, '5 is strictly greater than 2');
## .isAtLeast(valueToCheck, valueToBeAtLeast, [message])

Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.

    assert.isAtLeast(5, 2, '5 is greater or equal to 2');
    assert.isAtLeast(3, 3, '3 is greater or equal to 3');
## .isBelow(valueToCheck, valueToBeBelow, [message])

Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.

    assert.isBelow(3, 6, '3 is strictly less than 6');
## .isAtMost(valueToCheck, valueToBeAtMost, [message])

Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.

    assert.isAtMost(3, 6, '3 is less than or equal to 6');
    assert.isAtMost(4, 4, '4 is less than or equal to 4');
## .isTrue(value, [message])

Asserts that `value` is true.

    var teaServed = true;
    assert.isTrue(teaServed, 'the tea has been served');
## .isNotTrue(value, [message])

Asserts that `value` is not true.

    var tea = 'tasty chai';
    assert.isNotTrue(tea, 'great, time for tea!');
## .isFalse(value, [message])

Asserts that `value` is false.

    var teaServed = false;
    assert.isFalse(teaServed, 'no tea yet? hmm...');
## .isNotFalse(value, [message])

Asserts that `value` is not false.

    var tea = 'tasty chai';
    assert.isNotFalse(tea, 'great, time for tea!');
## .isNull(value, [message])

Asserts that `value` is null.

    assert.isNull(err, 'there was no error');
## .isNotNull(value, [message])

Asserts that `value` is not null.

    var tea = 'tasty chai';
    assert.isNotNull(tea, 'great, time for tea!');
## .isNaN

Asserts that value is NaN.

    assert.isNaN(NaN, 'NaN is NaN');
## .isNotNaN

Asserts that value is not NaN.

    assert.isNotNaN(4, '4 is not NaN');
## .exists

Asserts that the target is neither `null` nor `undefined`.

    var foo = 'hi';

    assert.exists(foo, 'foo is neither `null` nor `undefined`');
## .notExists

Asserts that the target is either `null` or `undefined`.

    var bar = null
      , baz;

    assert.notExists(bar);
    assert.notExists(baz, 'baz is either null or undefined');
## .isUndefined(value, [message])

Asserts that `value` is `undefined`.

    var tea;
    assert.isUndefined(tea, 'no tea defined');
## .isDefined(value, [message])

Asserts that `value` is not `undefined`.

    var tea = 'cup of chai';
    assert.isDefined(tea, 'tea has been defined');
## .isFunction(value, [message])

Asserts that `value` is a function.

    function serveTea() { return 'cup of tea'; };
    assert.isFunction(serveTea, 'great, we can have tea now');
## .isNotFunction(value, [message])

Asserts that `value` is _not_ a function.

    var serveTea = [ 'heat', 'pour', 'sip' ];
    assert.isNotFunction(serveTea, 'great, we have listed the steps');
## .isObject(value, [message])

Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
_The assertion does not match subclassed objects._

    var selection = { name: 'Chai', serve: 'with spices' };
    assert.isObject(selection, 'tea selection is an object');
## .isNotObject(value, [message])

Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).

    var selection = 'chai'
    assert.isNotObject(selection, 'tea selection is not an object');
    assert.isNotObject(null, 'null is not an object');
## .isArray(value, [message])

Asserts that `value` is an array.

    var menu = [ 'green', 'chai', 'oolong' ];
    assert.isArray(menu, 'what kind of tea do we want?');
## .isNotArray(value, [message])

Asserts that `value` is _not_ an array.

    var menu = 'green|chai|oolong';
    assert.isNotArray(menu, 'what kind of tea do we want?');
## .isString(value, [message])

Asserts that `value` is a string.

    var teaOrder = 'chai';
    assert.isString(teaOrder, 'order placed');
## .isNotString(value, [message])

Asserts that `value` is _not_ a string.

    var teaOrder = 4;
    assert.isNotString(teaOrder, 'order placed');
## .isNumber(value, [message])

Asserts that `value` is a number.

    var cups = 2;
    assert.isNumber(cups, 'how many cups');
## .isNotNumber(value, [message])

Asserts that `value` is _not_ a number.

    var cups = '2 cups please';
    assert.isNotNumber(cups, 'how many cups');
## .isFinite(value, [message])

Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.

    var cups = 2;
    assert.isFinite(cups, 'how many cups');

    assert.isFinite(NaN); // throws
## .isBoolean(value, [message])

Asserts that `value` is a boolean.

    var teaReady = true
      , teaServed = false;

    assert.isBoolean(teaReady, 'is the tea ready');
    assert.isBoolean(teaServed, 'has tea been served');
## .isNotBoolean(value, [message])

Asserts that `value` is _not_ a boolean.

    var teaReady = 'yep'
      , teaServed = 'nope';

    assert.isNotBoolean(teaReady, 'is the tea ready');
    assert.isNotBoolean(teaServed, 'has tea been served');
## .typeOf(value, name, [message])

Asserts that `value`'s type is `name`, as determined by
`Object.prototype.toString`.

    assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
    assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
    assert.typeOf('tea', 'string', 'we have a string');
    assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
    assert.typeOf(null, 'null', 'we have a null');
    assert.typeOf(undefined, 'undefined', 'we have an undefined');
## .notTypeOf(value, name, [message])

Asserts that `value`'s type is _not_ `name`, as determined by
`Object.prototype.toString`.

    assert.notTypeOf('tea', 'number', 'strings are not numbers');
## .instanceOf(object, constructor, [message])

Asserts that `value` is an instance of `constructor`.

    var Tea = function (name) { this.name = name; }
      , chai = new Tea('chai');

    assert.instanceOf(chai, Tea, 'chai is an instance of tea');
## .notInstanceOf(object, constructor, [message])

Asserts `value` is not an instance of `constructor`.

    var Tea = function (name) { this.name = name; }
      , chai = new String('chai');

    assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
## .include(haystack, needle, [message])

Asserts that `haystack` includes `needle`. Can be used to assert the
inclusion of a value in an array, a substring in a string, or a subset of
properties in an object.

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
## .notInclude(haystack, needle, [message])

Asserts that `haystack` does not include `needle`. Can be used to assert
the absence of a value in an array, a substring in a string, or a subset of
properties in an object.

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
## .deepInclude(haystack, needle, [message])

Asserts that `haystack` includes `needle`. Can be used to assert the
inclusion of a value in an array or a subset of properties in an object.
Deep equality is used.

    var obj1 = {a: 1}
      , obj2 = {b: 2};
    assert.deepInclude([obj1, obj2], {a: 1});
    assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
    assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 2}});
## .notDeepInclude(haystack, needle, [message])

Asserts that `haystack` does not include `needle`. Can be used to assert
the absence of a value in an array or a subset of properties in an object.
Deep equality is used.

    var obj1 = {a: 1}
      , obj2 = {b: 2};
    assert.notDeepInclude([obj1, obj2], {a: 9});
    assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 9}});
    assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 9}});
## .nestedInclude(haystack, needle, [message])

Asserts that 'haystack' includes 'needle'. 
Can be used to assert the inclusion of a subset of properties in an 
object.
Enables the use of dot- and bracket-notation for referencing nested 
properties.
'[]' and '.' in property names can be escaped using double backslashes.

    assert.nestedInclude({'.a': {'b': 'x'}}, {'\\.a.[b]': 'x'});
    assert.nestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'x'});
## .notNestedInclude(haystack, needle, [message])

Asserts that 'haystack' does not include 'needle'. 
Can be used to assert the absence of a subset of properties in an 
object.
Enables the use of dot- and bracket-notation for referencing nested 
properties. 
'[]' and '.' in property names can be escaped using double backslashes.

    assert.notNestedInclude({'.a': {'b': 'x'}}, {'\\.a.b': 'y'});
    assert.notNestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'y'});
## .deepNestedInclude(haystack, needle, [message])

Asserts that 'haystack' includes 'needle'.
Can be used to assert the inclusion of a subset of properties in an 
object while checking for deep equality.
Enables the use of dot- and bracket-notation for referencing nested 
properties.
'[]' and '.' in property names can be escaped using double backslashes.

    assert.deepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {x: 1}});
    assert.deepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {x: 1}});
## .notDeepNestedInclude(haystack, needle, [message])

Asserts that 'haystack' does not include 'needle'.
Can be used to assert the absence of a subset of properties in an 
object while checking for deep equality.
Enables the use of dot- and bracket-notation for referencing nested 
properties.
'[]' and '.' in property names can be escaped using double backslashes.

    assert.notDeepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {y: 1}})
    assert.notDeepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {y: 2}});
## .ownInclude(haystack, needle, [message])

Asserts that 'haystack' includes 'needle'.
Can be used to assert the inclusion of a subset of properties in an 
object while ignoring inherited properties.

    assert.ownInclude({ a: 1 }, { a: 1 });
## .notOwnInclude(haystack, needle, [message])

Asserts that 'haystack' includes 'needle'.
Can be used to assert the absence of a subset of properties in an 
object while ignoring inherited properties.

    Object.prototype.b = 2;

    assert.notOwnInclude({ a: 1 }, { b: 2 });
## .deepOwnInclude(haystack, needle, [message])

Asserts that 'haystack' includes 'needle'.
Can be used to assert the inclusion of a subset of properties in an 
object while ignoring inherited properties and checking for deep equality.

     assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}});
## .notDeepOwnInclude(haystack, needle, [message])

Asserts that 'haystack' includes 'needle'.
Can be used to assert the absence of a subset of properties in an 
object while ignoring inherited properties and checking for deep equality.

     assert.notDeepOwnInclude({a: {b: 2}}, {a: {c: 3}});
## .match(value, regexp, [message])

Asserts that `value` matches the regular expression `regexp`.

    assert.match('foobar', /^foo/, 'regexp matches');
## .notMatch(value, regexp, [message])

Asserts that `value` does not match the regular expression `regexp`.

    assert.notMatch('foobar', /^foo/, 'regexp does not match');
## .property(object, property, [message])

Asserts that `object` has a direct or inherited property named by
`property`.

    assert.property({ tea: { green: 'matcha' }}, 'tea');
    assert.property({ tea: { green: 'matcha' }}, 'toString');
## .notProperty(object, property, [message])

Asserts that `object` does _not_ have a direct or inherited property named
by `property`.

    assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
## .propertyVal(object, property, value, [message])

Asserts that `object` has a direct or inherited property named by
`property` with a value given by `value`. Uses a strict equality check
(===).

    assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
## .notPropertyVal(object, property, value, [message])

Asserts that `object` does _not_ have a direct or inherited property named
by `property` with value given by `value`. Uses a strict equality check
(===).

    assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
    assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good');
## .deepPropertyVal(object, property, value, [message])

Asserts that `object` has a direct or inherited property named by
`property` with a value given by `value`. Uses a deep equality check.

    assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
## .notDeepPropertyVal(object, property, value, [message])

Asserts that `object` does _not_ have a direct or inherited property named
by `property` with value given by `value`. Uses a deep equality check.

    assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
    assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
    assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
## .nestedProperty(object, property, [message])

Asserts that `object` has a direct or inherited property named by
`property`, which can be a string using dot- and bracket-notation for
nested reference.

    assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green');
## .notNestedProperty(object, property, [message])

Asserts that `object` does _not_ have a property named by `property`, which
can be a string using dot- and bracket-notation for nested reference. The
property cannot exist on the object nor anywhere in its prototype chain.

    assert.notNestedProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
## .nestedPropertyVal(object, property, value, [message])

Asserts that `object` has a property named by `property` with value given
by `value`. `property` can use dot- and bracket-notation for nested
reference. Uses a strict equality check (===).

    assert.nestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
## .notNestedPropertyVal(object, property, value, [message])

Asserts that `object` does _not_ have a property named by `property` with
value given by `value`. `property` can use dot- and bracket-notation for
nested reference. Uses a strict equality check (===).

    assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
    assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'coffee.green', 'matcha');
## .deepNestedPropertyVal(object, property, value, [message])

Asserts that `object` has a property named by `property` with a value given
by `value`. `property` can use dot- and bracket-notation for nested
reference. Uses a deep equality check.

    assert.deepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yum' });
## .notDeepNestedPropertyVal(object, property, value, [message])

Asserts that `object` does _not_ have a property named by `property` with
value given by `value`. `property` can use dot- and bracket-notation for
nested reference. Uses a deep equality check.

    assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' });
    assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' });
    assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' });
## .lengthOf(object, length, [message])

Asserts that `object` has a `length` property with the expected value.

    assert.lengthOf([1,2,3], 3, 'array has length of 3');
    assert.lengthOf('foobar', 6, 'string has length of 6');
## .hasAnyKeys(object, [keys], [message])

Asserts that `object` has at least one of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.hasAnyKey({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
    assert.hasAnyKey({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337]);
    assert.hasAnyKey(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'thisKeyDoesNotExist']);
    assert.hasAnyKey(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'thisKeyDoesNotExist']);
## .hasAllKeys(object, [keys], [message])

Asserts that `object` has all and only all of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
    assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337]);
    assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
    assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
## .containsAllKeys(object, [keys], [message])

Asserts that `object` has all of the `keys` provided but may have more keys not listed.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
    assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
    assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
    assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
    assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
    assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
    assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}]);
    assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
## .doesNotHaveAnyKeys(object, [keys], [message])

Asserts that `object` has none of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
    assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
    assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
    assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
## .doesNotHaveAllKeys(object, [keys], [message])

Asserts that `object` does not have at least one of the `keys` provided.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
    assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
    assert.doesNotHaveAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
    assert.doesNotHaveAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
## .hasAnyDeepKeys(object, [keys], [message])

Asserts that `object` has at least one of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
    assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), [{one: 'one'}, {two: 'two'}]);
    assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
    assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {three: 'three'}]);
    assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
## .hasAllDeepKeys(object, [keys], [message])

Asserts that `object` has all and only all of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne']]), {one: 'one'});
    assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    assert.hasAllDeepKeys(new Set([{one: 'one'}]), {one: 'one'});
    assert.hasAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
## .containsAllDeepKeys(object, [keys], [message])

Asserts that `object` contains all of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
    assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
    assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
## .doesNotHaveAnyDeepKeys(object, [keys], [message])

Asserts that `object` has none of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
    assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
    assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
    assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
## .doesNotHaveAllDeepKeys(object, [keys], [message])

Asserts that `object` does not have at least one of the `keys` provided.
Since Sets and Maps can have objects as keys you can use this assertion to perform
a deep comparison.
You can also provide a single object instead of a `keys` array and its keys
will be used as the expected set of keys.

    assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
    assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {one: 'one'}]);
    assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
    assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {fifty: 'fifty'}]);
## .throws(fn, [errorLike/string/regexp], [string/regexp], [message])

If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an
instance of `errorLike`.
If `errorLike` is an `Error` instance, asserts that the error thrown is the same
instance as `errorLike`.
If `errMsgMatcher` is provided, it also asserts that the error thrown will have a
message matching `errMsgMatcher`.

    assert.throws(fn, 'function throws a reference error');
    assert.throws(fn, /function throws a reference error/);
    assert.throws(fn, ReferenceError);
    assert.throws(fn, errorInstance);
    assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg');
    assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg');
    assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
    assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);
## .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])

If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an
instance of `errorLike`.
If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same
instance as `errorLike`.
If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a
message matching `errMsgMatcher`.

    assert.doesNotThrow(fn, 'Any Error thrown must not have this message');
    assert.doesNotThrow(fn, /Any Error thrown must not match this/);
    assert.doesNotThrow(fn, Error);
    assert.doesNotThrow(fn, errorInstance);
    assert.doesNotThrow(fn, Error, 'Error must not have this message');
    assert.doesNotThrow(fn, errorInstance, 'Error must not have this message');
    assert.doesNotThrow(fn, Error, /Error must not match this/);
    assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
## .operator(val1, operator, val2, [message])

Compares two values using `operator`.

    assert.operator(1, '<', 2, 'everything is ok');
    assert.operator(1, '>', 2, 'this will fail');
## .closeTo(actual, expected, delta, [message])

Asserts that the target is equal `expected`, to within a +/- `delta` range.

    assert.closeTo(1.5, 1, 0.5, 'numbers are close');
## .approximately(actual, expected, delta, [message])

Asserts that the target is equal `expected`, to within a +/- `delta` range.

    assert.approximately(1.5, 1, 0.5, 'numbers are close');
## .sameMembers(set1, set2, [message])

Asserts that `set1` and `set2` have the same members in any order. Uses a
strict equality check (===).

    assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
## .notSameMembers(set1, set2, [message])

Asserts that `set1` and `set2` don't have the same members in any order.
Uses a strict equality check (===).

    assert.notSameMembers([ 1, 2, 3 ], [ 5, 1, 3 ], 'not same members');
## .sameDeepMembers(set1, set2, [message])

Asserts that `set1` and `set2` have the same members in any order. Uses a
deep equality check.

    assert.sameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members');
## .notSameDeepMembers(set1, set2, [message])

Asserts that `set1` and `set2` don't have the same members in any order.
Uses a deep equality check.

    assert.notSameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { f: 5 }], 'not same deep members');
## .sameOrderedMembers(set1, set2, [message])

Asserts that `set1` and `set2` have the same members in the same order.
Uses a strict equality check (===).

    assert.sameOrderedMembers([ 1, 2, 3 ], [ 1, 2, 3 ], 'same ordered members');
## .notSameOrderedMembers(set1, set2, [message])

Asserts that `set1` and `set2` don't have the same members in the same
order. Uses a strict equality check (===).

    assert.notSameOrderedMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'not same ordered members');
## .sameDeepOrderedMembers(set1, set2, [message])

Asserts that `set1` and `set2` have the same members in the same order.
Uses a deep equality check.

assert.sameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { c: 3 } ], 'same deep ordered members');
## .notSameDeepOrderedMembers(set1, set2, [message])

Asserts that `set1` and `set2` don't have the same members in the same
order. Uses a deep equality check.

assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { z: 5 } ], 'not same deep ordered members');
assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { c: 3 } ], 'not same deep ordered members');
## .includeMembers(superset, subset, [message])

Asserts that `subset` is included in `superset` in any order. Uses a
strict equality check (===). Duplicates are ignored.

    assert.includeMembers([ 1, 2, 3 ], [ 2, 1, 2 ], 'include members');
## .notIncludeMembers(superset, subset, [message])

Asserts that `subset` isn't included in `superset` in any order. Uses a
strict equality check (===). Duplicates are ignored.

    assert.notIncludeMembers([ 1, 2, 3 ], [ 5, 1 ], 'not include members');
## .includeDeepMembers(superset, subset, [message])

Asserts that `subset` is included in `superset` in any order. Uses a deep
equality check. Duplicates are ignored.

    assert.includeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { b: 2 } ], 'include deep members');
## .notIncludeDeepMembers(superset, subset, [message])

Asserts that `subset` isn't included in `superset` in any order. Uses a
deep equality check. Duplicates are ignored.

    assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
## .includeOrderedMembers(superset, subset, [message])

Asserts that `subset` is included in `superset` in the same order
beginning with the first element in `superset`. Uses a strict equality
check (===).

    assert.includeOrderedMembers([ 1, 2, 3 ], [ 1, 2 ], 'include ordered members');
## .notIncludeOrderedMembers(superset, subset, [message])

Asserts that `subset` isn't included in `superset` in the same order
beginning with the first element in `superset`. Uses a strict equality
check (===).

    assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 1 ], 'not include ordered members');
    assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 3 ], 'not include ordered members');
## .includeDeepOrderedMembers(superset, subset, [message])

Asserts that `subset` is included in `superset` in the same order
beginning with the first element in `superset`. Uses a deep equality
check.

    assert.includeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 } ], 'include deep ordered members');
## .notIncludeDeepOrderedMembers(superset, subset, [message])

Asserts that `subset` isn't included in `superset` in the same order
beginning with the first element in `superset`. Uses a deep equality
check.

    assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { f: 5 } ], 'not include deep ordered members');
    assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 } ], 'not include deep ordered members');
    assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { c: 3 } ], 'not include deep ordered members');
## .oneOf(inList, list, [message])

Asserts that non-object, non-array value `inList` appears in the flat array `list`.

    assert.oneOf(1, [ 2, 1 ], 'Not found in list');
## .changes(function, object, property, [message])

Asserts that a function changes the value of a property.

    var obj = { val: 10 };
    var fn = function() { obj.val = 22 };
    assert.changes(fn, obj, 'val');
## .changesBy(function, object, property, delta, [message])

Asserts that a function changes the value of a property by an amount (delta).

    var obj = { val: 10 };
    var fn = function() { obj.val += 2 };
    assert.changesBy(fn, obj, 'val', 2);
## .doesNotChange(function, object, property, [message])

Asserts that a function does not change the value of a property.

    var obj = { val: 10 };
    var fn = function() { console.log('foo'); };
    assert.doesNotChange(fn, obj, 'val');
## .changesButNotBy(function, object, property, delta, [message])

Asserts that a function does not change the value of a property or of a function's return value by an amount (delta)

    var obj = { val: 10 };
    var fn = function() { obj.val += 10 };
    assert.changesButNotBy(fn, obj, 'val', 5);
## .increases(function, object, property, [message])

Asserts that a function increases a numeric object property.

    var obj = { val: 10 };
    var fn = function() { obj.val = 13 };
    assert.increases(fn, obj, 'val');
## .increasesBy(function, object, property, delta, [message])

Asserts that a function increases a numeric object property or a function's return value by an amount (delta).

    var obj = { val: 10 };
    var fn = function() { obj.val += 10 };
    assert.increasesBy(fn, obj, 'val', 10);
## .doesNotIncrease(function, object, property, [message])

Asserts that a function does not increase a numeric object property.

    var obj = { val: 10 };
    var fn = function() { obj.val = 8 };
    assert.doesNotIncrease(fn, obj, 'val');
## .increasesButNotBy(function, object, property, [message])

Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).

    var obj = { val: 10 };
    var fn = function() { obj.val = 15 };
    assert.increasesButNotBy(fn, obj, 'val', 10);
## .decreases(function, object, property, [message])

Asserts that a function decreases a numeric object property.

    var obj = { val: 10 };
    var fn = function() { obj.val = 5 };
    assert.decreases(fn, obj, 'val');
## .decreasesBy(function, object, property, delta, [message])

Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)

    var obj = { val: 10 };
    var fn = function() { obj.val -= 5 };
    assert.decreasesBy(fn, obj, 'val', 5);
## .doesNotDecrease(function, object, property, [message])

Asserts that a function does not decreases a numeric object property.

    var obj = { val: 10 };
    var fn = function() { obj.val = 15 };
    assert.doesNotDecrease(fn, obj, 'val');
## .doesNotDecreaseBy(function, object, property, delta, [message])

Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)

    var obj = { val: 10 };
    var fn = function() { obj.val = 5 };
    assert.doesNotDecreaseBy(fn, obj, 'val', 1);
## .decreasesButNotBy(function, object, property, delta, [message])

Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)

    var obj = { val: 10 };
    var fn = function() { obj.val = 5 };
    assert.decreasesButNotBy(fn, obj, 'val', 1);
## .ifError(object)

Asserts if value is not a false value, and throws if it is a true value.
This is added to allow for chai to be a drop-in replacement for Node's
assert class.

    var err = new Error('I am a custom error');
    assert.ifError(err); // Rethrows err!
## .isExtensible(object)

Asserts that `object` is extensible (can have new properties added to it).

    assert.isExtensible({});
## .isNotExtensible(object)

Asserts that `object` is _not_ extensible.

    var nonExtensibleObject = Object.preventExtensions({});
    var sealedObject = Object.seal({});
    var frozenObject = Object.freeze({});

    assert.isNotExtensible(nonExtensibleObject);
    assert.isNotExtensible(sealedObject);
    assert.isNotExtensible(frozenObject);
## .isSealed(object)

Asserts that `object` is sealed (cannot have new properties added to it
and its existing properties cannot be removed).

    var sealedObject = Object.seal({});
    var frozenObject = Object.seal({});

    assert.isSealed(sealedObject);
    assert.isSealed(frozenObject);
## .isNotSealed(object)

Asserts that `object` is _not_ sealed.

    assert.isNotSealed({});
## .isFrozen(object)

Asserts that `object` is frozen (cannot have new properties added to it
and its existing properties cannot be modified).

    var frozenObject = Object.freeze({});
    assert.frozen(frozenObject);
## .isNotFrozen(object)

Asserts that `object` is _not_ frozen.

    assert.isNotFrozen({});
## .isEmpty(target)

Asserts that the target does not contain any values.
For arrays and strings, it checks the `length` property.
For `Map` and `Set` instances, it checks the `size` property.
For non-function objects, it gets the count of own
enumerable string keys.

    assert.isEmpty([]);
    assert.isEmpty('');
    assert.isEmpty(new Map);
    assert.isEmpty({});
## .isNotEmpty(target)

Asserts that the target contains values.
For arrays and strings, it checks the `length` property.
For `Map` and `Set` instances, it checks the `size` property.
For non-function objects, it gets the count of own
enumerable string keys.

    assert.isNotEmpty([1, 2]);
    assert.isNotEmpty('34');
    assert.isNotEmpty(new Set([5, 6]));
    assert.isNotEmpty({ key: 7 });



```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

