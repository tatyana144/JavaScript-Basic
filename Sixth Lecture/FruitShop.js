function fruitShop(input) {
    let fruit = input.shift();
    let day = input.shift();
    let count = Number(input.shift());
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday") {
        if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" || fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes") {
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday": {
                    if (fruit === "banana") {
                        price = count * 2.50;
                    } else if (fruit === "apple") {
                        price = count * 1.20;
                    } else if (fruit === "orange") {
                        price = count * 0.85;
                    } else if (fruit === "grapefruit") {
                        price = count * 1.45;
                    } else if (fruit === "kiwi") {
                        price = count * 2.70;
                    } else if (fruit === "pineapple") {
                        price = count * 5.50;
                    } else if (fruit === "grapes") {
                        price = count * 3.85;
                    }
                    console.log(price.toFixed(2));
                }; break;

                case "Saturday":
                case "Sunday": {
                    if (fruit === "banana") {
                        price = count * 2.70;
                    } else if (fruit === "apple") {
                        price = count * 1.25;
                    } else if (fruit === "orange") {
                        price = count * 0.90;
                    } else if (fruit === "grapefruit") {
                        price = count * 1.60;
                    } else if (fruit === "kiwi") {
                        price = count * 3.00;
                    } else if (fruit === "pineapple") {
                        price = count * 5.60;
                    } else if (fruit === "grapes") {
                        price = count * 4.20;
                    }
                    console.log(price.toFixed(2));
                }; break;

            }
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}

fruitShop(["tomato", "Monday", "3"]);