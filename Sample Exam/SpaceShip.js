function spaceship(input) {
    let width = Number(input.shift());
    let long = Number(input.shift());
    let hight = Number(input.shift());
    let averageHight = Number(input.shift());

    let vSpaceship = width * long * hight;
    let vRoom = (averageHight + 0.40) * 4;
    let space = Math.floor(vSpaceship / vRoom);

    if (space > 10) {
        console.log(`The spacecraft is too big.`);

    } else if (space < 3) {
        console.log(`The spacecraft is too small.`);

    } else if (space >= 3 && space <= 10) {
        console.log(`The spacecraft holds ${space} astronauts.`);

    }

}

spaceship(['3', '3', '4', '1.68', '']);