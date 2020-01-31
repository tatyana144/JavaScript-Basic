function cinema(input) {
    let filming = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let price = 0;

    if (filming === "Premiere") {
        price = rows * columns * 12.0;
    } else if (filming === "Normal") {
        price = rows * columns * 7.50;

    } else if (filming === "Discount") {
        price = rows * columns * 5.0;

    }

    console.log(`${price.toFixed(2)} leva`);

}

cinema(["Premiere", "10", "12"]);