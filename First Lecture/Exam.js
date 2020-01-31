function saving(input) {
    let forMonth = parseFloat(input.shift());
    let countMonth =parseInt(input.shift());
    let neededSum = parseFloat(input.shift());

    let sumEveryMonth = forMonth - neededSum - (forMonth * 0.3);
    let forThreeMonts = (countMonth * sumEveryMonth).toFixed(2);
    let percentFromdohodi =( (sumEveryMonth / forMonth) * 100).toFixed(2);

    console.log(`She can save ${percentFromdohodi}%`);
    console.log(forThreeMonts);
}

saving(["1500", "3", "800"]);