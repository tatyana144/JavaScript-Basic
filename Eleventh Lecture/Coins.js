function coins(input) {
    let resto = Number(input.shift());
    let coins = 0;

    while (resto > 0) {
        if (resto >= 2) {
            resto -= 2;
        } else if (resto >= 1) {
            resto -= 1;
        } else if (resto >= 0.5) {
            resto -= 0.5;
        } else if (resto >= 0.2) {
            resto -= 0.2;
        } else if (resto >= 0.1) {
            resto -= 0.1;
        } else if (resto >= 0.05) {
            resto -= 0.05;
        } else if (resto => 0.02) {
            resto -= 0.02;
        } else if (resto >= 0.01) {
            resto -= 0.01;
        }

        resto =Number(resto.toFixed(2));
        coins++;
    }

    console.log(coins);

}

coins([1])