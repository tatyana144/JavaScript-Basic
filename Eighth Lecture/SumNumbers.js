function sumNumbers(input) {
    let n = Number(input.shift());
    let numbers = Number(input.shift());
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += numbers;
        numbers = Number(input.shift());

    }
    console.log(sum);

}

sumNumbers(["2", "-20", "-4"]);