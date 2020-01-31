function toyShop(input) {
    let priceHoliday = Number(input.shift());
    let countPuzel = Number(input.shift());
    let countDolls = Number(input.shift());
    let countBears = Number(input.shift());
    let countMinions = Number(input.shift());
    let countCars = Number(input.shift());

    let sum = (countPuzel * 2.60) + (countDolls * 3) + (countBears * 4.10) + (countMinions * 8.20) + (countCars * 2);
    let allCount = countPuzel + countDolls + countBears + countMinions + countCars;

    if (allCount >= 50) {
        let sumWithDiscount = sum - (sum * 0.25);
        let lastSumWhithNaem = sumWithDiscount - (sumWithDiscount * 0.10);

        if (lastSumWhithNaem >= priceHoliday) {
            let leftPrice = lastSumWhithNaem - priceHoliday;
            console.log(`Yes! ${leftPrice.toFixed(2)} lv left.`);
        } else if (lastSumWhithNaem < priceHoliday) {
            let neededMoney = priceHoliday - lastSumWhithNaem;
            console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
        }
    } else {
        let lastSumWhithNaem = sum - (sum * 0.10);
        if (priceHoliday <= lastSumWhithNaem) {
            let leftPrice = lastSumWhithNaem - priceHoliday;
            console.log(`Yes! ${leftPrice.toFixed(2)} lv left. `);
        } else if (priceHoliday > lastSumWhithNaem) {
            let needed = priceHoliday - lastSumWhithNaem;
            console.log(`Not enough money! ${needed.toFixed(2)} lv needed.`);
        }
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);