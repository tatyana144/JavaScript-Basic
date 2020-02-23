function sea(input) {
    let food = Number(input.shift());
    let gift = Number(input.shift());
    let hotel = Number(input.shift());

    let flue = 420 / 100 * 7;
    let priceFlue = flue * 1.85;
    let money = 3 * food + 3 * gift;
    let firstday = hotel - (hotel * 0.1);
    let secondDay = hotel - (hotel * 0.15);
    let thirdDay = hotel - (hotel * 0.2);

    let total = (priceFlue + money + firstday + secondDay + thirdDay).toFixed(2);

    console.log(`Money needed: ${total}`);

}

sea(['200', '200', '1000']);