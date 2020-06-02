const PWD = Symbol('pwd')
const LEN = Symbol('len')

const hashCode = str => Array.from(str)
   .reduce((h, c) => Math.imul(31, h) + c.charCodeAt(0) | 0, 0)

class Password {
   constructor(pwdStr) {
      this[PWD] = hashCode(pwdStr)
      this[LEN] = pwdStr.length
   }

   [Symbol.toPrimitive](hint) {
      return '*'.repeat(this[LEN])
   }

   [Symbol.match](pwdStr) {
      return this[PWD] === hashCode(pwdStr)
   }

   get [Symbol.toStringTag]() {
      return 'Password 123';
   }

   static [Symbol.hasInstance](instance) {
      return typeof instance === 'string';
   }

   [Symbol.iterator]() {
      return ('' + this)[Symbol.iterator]()
   }
}

let securePassword = new Password('password');

console.log(securePassword.length);
console.log(('' + securePassword));
console.log([...securePassword]);
console.log('password'.match(securePassword));
console.log('notmypassword'.match(securePassword));
console.log(securePassword.toString());                
