var obj1 = {
    id: 42,
    foo: function foo() {
        setTimeout(function () {
            console.log( this.id ); // context will be the function itself, not the obj1
        },100);
    }
};

var obj2 = {
    id: 42,
    foo: function foo() {
        var context = this;
        setTimeout(function () {
            console.log( context.id ); // we give the context to the function so it doesn't miss
        },100);
    }
};

var obj3 = {
    id: 42,
    foo: function foo() {
        setTimeout(() => console.log(this.id),100); // now this refers to obj3
    }
};

obj1.foo(); // undefined
obj2.foo(); // 42
obj3.foo(); // 42