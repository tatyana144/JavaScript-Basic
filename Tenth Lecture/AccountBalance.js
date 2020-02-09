function accountBalance(input) {
    let count = Number(input.shift());
    let counter = 0;
    let sum = 0;

    while (counter < count) {

        let increase = Number(input.shift());
        if (increase < 1) {
            console.log(`Invalid operation!`);
            break;
        }

        console.log(`Increase: ${increase.toFixed(2)}`);
        sum += increase;
        counter += 1;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["3", "5.51", "69.42", "100"]);