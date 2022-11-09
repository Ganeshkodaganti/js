//slice will create a new sub array
var arr = [10, 20, 30, 40, 50, 60, 70, 80];

console.log(arr.slice(0, 5));

//splice will modify the main arr
arr.splice(3, 6);

console.log(arr);