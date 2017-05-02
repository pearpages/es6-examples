export { spreadRest, scopes, defaultParameterValues, destructuring, objectLiteralExtensions, arrowFunctions, iterables }

function iterables() {
    return {
        forExample
    }

    function forExample() {
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

    }
}

function arrowFunctions() {

    return {
        example1
    }

    function example1() {

        var controller = {
            myNumber: 3,
            foo: function () {
                this.bar(this.myNumber);
                controller.bar();
            },
            bar: function (x) {
                console.log('hello world ' + x);
            }
        }

        controller.foo(); // hello world 3 \n hello world undefined

        this.helloMars = () => console.log('hello mars!');

        function helloVenus() {
            console.log('hello venus');
        }

        var controller2 = {
            foo: () => {
                this.helloMars();
                helloVenus();
                // this.helloVenus(); // does not work, does not exist
                // this.bar(); // not working
            },
            bar: () => {
                console.log('hello world');
            }
        }

        controller2.foo(); // hello mars! \n hello venus
    }

}

function objectLiteralExtensions() {

    return {
        properties,
        methods,
        gettersAndSetters,
        computedPropertyNames
    }

    function computedPrpertyNames() {

    }

    function gettersAndSetters() {
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
    }

    function methods() {

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

    }

    function properties() {
        var x = 2, y = 3, o, p;

        // old way
        o = {
            x: x,
            y: y
        };

        console.log(o); // { x: 2, y: 3 }

        // es6 way

        p = { x, y };

        console.log(p); // { x: 2, y: 3 }

    }
}

function destructuring() {
    return {
        example1,
        example2,
        example3,
        example4,
        assigningOnlyAFew,
        defaultValueAssignment,
        nestedDestructuring,
        destructuringParameters
    }

    function destructuringParameters() {

        foo([1, 2]); // { x: 1, y: 2 }

        function foo([x, y]) {
            console.log({ x, y });
        }
    }

    function defaultValueAssignment() {

        let [a = 3, b = 4, c = 7, d = 13] = foo();
        let { x = 23, y = 4, z = -9, w = 12 } = bar();

        console.log(a, b, c, d); // 1 2 3 13
        console.log(x, y, z, w); // 12 34 56 12

        function foo() {
            return [1, 2, 3];
        }

        function bar() {
            return {
                x: 12,
                y: 34,
                z: 56
            };
        }
    }

    function nestedDestructuring() {
        var a1 = [1, [2, 3, 4], 5];
        var o1 = { x: { y: { z: 6 } } };
        var [a, [b, c, d], e] = a1;
        var { x: { y: { z: w } } } = o1;
        console.log(a, b, c, d, e); // 1 2 3 4 5
        console.log(w); // 6
    }

    function example1() {

        // old way
        var tmp = foo();
        var x = tmp[0], y = tmp[1], z = tmp[2];
        console.log(x, y, z); // 1 2 3
        var tmpA = bar();
        var a = tmpA.x, b = tmpA.y, c = tmpA.z;
        console.log(a, b, c); // 4 5 6

        // es 6 way
        var [d, e, f] = foo();
        var { x: g, y: h, z: i } = bar();
        console.log(d, e, f); // 1 2 3
        console.log(g, h, i); // 4 5 6

        function foo() {
            return [1, 2, 3];
        }

        function bar() {
            return {
                x: 4,
                y: 5,
                z: 6
            }
        }
    }

    function example2() {

        var { c, b, a } = bar();
        console.log(c, b, a); // 3 2 1

        function bar() {
            return { a: 1, b: 2, c: 3 };
        }
    }

    function example3() {
        var aa = 10, bb = 20;

        var o = { x: aa, y: bb };
        var { x: AA, y: BB } = o;

        console.log(AA, BB); // 10 20
    }

    function example4() {
        var a, b, c, x, y, z;
        [a, b, c] = foo(); // 1 2 3
        ({ x, y, z } = bar()); // 4 5 6

        console.log(a, b, c);
        console.log(x, y, z);

        function foo() {
            return [1, 2, 3];
        }

        function bar() {
            return { x: 4, y: 5, z: 6 };
        }
    }

    function assigningOnlyAFew() {

        var [, b] = foo();
        var { x, z } = bar();

        console.log(b, x, z); // 2 1 3

        function foo() {
            return [1, 2, 3];
        }

        function bar() {
            return { x: 1, y: 2, z: 3 };
        }
    }

}

function defaultParameterValues() {

    return {
        default1,
        default2
    };

    function default1() {

        console.log(foo()); // { x: 11, y: 31 }
        console.log(bar()); // { x: 11, y: 31 }

        // old way
        function foo(x, y) {
            x = (x !== undefined) || 11;
            y = (y !== undefined) || 31;
            return { x, y };
        }

        // es6
        function bar(x = 11, y = 31) {
            return { x, y };
        }
    }

    function default2() {

        let y = 9;

        console.log(foo()); // { x: 12, z: 7 }

        function bar(x) {
            return x - 5;
        }

        function foo(x = y + 3, z = bar(x)) {
            return { x, z };
        }
    }
}

function spreadRest() {

    return {
        spread1,
        spread2,
        rest1,
        rest2
    }

    function spread1() {
        function foo(x, y, z) {
            console.log(x, y, z);
        }

        foo(...[1, 2, 3]); // spread

        foo.apply(null, [1, 2, 3]); // old way
    }

    function spread2() {

        var a = [2, 3, 4];
        var b = [1, ...a, 5];

        console.log(b); // [1,2,3,4,5]

        // old way

        var c = [2, 3, 4];
        // concat retuns a new array!
        var d = [1].concat(c, [5]);

        console.log(d); // [1,2,3,4,5]
    }

    function rest1() {

        function foo(x, y, ...z) {
            console.log(x, y, z);
        }

        foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]
    }

    function rest2() {
        function foo(...args) {
            console.log(args);
        }

        function bar() {
            // old way
            // turn arguments into a real array
            var args = Array.prototype.slice.call(arguments);
            console.log(args);
        }

        foo(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]

        bar(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]
    }
}

function scopes() {

    return {
        example
    }

    function example() {
        var a = 2;

        {
            let a = 3;
            console.log(a); // 3
        }

        function whatever() {
            let a = 99;
            console.log(a);
        }
        whatever(); // 99

        console.log(a); // 2

        const c = () => {
            a = 12;
            console.log(12)
        };

        c() // 12;
    }

}
