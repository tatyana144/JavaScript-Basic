function bonusPoints(input) {
    let points = Number(input.shift());
    let bonus = 0.0;

    if (points <= 100) {
        bonus = 5;
    } else if (points < 1000) {
        bonus = (points * 0.20);
    } else {
        bonus = (points * 0.10);
    }

    if (points % 2 == 0) {
        bonus += 1;
    }else if (points % 10 === 5) {
        bonus += 2;
    }

    let allPoints = points + bonus;
    console.log(bonus);
    console.log(allPoints);
}

bonusPoints(["17"]);