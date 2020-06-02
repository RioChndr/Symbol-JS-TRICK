class Test {
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj);
    }
}

console.log([] instanceof Test)