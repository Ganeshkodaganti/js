let pr = new Promise(function(resolve, reject) {

    resolve("hai");

    // reject(new Error("pora!"));



});

pr.finally((a) => console.log("hello mowa"));

pr.then((b) => console.log("from then hi"))




// .catch
// .finally



//state  -pending     -fulfilled   -rejected
//result -undefined   -value     -error


// const pr={
//     state:"fulfilled";
//     result:"hai";
// }


// resolve(a) {
//     pr.state = "fulfilled";
//     pr.result = a;
// }


// handlers