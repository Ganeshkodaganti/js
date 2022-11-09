var arr = [10, 20, 30, 40, 50, 60, 70];


function myFunc(total, num) {
    return total + num;
}

console.log(arr.reduceRight(myFunc, 0));

//inko array

var arr1 = [30, 40, 60, 70, 100];

console.log(arr.reduce(((t2, n2) => t2 + n2), 0));