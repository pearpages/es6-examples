# Syntax

+ let
+ const
+ spread/rest
+ default value expressions
+ destructuring
+ object literal extensions
+ arrow functions
+ for..of loops
+ regular expressions

---

## let declarations

```js
{
    let a = 2, b, c;
    // ...
}
```

```js
{
    console.log(b); // undefined
    let b;
    console.log(z); // error: not defined
}
```

---

## const declarations

> Constants are not a restriction on the value itself, but on the variable assignment of that value. In other words, the value is not frozen, just the assignment of it.

```js
{
    const a = [1,2,3];
    a.push(4);
    console.log(a);

    a = 42;
}
```

> Assigning an object or array as a constant means that value will never be able to be garbage collected, since the reference to the value can never be unset. That may be desirable, but be careful if it’s not your intent!

>  Don’t just use const on variables that otherwise don’t obviously appear to be treated as constants in the code, as that will just lead to more confusion.

---

## Spread / Rest

### Spread

#### Functions
```js
function fo(x,y,z) {
    console.log(x,y,z);
}

foo(...[1,2,3]);
```

old way ES5

```js
foo.apply(null,[1,2,3]);
```

#### Arrays

```js
var a = [2,3,4];
var b = [1, ...a, 5];

console.log(b); // [1,2,3,4,5]
```

old way

```js
var c = [2,3,4];
// concat retuns a new array!
var d  = [1].concat(c,[5]);

console.log(d); // [1,2,3,4,5]
```

### Rest

```js
function foo(...args) {
    console.log(args);
}

function bar() {
    // old way
    // turn arguments into a real array
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
}

foo(1,2,3,4,5,6); // [1,2,3,4,5,6]

bar(1,2,3,4,5,6); // [1,2,3,4,5,6]
```

---

## Default Value Expressions

> Default value expressions are lazily evaluated, meaning they’re only run if and when they’re needed — that is, when a parameter’s argument is omit‐ ted or is undefined.

```js
console.log(foo()); // { x: 11, y: 31 }
console.log(bar()); // { x: 11, y: 31 }

// old way
function foo(x,y) {
    x = (x!==undefined) || 11;
    y = (y!==undefined) || 31;
    return {x,y};
}

// es6
function bar(x=11,y=31) {
    return {x,y};
}
```

```js
let y = 9;

console.log(foo()); // { x: 12, z: 7 }

function bar(x) {
    return x - 5;
}

function foo(x = y + 3, z = bar(x)) {
    return {x,z};
}
```

---

## Destructuring

Or *structure assignment*.

> Destructuring is a general assignment operation, not just a declaration.

```js
// old way
var tmp = foo();
var x = tmp[0], y=tmp[1], z=tmp[2];
console.log(x,y,z); // 1 2 3
var tmpA = bar();
var a = tmpA.x, b = tmpA.y, c = tmpA.z;
console.log(a,b,c); // 4 5 6

// es 6 way
var [d,e,f] = foo();
var {x:g,y:h,z:i} = bar();
console.log(d,e,f); // 1 2 3
console.log(g,h,i); // 4 5 6

function foo() {
    return [1, 2, 3];
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
```

```js
 var {c,b,a} = bar();
console.log(c,b,a); // 3 2 1

function bar() {
    return { a: 1, b: 2, c: 3 };
}
```

```js
var aa = 10, bb = 20;

var o = {x: aa, y: bb};
var {x:AA, y:BB} = o;

console.log(AA,BB); // 10 20
```

```js
 var a, b, c, x, y, z;
[a,b,c] = foo(); // 1 2 3
({x,y,z} = bar()); // 4 5 6

console.log(a,b,c);
console.log(x,y,z);

function foo() {
    return [1,2,3];
}

function bar() {
    return {x:4,y:5,z:6};
}
```

### Assigning only a few

```js
var [,b] = foo();
var {x,z} = bar();

console.log(b,x,z); // 2 1 3

function foo () {
    return [1,2,3];
}

function bar() {
    return {x:1,y:2,z:3};
}
```

### Default value assignment

```js
let [a = 3, b = 4, c = 7, d = 13] = foo();
let {x= 23, y=4, z=-9, w= 12} = bar();

console.log(a,b,c,d); // 1 2 3 13
console.log(x,y,z,w); // 12 34 56 12

function foo () {
    return [1,2,3];
}

function bar() {
    return {
        x: 12,
        y: 34,
        z: 56
    };
```

