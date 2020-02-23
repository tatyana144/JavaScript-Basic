function party(input) {
    let forSinger = Number(input.shift());
    let people = input.shift();
    let price = 0;
    let guest = 0;

    while (people !== "The restaurant is full") {
        people = Number(people);
        guest += people;

        if (people < 5) {
            price += people * 100;
        } else {
            price += people * 70;
        }

        people = input.shift();
    }

    if (price >= forSinger) {
        let diff = price - forSinger;
        console.log(`You have ${guest} guests and ${diff} leva left.`)
    } else {
        console.log(`You have ${guest} guests and ${price} leva income, but no singer.`)
    }

}

party(['1800', '4', '4', '4', '4', '6', '6', 'The restaurant is full']);