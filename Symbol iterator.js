class List {
    constructor() {
        this.data = [1, 2, 3, 4]
    }
    *[Symbol.iterator]() {
        for (let d of this.data) {
            yield d;
        }
    }
}

let data = new List()
for (let i of data) {
    console.log(i)
}