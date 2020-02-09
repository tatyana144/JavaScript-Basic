function minNumber(input) {
    let n = Number(input.shift());
    let minNum = Number.MAX_SAFE_INTEGER;
    let count = 0;

    while (count < n) {
        let number = Number(input.shift());
        count++;

        if (number < minNum) {
            minNum = number;
        }
    }

    console.log(minNum);

}

minNumber(["2", "99", "100"]);