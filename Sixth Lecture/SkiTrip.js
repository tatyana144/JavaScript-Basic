function ski(input) {
    let days = Number(input.shift());
    let room = input.shift();
    let grade = input.shift();

    let night = days - 1;
    let price = 0;

    if (room === "room for one person") {
        price = night * 18.00;
    } else if (room === "apartment") {

        price = night * 25.00;

        if (days < 10) {
            price -= price * 0.30;
        } else if (days > 10 && days < 15) {
            price -= price * 0.35;
        } else if (days > 15) {
            price -= price * 0.50;
        }
    } else if (room === "president apartment") {

        price = night * 35.00;

        if (days < 10) {
            price -= price * 0.10;
        } else if (days > 10 && days < 15) {
            price -= price * 0.15;
        } else if (days > 15) {
            price -= price * 0.20;
        }

    }

    if (grade === "positive") {
        price += price * 0.25;
    } else if (grade === "negative") {
        price -= price * 0.10;
    }

console.log(price.toFixed(2));
}


ski(["2", "apartment", "positive"]);