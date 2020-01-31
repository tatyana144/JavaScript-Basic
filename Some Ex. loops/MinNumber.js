function minNumber(input) {

    let number = Number(input.shift());
    let count = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (count < number) {
        let otherNumber = Number(input.shift());
        count++;

        if (otherNumber <= minNumber) {
            minNumber = otherNumber;
        }
    }
    console.log(minNumber);
}
minNumber(["2", "-1", "-2"]);