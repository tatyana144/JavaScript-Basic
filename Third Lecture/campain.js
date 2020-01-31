function campain(input){

    let countDays = Number(input.shift());
    let countCooks = Number(input.shift());
    let countCakes = Number(input.shift());
    let countCorrugations = Number(input.shift());
    let countPancakes = Number(input.shift());

    let sumCake = countCakes * 45;
    let sumCorrugations = countCorrugations * 5.80;
    let sumPancakes = countPancakes * 3.20;

    let priceForADay = countCooks * (sumCake + sumCorrugations + sumPancakes);
    let sumForAllDays = countDays * priceForADay;
    let sumWithoutCosts = sumForAllDays - (sumForAllDays/8);

    console.log(sumWithoutCosts.toFixed(2));

}

campain(["131", "5", "9", "33","46"]);