function vacation(input) {
    let priceVacation = Number(input.shift());
    let herMoney = Number(input.shift());
    let spendCounter = 0;
    let daysCounter = 0;

    while (herMoney < priceVacation && spendCounter < 5) {
        let command = input.shift();
        let money = Number(input.shift());

        if (command === "spend") {
            spendCounter++;
            let result = herMoney - money;

            if (result >= 0) {
                herMoney = result;
            } else {
                herMoney = 0;
            }

            //result >= 0 ? herMoney = result : herMoney = 0;

        } else if (command === "save") {
            spendCounter = 0;
            herMoney += money;

        }
        daysCounter++;
    }

    if (spendCounter === 5) {
        console.log(`You can't save the money.`);
        console.log(daysCounter);
    } else if (herMoney >= priceVacation) {
        console.log(`You saved the money for ${daysCounter} days.`);

    }
}

vacation([250,
    150,
    "spend",
    50,
    "spend",
    50,
    "save",
    100,
    "save",
    100]);