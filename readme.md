# ES2015 examples

Just comment or uncomment the part of the code you want to run to understand ES2015 functionality.

Most of the functionality of ES2015 works already in node. For import and export statements though we need babel.

## Babel

```bash
npm install -g babel-core
npm install -g babel-cli
npm install --save-dev babel-preset-es2015
```

**.babelrc**

```
{
  "presets": ["es2015"]
}
```

---

## Arrow Function

Using arrow functions you might have trouble with:

- Not being so readable
- Not being so traceable when debugging

```js
var foo = () => 2;
var foo = => 3;
var foo = () => 3;
var foo = x => 3;
var foo = (...x) => 3;
var foo = (x,y) => 3;
var foo = x => { try {3;} catch(e) {} };
var foo = x => { return 3; };
var foo = ({y:x});
```

In contrast with

```js
p.then( function extractId(v) {return v.id} );
```

### The Right Example

#### The Problem

```js
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout( function() {
      console.log('?',this.id); // undefined
    },100);
  }
}

obj.foo();
```

#### Possible Solutions

```js
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout( function() {
      console.log('bind',this.id);
    }.bind(this),100);
  }
}

obj.foo();
```

```js
var obj = {
  id: 42,
  foo: function foo() {
    var context = this;
    setTimeout( function() {
      console.log('context',context.id);
    }.bind(this),100);
  }
}

obj.foo();
```

#### Arrow Function

```js
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout( () => console.log('arrow',this.id),100);
  }
}

obj.foo();
```

---

## Let vs Var

Try to use the declarations as close to where they are being used as possible.

```js
function foo(x,y) {
  var z = x * 2;

  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }

  for ( let i = 0; i < 10; i++) {
    // ...
  }
}
```

---

## Const

A constant is a variable that cannot be reassigned. NOT A VALUEABLE THAT DOESN'T CHANGE.

> Const is about assignment.

```js
const x = [1,2,3];
x.push(4);
console.log(x); // [1,2,3,4]
```

### Object.freeze

```js
const x = [1,2,3];
Object.freeze(x);
x.push(4); // error
```

### When

```js
const PI = 3.1416;
```

---

## Default values

```js
function (x) {
  var x = x || 2;
  // ...
}
```

vs

```js
function (x = 2) {
  // ...
}
```

---

## Lazy Expressions

Some good examples

```js
// When generating a default new id
function uniqId() {
  return Math.random();
}

function foo(id = unidId()) {

}

foo();
foo();
```

```js
// throw an error when a parameter is missing
function missingParameter() {
  throw 'Missing parameter';
}

function myFunction(x = missingParameter()) {
  // ...
}

try {
    myFunction();
} catch (err) {
    console.log(err);
}
```