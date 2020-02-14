function flower(input) {
    let magnolias = Number(input.shift());
    let zombies = Number(input.shift());
    let roses = Number(input.shift());
    let cactus = Number(input.shift());
    let gifPrice = Number(input.shift());

    let magnoliasPrice = magnolias * 3.25;
    let zombiesPrice = zombies * 4;
    let rosesPrice = roses * 3.5;
    let cactusPrice = cactus * 8;
    let total = magnoliasPrice + zombiesPrice + rosesPrice + cactusPrice;
    let totalWithTax = total - (total * 0.05);

    if (gifPrice <= totalWithTax) {
        let diff = Math.floor(totalWithTax - gifPrice);
        console.log(`She is left with ${diff} leva.`);
    } else {
        let diff = Math.ceil(gifPrice - totalWithTax);

        console.log(`She will have to borrow ${diff} leva.`);
    }
}
flower([2, 3, 5, 1, 50]);