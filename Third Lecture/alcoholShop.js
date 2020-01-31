function alcoholShop(input) {
    let priceYiski = Number(input.shift());
    let quantityBeer = Number(input.shift())
    let quantityWine = Number(input.shift())
    let quantityRakia = Number(input.shift())
    let quantityYiski = Number(input.shift())

    let priceRakia = priceYiski / 2;
    let priceWine = priceRakia - (priceRakia * 0.4);
    let priceBeer = priceRakia - (priceRakia * 0.8);

    let sumRakia = quantityRakia * priceRakia;
    let sumWine = quantityWine * priceWine;
    let sumBeer = quantityBeer * priceBeer;
    let sumYiski = quantityYiski * priceYiski;

    let allSum = sumBeer + sumRakia + sumWine + sumYiski;

    console.log(allSum.toFixed(2));

}

alcoholShop(["50", "10", "3.5", "6.5", "1"]);