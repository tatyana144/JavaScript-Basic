function fuel(input) {
    let type = input.shift();
    let liters = Number(input.shift());
    let card = input.shift();

    let disGasoline = 0.18
    let disGas = 0.08;
    let disDiesel = 0.12;

    let priceGas = 0.93;
    let priceGasoline = 2.22;
    let priceDiesel = 2.33;

    let total = 0;



    if (card === "Yes") {
        if (type === "Diesel") {
            total = (liters * priceDiesel) - (liters * disDiesel);

        } else if (type === "Gasoline") {
            total = (liters * priceGasoline) - (liters * disGasoline);
        } else if (type === "Gas") {
            total = (liters * priceGas) - (liters * disGas);
        }
    } else {
        if (type === "Diesel") {
            total = (liters * priceDiesel);

        } else if (type === "Gasoline") {
            total = (liters * priceGasoline);
        } else if (type === "Gas") {
            total = (liters * priceGas);
        }
    }

    if (liters >= 20 && liters <= 25) {
        total = total - (total * 0.08);
    } else if (liters > 25) {
        total = total - (total * 0.1);
    }

    console.log(`${total.toFixed(2)} lv.`);

}

fuel(['Diesel', '19', 'No']);