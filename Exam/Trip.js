function trip(input) {
    let destination = input.shift();
    let date = input.shift();
    let count = Number(input.shift());

    let price = 0;

    switch (destination) {
        case "France":
            if (date === "21-23") {
                price = 30;
            } else if (date === "24-27") {
                price = 35;
            } else if (date === "28-31") {
                price = 40;
            }
            break;
        case "Italy":
            if (date === "21-23") {
                price = 28;
            } else if (date === "24-27") {
                price = 32;
            } else if (date === "28-31") {
                price = 39;
            }
            break;
        case "Germany":
            if (date === "21-23") {
                price = 32;
            } else if (date === "24-27") {
                price = 37;
            } else if (date === "28-31") {
                price = 43;
            }
            break;
    }

    let total = (count * price).toFixed(2);

    console.log(`Easter trip to ${destination} : ${total} leva.`);

}

trip(['Germany', '24-27', '5']);