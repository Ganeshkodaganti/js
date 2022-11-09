const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "too");
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
// expected output: Array [3, 42, "foo"]