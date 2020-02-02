function evenOrOdd(input) {

    let n = Number(input.shift());
    let evenSum = 0;
    let oddSum = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());

        if (i % 2 == 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }

    }


    if (evenSum === oddSum) {
        sum = evenSum;
        console.log(`Yes`);
        console.log(`Sum = ${sum}`);
    } else {
        sum = Math.abs(evenSum - oddSum);
        console.log(`No`);
        console.log(`Diff = ${sum}`);
    }

}

evenOrOdd(["4", "10", "50", "60", "20"]);