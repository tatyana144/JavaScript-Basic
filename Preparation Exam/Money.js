function money(input) {
    let moneyPerMonth = Number(input.shift());
    let countMont = Number(input.shift());
    let neededMoney = Number(input.shift());

    let someMoney = moneyPerMonth * 0.3;
    let saveMoney = moneyPerMonth - (neededMoney + someMoney);
    let saveMoneyForMonth = countMont * saveMoney;
    let percentFromHerMoney = (saveMoney * 100) / moneyPerMonth;
    console.log(`She can save ${percentFromHerMoney.toFixed(2)}%`)
    console.log(saveMoneyForMonth)

}
money([1500, 3, 800])