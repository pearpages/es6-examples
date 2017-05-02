export { iterators, modules };

function modules() {
    return {
        oldway
    }

    function oldway() {

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

    }
}

function iterators() {

    return {
        next
    }

    function next() {
        var arr = [1, 2, 3];

        var it = arr[Symbol.iterator]();

        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());

        // =>
        // { value: 1, done: false }
        // { value: 2, done: false }
        // { value: 3, done: false }
        // { value: undefined, done: true }

        var greeting = "hello world";
        var it = greeting[Symbol.iterator]();

        let done = false;
        while (!done) {
            let aux = it.next();
            done = aux.done;
            console.log(aux);
        }
    }
}