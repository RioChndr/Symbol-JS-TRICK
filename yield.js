function* idMaker() {
    var index = 0;
    while (true) {
        yield index++;
    }
}

var gen = idMaker();
for (let i = 0; i < 10; i++) {
    console.log(gen.next().value);
}
