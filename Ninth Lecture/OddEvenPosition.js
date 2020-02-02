function oddEvenPosition(input) {
    let n = Number(input.shift())

    let oddSum = 0;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let evenSum = 0;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {

        let number = Number(input.shift());
        if (i % 2 !== 0) {
            oddSum += number;

            if (number > oddMax) {
                oddMax = number;
            }

            if (number < oddMin) {
                oddMin = number;
            }
        } else {
            evenSum += number;

            if (number > evenMax) {
                evenMax = number;
            }

            if (number < evenMin) {
                evenMin = number;
            }
        }

    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if(oddMin == Number.MAX_SAFE_INTEGER && oddMax == Number.MIN_SAFE_INTEGER){
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    }else{
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if(evenMin == Number.MAX_SAFE_INTEGER && evenMax == Number.MIN_SAFE_INTEGER){
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }else{
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }


}

oddEvenPosition(["1", "-5"]);