function sum(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    let sum =0;

    for (let i = 0; i < n * 2; i++) {
        let number = Number(input.shift());

        if (i < n) {
            leftSum += number;
        } else {
            rightSum += number;
        }

    }

    if (leftSum == rightSum) {
        sum = leftSum;
        console.log(`Yes, sum = ${sum}`);
    } else {
        sum = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${sum}`);
    }

}

sum(["2", "40", "30", "20", "50"]);