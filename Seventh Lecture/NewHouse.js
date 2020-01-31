function newHouse(input) {
    let type = input.shift();
    let flowers = Number(input.shift());
    let budget = Number(input.shift());

    let price = 0;
    let discount = 0;

    if (type === "Roses") {
        price = flowers * 5;

        if (flowers > 80) {
            price = price - (price * 0.1);
        }
    } else if (type === "Dahlias") {
        price = flowers * 3.80;
        if (flowers > 90) {
            price = price - (price * 0.15);
        }
    } else if (type === "Tulips") {
        price = flowers * 2.80;
        if (flowers > 80) {
            price = price - (price * 0.15);
        }

    } else if (type === "Narcissus") {
        price = flowers * 3;
        if (flowers < 120) {
            price = price + (price * 0.15);
        }

    } else if (type === "Gladiolus") {
        price = flowers * 2.50;
        if (flowers < 80) {
            price = price + (price * 0.20);
        }

    }

    if (budget >= price) {

        discount = budget - price;
        console.log(`Hey, you have a great garden with ${flowers} ${type} and ${discount.toFixed(2)} leva left.`);
    } else {
        discount = price - budget;
        console.log(`Not enough money, you need ${discount.toFixed(2)} leva more.`);

    }
}

newHouse(["Gladiolus", "64", "160"]);