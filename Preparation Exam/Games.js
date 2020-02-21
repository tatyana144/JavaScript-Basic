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



    for (let i = 0; i < 3; i++) {
        gameName = input.shift();
        points = Number(input.shift());

        if (gameName === "volleyball") {
            pointV = points + (points * 0.07);
            counterV++;
        } else if (gameName === "tennis") {
            pointT = points + (points * 0.05);
            counterT++;
        } else if (gameName === "badminton") {
            pointB = points + (points * 0.02);
            counterB++;
        }
    }
    let averageV = (pointV / counterV);
    let averageT = (pointT / counterT);
    let averageB = (pointB / counterB);
    let total = Math.floor(averageB + averageT + averageV);

    if (averageV >= 75 && averageT >= 75 && averageB >= 75) {
        console.log(`Congatulations, ${gamerName}! You won the cruise games with ${total} points. `);
    } else {
        console.log(`Sorry, ${gamerName} you lost. Your points are only ${total}. `);

    }



}

game(["Pepi", 3, "volleyball", 78, "tennis", 98, "badminton", 105]);