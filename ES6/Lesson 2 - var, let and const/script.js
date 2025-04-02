// const
function getPI() {
    const PI = 3.14159;
    console.log('PI equals to:' + PI);

    // reassign a const will cause an error
    // PI = 3.14;
}

// let
function getCounter() {
    let counter = 0;
    console.log('Initial counter:' + counter);

    counter += 1;
    console.log('Updated counter:' + counter);

    // let allows reassignment but is block-scoped
    if (true) {
        let counter = 10;
        console.log('Block-scoped counter:' + counter);
    }
    console.log('Global counter after block:' + counter);
}

// var
function getName() {
    var name = 'Alice';
    console.log('Name:' + name);

    name = 'Bob';
    console.log('Updated name:' + name);

    // var is function-scoped and can be redeclared
    if (true) {
        var name = 'Charlie';
        console.log('Block-scoped name with var:' + name);
    }
    console.log('Global name after block:' + name);
}

getPI();
getCounter();
getName();