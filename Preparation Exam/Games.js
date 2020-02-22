function game(input) {
    let gamerName = input.shift();
    let countGame = Number(input.shift());

    let gameName = "";
    let pointV = 0;
    let pointT = 0;
    let pointB = 0;
    let counterV = 0;
    let counterT = 0;
    let counterB = 0;



    for (let i = 1; i <= countGame; i++) {
        gameName = input.shift();
        let points = Number(input.shift());

        if (gameName === "volleyball") {
            pointV += points + (points * 0.07);
            counterV++;
        } else if (gameName === "tennis") {
            pointT += points + (points * 0.05);
            counterT++;
        } else if (gameName === "badminton") {
            pointB += points + (points * 0.02);
            counterB++;
        }
    }
    let averageV = Math.floor(pointV / counterV);
    let averageT = Math.floor(pointT / counterT);
    let averageB = Math.floor(pointB / counterB);
    let total = Math.floor(pointT + pointV + pointB);

    if (averageV >= 75 && averageT >= 75 && averageB >= 75) {
        console.log(`Congratulations, ${gamerName}! You won the cruise games with ${total} points. `);
    } else {
        console.log(`Sorry, ${gamerName}, you lost. Your points are only ${total}. `);

    }



}

game([
    'Annie', '5',
    'badminton', '34',
    'tennis', '76',
    'badminton', '10',
    'volleyball', '62',
    'badminton', '56'
]);