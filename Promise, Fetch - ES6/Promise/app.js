function addTwo(number) {

    return new Promise ((resolve,reject) => {

        setTimeout(() => {
            
            if (typeof number === "number") {

                resolve(number + 2);
            }

            else {
                reject( new Error("Lütfen bir sayı girin."));
            }

        }, 3000);
    });
}

addTwo ("Selam")
.then(response => {

    console.log(response);
    return response + 2;

}).then(response2 => console.log(response2))
.catch(err => console.error(err));
// 1 tane catch, birden çok then - Promise chain