function foo() {
    this.a = 33
}
const a = new foo

console.log(a);