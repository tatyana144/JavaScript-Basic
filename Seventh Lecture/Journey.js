function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();

    let whereHoliday;
    let where;
    let price = 0;

    if (season === "summer" && budget <= 1000) {
        where = "Camp";
    } else if (season === "winter" && budget <= 1000) {
        where = "Hotel";
    }

    if (budget <= 100) {
        whereHoliday = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.3;
        } else if (season === "winter") {
            price = budget * 0.7;
        }
    } else if (budget >= 100 && budget <= 1000) {
        whereHoliday = "Balkans";

        if (season === "summer") {
            price = budget * 0.4;
        } else if (season === "winter") {
            price = budget * 0.8;
        }
    } else if (budget > 1000) {
        price = budget * 0.9;
        where = "Hotel";
        whereHoliday ="Europe";
    }

    console.log(`Somewhere in ${whereHoliday}`);
    console.log(`${where} - ${price.toFixed(2)}`)


}

journey(["678.53", "winter"]);