# Syntax

+ let
+ const
+ spread/rest
+ default value expressions
+ destructuring

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