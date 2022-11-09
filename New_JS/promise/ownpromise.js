let myProm = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve('rara anniyya');
        reject('veltha anniyya!')
    }, 1000)


)


myProm.then((res) => console.log(res), (err) => console.log(err));