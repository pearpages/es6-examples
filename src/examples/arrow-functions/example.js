
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
