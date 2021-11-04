var foo = 1;

function bar() {
    var foo;
    console.log(foo);
    console.log(!undefined);
    if (!foo) {
        foo = 10;
    }
    console.log(foo);
}
bar();