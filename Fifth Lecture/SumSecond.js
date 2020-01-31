function sumSecond(input) {
    let timeFirst = Number(input.shift());
    let timeSecond = Number(input.shift());
    let timeThird = Number(input.shift());

    let totalSum = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalSum / 60);
    let seconds = totalSum % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);

    }

}

sumSecond(["50", "50", "49"]);