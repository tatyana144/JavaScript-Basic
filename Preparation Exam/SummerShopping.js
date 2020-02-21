function shopping(input) {
    let money = Number(input.shift());
    let priceTowel = Number(input.shift());
    let discount = Number(input.shift());

    let umbrella = (priceTowel * 2) / 3;
    let sandals = umbrella * 0.75;
    let bag = (priceTowel + sandals) * 1 / 3;
    let total = priceTowel + umbrella + sandals + bag;
    let perDiscount = discount / 100;
    let totalWithDiscount = total - (total * perDiscount);
    let diff = Math.abs(money - totalWithDiscount);

    if (totalWithDiscount <= money) {

        console.log(`Annie's sum is ${totalWithDiscount.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`);

    } else {

        console.log(`Annie's sum is ${totalWithDiscount.toFixed(2)} lv. She needs ${diff.toFixed(2)} lv. more.`);

    }


}
shopping([30, 17, 3]);