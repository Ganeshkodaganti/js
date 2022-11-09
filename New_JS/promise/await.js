console.log("this is await example");

function test() {
    console.log("inside test function");
    return "test example";

}
console.log("before calling test");
let a = test();
console.log("after calling test");
console.log(a);
console.log("last line of this js file");