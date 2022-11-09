async function fun() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("nen ochesa"), 1000);
    });
    let result = await myPromise;
    console.log(result);
}
fun();