function fishingBoat(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let people = Number(input.shift());

    let price = 0;
    let discount = 0;


    if (season === "Spring") {
        price = 3000;

    } else if (season === "Summer" || season === "Autumn") {
        price = 4200;
    } else if (season === "Winter") {
        price = 2600;
    }

    if (people <= 6) {
        price = price - (price * 0.1);
    } else if (people > 6 && people <= 11) {
        price = price - (price * 0.15);
    } else if (people > 11) {
        price = price - (price * 0.25);
    }

    if (people % 2 == 0 && season != "Autumn") {
        price = price - (price * 0.05);
    }

    if (budget >= price) {
        discount = budget - price;
        console.log(`Yes! You have ${discount.toFixed(2)} leva left.`);

    } else {
        discount = price - budget;
        console.log(`Not enough money! You need ${discount.toFixed(2)} leva.`);
    }

}

fishingBoat(["2000", "Winter", "10"]);