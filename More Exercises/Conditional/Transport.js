function transport(input) {
    let km = Number(input.shift());
    let day = input.shift();
    let taxi = 0.7;
    let buss;
    let train;
    let minNumber = Number.MAX_SAFE_INTEGER;

    if (day === "day") {
        taxi += (km * 0.79);
    } else if (day === "night") {
        taxi += km * 0.9;
    }

    if (km >= 20) {
        buss = km * 0.09;
    }

    if (km >= 100) {
        train = km * 0.06;
    }

    if (km < 20) {
        console.log(taxi.toFixed(2));
    } else if (km >= 20 && km < 100) {
        if (taxi < buss) {
            console.log(taxi.toFixed(2));
        } else {
            console.log(buss.toFixed(2));
        }
    } else if (km >= 100) {
        if (taxi < minNumber) {
            minNumber = taxi;
        }
        if (buss < minNumber) {
            minNumber = buss;
        }
        if (train < minNumber) {
            minNumber = train;
        }
        console.log(minNumber.toFixed(2));

    }

}
transport([180, "night"])