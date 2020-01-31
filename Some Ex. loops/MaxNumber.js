function maxNumber(input) {
    let number = Number(input.shift());
    let counter = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (counter < number) {

        let otherNumber = Number(input.shift());
        counter++;
        if (otherNumber >= maxNumber) {
           maxNumber = otherNumber;
        }

    }
    console.log(maxNumber);

}

maxNumber(["2", "-1", "-2"]);