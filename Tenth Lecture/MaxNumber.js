function maxNumber(input) {
    let n = Number(input.shift());
    let maxNum = Number.MIN_SAFE_INTEGER;
    let count = 0;

    while (count < n) {
        let number = Number(input.shift());

        if (number > maxNum) {
            maxNum = number;
        }
        count++;
    }

    console.log(maxNum);

}

maxNumber(["2", "99", "100"]);