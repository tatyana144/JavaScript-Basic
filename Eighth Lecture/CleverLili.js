function cleverLili(input) {

    let years = Number(input.shift());
    let price = Number(input.shift());
    let toyPrice = Number(input.shift());
    let countToy = 0;
    let herMoney =10;
    let sum = 0;

    for (let i = 1; i <= years; i++) {

        if (i % 2 == 0) {
            sum += herMoney;
            herMoney +=10;

        } else {
            countToy++;
        }
    }

    let sumFromToy = countToy * toyPrice;
    let brotherSum = (Math.floor(years / 2) * 1.0);
    let tottalSum = sum + sumFromToy - brotherSum;
    let diff = 0;

    if (tottalSum >= price) {
        diff = tottalSum - price;
        console.log(`Yes! ${diff.toFixed(2)}`);

    } else {
        diff = price - tottalSum;
        console.log(`No! ${diff.toFixed(2)}`);
    }

}

cleverLili(["10","170.00","6"]);