class List {
    constructor() {
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
        return this;
    }

    *[Symbol.iterator]() {
        for (let element of this.elements) {
            yield element;
        }
    }
}

let chars = new List();
chars.add('A')
    .add('B')
    .add('C');

// because of the Symbol.iterator
for (let c of chars) {
    console.log(c);
}