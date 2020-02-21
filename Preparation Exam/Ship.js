function ship(input) {
    let typeCru = input.shift();
    let typeRoom = input.shift();
    let nights = Number(input.shift());
    let pricePerNight = 0;



    switch (typeCru) {
        case "Mediterranean":
            if (typeRoom === "standard cabin") {
                pricePerNight = 27.50;
            } else if (typeRoom === "cabin with balcony") {
                pricePerNight = 30.20;
            } else if (typeRoom === "apartment") {
                pricePerNight = 40.50;
            }
            break;
        case "Adriatic":
            if (typeRoom === "standard cabin") {
                pricePerNight = 22.99;
            } else if (typeRoom === "cabin with balcony") {
                pricePerNight = 25.00;
            } else if (typeRoom === "apartment") {
                pricePerNight = 34.99;
            }
            break;

        case "Aegean":
            if (typeRoom === "standard cabin") {
                pricePerNight = 23.00;
            } else if (typeRoom === "cabin with balcony") {
                pricePerNight = 26.60;
            } else if (typeRoom === "apartment") {
                pricePerNight = 39.80;
            }
            break;
    }

    let priceForHoliday = nights * pricePerNight * 4;
    if (nights > 7) {
        priceForHoliday = priceForHoliday - (priceForHoliday * 0.25);
    }

    console.log(`Annie's holiday in the ${typeCru} sea costs ${priceForHoliday.toFixed(2)} lv.`)

}
ship(['Adriatic', 'apartment', 5]);