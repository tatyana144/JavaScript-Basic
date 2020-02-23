function sushiTime(input) {
    let sushi = input.shift();
    let restourant = input.shift();
    let number = Number(input.shift());
    let where = input.shift();

    let price = 0;
    let discount = 0;

    if (restourant === "Sushi Zone") {
        if (sushi === "sashimi") {
            price = number * 4.99;
        } else if (sushi === "maki") {
            price = number * 5.29;
        } else if (sushi === "uramaki") {
            price = number * 5.99;
        } else if (sushi === "temaki") {
            price = number * 4.29;
        }

        if (where === "Y") {
            discount = price * 0.20;
            price = price + discount;
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        } else {
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        }
    } else if (restourant === "Sushi Time") {

        if (sushi === "sashimi") {
            price = number * 5.49;
        } else if (sushi === "maki") {
            price = number * 4.69;
        } else if (sushi === "uramaki") {
            price = number * 4.49;
        } else if (sushi === "temaki") {
            price = number * 5.19;
        }

        if (where === "Y") {
            discount = price * 0.20;
            price = price + discount;
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        } else {
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        }

    } else if (restourant === "Sushi Bar") {
        if (sushi === "sashimi") {
            price = number * 5.25;
        } else if (sushi === "maki") {
            price = number * 5.55;
        } else if (sushi === "uramaki") {
            price = number * 6.25;
        } else if (sushi === "temaki") {
            price = number * 4.75;
        }

        if (where === "Y") {
            discount = price * 0.20;
            price = price + discount;
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        } else {
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        }
    } else if (restourant === "Asian Pub") {
        if (sushi === "sashimi") {
            price = number * 4.50;
        } else if (sushi === "maki") {
            price = number * 4.80;
        } else if (sushi === "uramaki") {
            price = number * 5.50;
        } else if (sushi === "temaki") {
            price = number * 5.50;
        }

        if (where === "Y") {
            discount = price * 0.20;
            price = price + discount;
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        } else {
            console.log(`Total price: ${Math.ceil(price)} lv.`)
        }
    } else {
        console.log(`${restourant} is invalid restaurant!`);
    }


}
sushiTime(['maki', 'Asian Pub', '10', 'Y', '']);