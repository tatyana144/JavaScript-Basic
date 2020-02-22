function game(input) {
    let firstpoints = Number(input.shift());
    let end = false;
    let counter = 0;


    while (firstpoints > 0) {
        counter++;
        let variable = input.shift();
        let points = Number(input.shift());

        if (variable === "number section") {
            firstpoints = firstpoints - points;

        } else if (variable === "double ring") {
            points = points * 2;
            firstpoints = firstpoints - points;
        } else if (variable === "triple ring") {
            points = points * 3;
            firstpoints = firstpoints - points;
        } else if (variable === "bullseye") {
            end = true;
        }

        if (end) {
            console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`);
            break;
        }

        if (firstpoints < 0) {
            let diff = Math.abs(firstpoints);
            console.log(`Sorry, you lost. Score difference: ${diff}.`);
            break;
        }

    }

    if (firstpoints === 0) {
        console.log(`Congratulations! You won the game in ${counter} moves!`);
    }

}

game([75, "triple ring", 17, "number section", 16, "triple ring", 13, "double ring", 10]);