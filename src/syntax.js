export { spreadRest, scopes, defaultParameterValues, destructuring }

function destructuring() {
    return {
        example1,
        example2
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

        var {c,b,a} = bar();
        console.log(c,b,a); // 3 2 1

        function bar() {
            return { a: 1, b: 2, c: 3 };
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
