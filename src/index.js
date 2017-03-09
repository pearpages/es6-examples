function cons(...args) {
    args.forEach( (x) => console.log(x));
}

// var obj = {
//   id: 42,
//   foo: function foo() {
//     setTimeout( function() {
//       console.log('bind',this.id);
//     }.bind(this),100);
//   }
// }

// var obj = {
//   id: 42,
//   foo: function foo() {
//     var context = this;
//     setTimeout( function() {
//       console.log('context',context.id);
//     }.bind(this),100);
//   }
// }

// var obj = {
//   id: 42,
//   foo: function foo() {
//     setTimeout( function() {
//       console.log('?',this.id); // undefined
//     },100);
//   }
// }

// var obj = {
//   id: 42,
//   foo: function foo() {
//     setTimeout( () => console.log('arrow',this.id),100);
//   }
// }

// obj.foo();

// function uniqId() {
//   return Math.random();
// }

// function foo(id = uniqId()) {
//     // ...
// }


// function missingParameter() {
//   throw 'Missing parameter';
// }

// function myFunction(x = missingParameter()) {
//   // ...
// }

// try {
//     myFunction();
// } catch (err) {
//     console.log(err);
// }

// function bar() {
//     var args = [].slice.call(arguments);
//     return args.reduce(function (acc = 0,current) {
//         return acc + current;
//     });
// }

// function foo() {
//     var args = [].slice.call(arguments);
//     args.unshift(42);
//     return bar.apply(null,args);
// }

// cons(foo(3,4,5));

// function bar(...args) {
//     return args.reduce(function (acc = 0, current) {
//         return acc + current;
//     });
// }

// function foo(...args) {
//     args.unshift(42);
//     return bar(...args);
// }

// cons(bar(3,4,5));
// cons(foo(3,4,5));

function foo() {
  return [1,2,3];
}

var [a,b,c] = foo();

cons(a,b,c);