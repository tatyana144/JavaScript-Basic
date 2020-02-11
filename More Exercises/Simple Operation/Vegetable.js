function vegetable(input) {
    let priceVegetable = Number(input.shift());
    let priceFruit = Number(input.shift());
    let vegetable = Number(input.shift());
    let fruit = Number(input.shift());

    let sumVeg = priceVegetable * vegetable;
    let sumFr = priceFruit * fruit;

    let total = sumFr + sumVeg;
    let euro = total /1.94;

    console.log(euro.toFixed(2));
}

vegetable(['0.194', '19.4', '10', '10']);