### Nested destructuring

```js
var a1 = [1, [2, 3, 4], 5];
var o1 = { x: { y: { z: 6 } } };
var [a, [b, c, d], e] = a1;
var { x: { y: { z: w } } } = o1;
console.log(a, b, c, d, e); // 1 2 3 4 5
console.log(w); // 6
```

### Destructuring Parameters

```js
foo([1,2]); // { x: 1, y: 2 }

function foo ([x,y]) {
    console.log( {x,y});
}
```

---

## Object Literal Extensions

### Concise Properties

```js
var x = 2, y = 3, o, p;

// old way
o = {
    x: x,
    y: y
};

console.log(o); // { x: 2, y: 3 }

// es6 way

p = {x,y};

console.log(p); // { x: 2, y: 3 }
```

### Concise Methods

> concise methods have special behaviors that their older counterparts don’t; specifically, the allowance for super “Object super".

```js
// old way
var o = {
    x: function () {
        console.log('hello world!')
    }
};

// new way
var p = {
    x() {
        console.log('hello world');
    }
};

o.x(); // hello world!
p.x(); // hello world
```

### Getters and Setters

```js
var o = {
    __id: 10,
    get id() { return this.__id++; },
    set id(v) { this.__id = v; }
}
console.log(o.id); // 10 o.id; // 11 o.id = 20;
console.log(o.id); // 20
// and:
console.log(o.__id); // 21
console.log(o.__id); // 21 -- still!
```

### Other

+ Computed Property Names
+ Setting Prototype
+ Object super

---

## Template Literals

> It should have been called: *Interpolated String Literals*. **Kyle Simpson**.

### Interpolated Expressions

```js
function bar() {
    var name = "bar";
    foo( `Hello from ${name}!` );
}
```

### Tagged Tempplate Literals

```js
function latex(str) {
 return { "cooked": str[0], "raw": str.raw[0] }
}

latex`\unicode` // { cooked: undefined, raw: "\\unicode" }
```

---

## Arrow Functions

### Not Just Shorter Syntax, But *this*

> arrow functions are primarily designed to alter this behavior in a specific way, solving a particu‐ lar and common pain point with this-aware coding.

```js
//before arrow functions

// In other words, because this bindings are dynamic, we fall back to the predictability of lexical scope via the self variable.
var controller = {
    makeRequest: function () {
        var self = this;

        btn.addEventListener("click", function () {
            self.makeRequest();
        }, false);
    }
};
```

With arrow functions

```js
// Inside arrow functions, the this binding is not dynamic, but is instead lexical.
var controller = {
    makeRequest: function () {
        var self = this;

        btn.addEventListener("click", () => {
            this.makeRequest();
        }, false);
    }
};
```

---

## for .. of Loops

+ arrays
+ strings
+ generators
+ collections / TypedArrays

```js
var a = ['a', 'b', 'c', 'd', 'e'];

a.forEach((v, i) => console.log(v, i));

// =>
// a 0
// b 1
// c 2
// d 3
// e 4

idsAndValues(a);

// =>
// 0 a
// 1 b
// 2 c
// 3 d
// 4 e

onlyValues(a);

// =>
// a
// b
// c
// d
// e

oldWay(a);

// =>
// a
// b
// c
// d
// e

function oldWay(array) {
    var k = Object.keys(array);
    for (var val, i = 0; i < k.length; i++) {
        val = array[k[i]];
        console.log(val);
    }
}

function idsAndValues(array) {
    for (var id in array) {
        console.log(id, array[id]);
    }
}

function onlyValues(array) {
    for (var val of array) {
        console.log(val);
    }
}
```

---

## Regular Expressions

### Unicode Flag

So, as of ES6, the u flag tells a regular expression to process a string with the intepre‐ tation of Unicode (UTF-16) characters, such that such an extended character will be matched as a single entity.

### Sticky Flag

Sticky essentially means the regular expression has a virtual anchor at its beginning that keeps it rooted to matching at only the position indicated by the regu‐ lar expression’s lastIndex property.

---

## Number Literal Extensions

