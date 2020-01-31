function volleyball(input) {
    let year = input.shift();
    let holidayCount = Number(input.shift());
    let weekendCount = Number(input.shift());

    let yearHasWeekend = 48;
    let weekwndInSofia = yearHasWeekend - weekendCount;
    let gamesInSofia = weekwndInSofia * (3.0 / 4);
    let gamesInHome = weekendCount;
    let holidaysGame = holidayCount * (2.0 / 3);
    let allGames = gamesInHome + gamesInSofia + holidaysGame;
    let moreGames = 0;

    if (year === "leap") {
        moreGames = allGames * 0.15;
        allGames += moreGames;
    }

    console.log(Math.floor(allGames));


}

volleyball(["normal", "6", "13"]);