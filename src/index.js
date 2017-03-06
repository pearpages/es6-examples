var obj = {
  id: 42,
  foo: function foo() {
    setTimeout( function() {
      console.log('bind',this.id);
    }.bind(this),100);
  }
}

var obj = {
  id: 42,
  foo: function foo() {
    var context = this;
    setTimeout( function() {
      console.log('context',context.id);
    }.bind(this),100);
  }
}

var obj = {
  id: 42,
  foo: function foo() {
    setTimeout( function() {
      console.log('?',this.id); // undefined
    },100);
  }
}

var obj = {
  id: 42,
  foo: function foo() {
    setTimeout( () => console.log('arrow',this.id),100);
  }
}

obj.foo();

function cons(x) {
    console.log(x);
}

function uniqId() {
  return Math.random();
}

function foo(id = uniqId()) {
    // ...
}


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
