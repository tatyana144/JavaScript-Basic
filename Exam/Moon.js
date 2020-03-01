function moon(input) {
    let averageSpeed = Number(input.shift());
    let fuel = Number(input.shift());
    let allDistance = 384400 * 2;
    let time = Math.ceil(allDistance / averageSpeed);
    let allTime = time + 3;
    let allFuel = (fuel * allDistance) / 100;

    console.log(allTime);
    console.log(allFuel);
}

moon([5000, 7]);