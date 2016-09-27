// understandingArrowFunctions().someArrowFucntionsExamples();
// understandingArrowFunctions().nestedFunctionsAccessingThis();
// letVariables().letScopeExample();
// letVariables().forExampleVar();
// letVariables().forExampleLet();
// defaultValuesForFunctions().simpleExample();
// defaultValuesForFunctions().functionAsAParameter();
constDeclarations().understandingConst();

function understandingArrowFunctions() {

    return {
        someArrowFucntionsExamples: someArrowFucntionsExamples,
        nestedFunctionsAccessingThis: nestedFunctionsAccessingThis
    };

    function someArrowFucntionsExamples() {
        let greeting = (message, name) => {
            return message + ': ' + name;
        }

        console.log(greeting('hello world', 'Pere'));

        let greetingOneLine = (message, name) => message + ': ' + name;

        console.log(greeting('hello world', 'Pere'));

        let message = message => console.log(message);

        message('hello world: Pere');
    }

    function nestedFunctionsAccessingThis() {
        // thx to arrow functions we dont have the problem of this that scope trouble anymore when having nested functions

        var test = {
            object: 'Car',
            print: function () {
                this.sayHello();
                console.log(this.object); // thx to prototypical inheritance
            },
            sayHello: function () {
                console.log('Hello!!!');
            }
        }

        var deliveryBoy = {
            name: 'Pere',
            handleMessage: function (message, handler) {
                handler(message);
            },
            receive: function () {
                this.handleMessage('Hello ', (message) => console.log(message + this.name))
            }
        }

        test.print();
        deliveryBoy.receive();
    }

}

function letVariables() {

    return {
        letScopeExample: letScopeExample,
        forExampleVar: forExampleVar,
        forExampleLet: forExampleLet
    };

    function letScopeExample() {
        // let allows you to declare variables that are limited in scope to the block

        let name = 'Pere';

        {
            let name = 'Joan';
        }

        console.log(name);

        var lastName = 'Pages';

        {
            var lastName = 'Amell';
        }

        console.log('Amell');

    }

    function forExampleVar() {
        var res = [];

        for (var i = 0; i < 10; i++) {
            console.log(i); // 0,1,2,3,4,5,6,7,8,9
            res.push(function () {
                console.log(i); // not yet executed
            });
        }

        console.log(i); // now i is 10
        res.forEach((v) => v()); // so everytime we console log i will be 10
    }

    function forExampleLet() {
        let res = [];

        for (let i = 0; i < 10; i++) {
            res.push(function () { console.log(i) });
        }

        // console.log(i); // not defined, because i lives only inside the for
        res.forEach((v) => v());
    }

}

function defaultValuesForFunctions() {
    return {
        simpleExample: simpleExample,
        functionAsAParameter: functionAsAParameter
    }

    function simpleExample() {

        greeting('Hello World');
        greeting('Hello', 'Joan');

        function greeting(greeting, name = 'Pere') {
            console.log(greeting + ': ' + name);
        }

    }

    function functionAsAParameter() {

        receive();

        function receive(complete = () => console.log('Hello Pere')) {
            complete();
        }
    }
}

function constDeclarations() {

    return  {
        understandingConst: understandingConst
    }

    // it is a general convention to put constants in capital letters:
    // var VALUE = 'hello world';

    function understandingConst() {
        // const in fact is just a const reference
        const VALUE = 1;
        const VALUES = {
            var1 : 1,
            var2: 2,
            var3: 3
        }

        try {
            VALUE = 2; // Assignment to constant variable.
        } catch (err) {
            console.log(err.message);
        }

        try {
            VALUES = {}; // Assignment to constant variable.
        } catch (err) {
            console.log(err.message);
        }
        
        VALUES.var1 = 99; // OK.
        console.log(VALUES);
    }
}