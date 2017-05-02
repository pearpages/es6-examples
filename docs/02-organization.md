# Organization

+ iterators
+ generators
+ modules
+ classes

---

## Iterators

An iterator is a structured pattern for pulling information from a source in one-at-a- time fashion. This pattern has been around programming for a long time.

---

## Generators

```js
function *foo() { // ..
}
```

---

## Modules

### Old way

```js
 var me = Hello("Kyle");
me.greeting(); // Hello Kyle!

function Hello(name) {
    function greeting() {
        console.log("Hello " + name + "!");
    }
    // public API
    return {
        greeting: greeting
    };
}
```

### ES6

ES6 modules are file-based, meaning one module per file. At this time, there is no standardized way of combining multiple modules into a single file.

> Anything you don’t label with export stays private inside the scope of the module.

```js
function foo() { // ..
}

var awesome = 42;
var bar = [1,2,3];

export { foo, awesome, bar };
```

```js
import { foo as theFooFunc } from "foo"; theFooFunc();
```

### Circular Module Dependency

The static loading semantics of the import statement mean that a "foo" and "bar" which mutually depend on each other via import will ensure that both are loaded, parsed, and compiled before either of them runs. So their circular dependency is stat‐ ically resolved and this works as you’d expect.

---

## Classes

+ class Foo implies creating a (special) function of the name Foo, much like you did pre-ES6.
+ constructor(..) identifies the signature of that Foo(..) function, as well as its body contents.
+ Class methods use the same “concise method” syntax available to object literals. This also includes the concise generator form as well as the ES5 getter/setter syntax.
+ Unlike object literals, there are no commas separating members in a class body! In fact, they’re not even allowed.

---