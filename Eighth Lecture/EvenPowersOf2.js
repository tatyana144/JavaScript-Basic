function even(input) {

    let number = Number(input.shift());
   // let n = 2;

    for (let i = 0; i <= number; i++) {
     let   n = Math.pow(2,i);
        if (i % 2 === 0) {
            console.log(n);
        }
    }

}
even(["6"]);