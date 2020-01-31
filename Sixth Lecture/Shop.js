function shop(input) {
    let drink = input.shift();
    let city = input.shift();
    let count = Number(input.shift());
    let price = 0;

    switch (city) {
        case "Sofia": {
            if (drink === "coffee") {
                price = count * 0.50;
            } else if (drink === "water") {
                price = count * 0.80;
            } else if (drink === "beer") {
                price = count * 1.20;
            } else if (drink === "sweets") {
                price = count * 1.45;
            } else{
                price = count * 1.60;
            }
        }; break;
        case "Plovdiv": {
            if (drink === "coffee") {
                price = count * 0.40;
            } else if (drink === "water") {
                price = count * 0.70;
            } else if (drink === "beer") {
                price = count * 1.15;
            } else if (drink === "sweets") {
                price = count * 1.30;
            } else {
                price = count * 1.50;
            }
        }; break;

        case "Varna": {
            if (drink === "coffee") {
                price = count * 0.45;
            } else if (drink === "water") {
                price = count * 0.70;
            } else if (drink === "beer") {
                price = count * 1.10;
            } else if (drink === "sweets") {
                price = count * 1.35;
            } else {
                price = count * 1.55;
            }
        }; break;
    }
    console.log(price);

}

shop(["coffee", "Sofia", "2"]);