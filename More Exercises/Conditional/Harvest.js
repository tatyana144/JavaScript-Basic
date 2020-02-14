function harvest(input) {
    let x = parseInt(input.shift());
    let y = Number(input.shift());
    let needLitWine = parseInt(input.shift());
    let countWorker = parseInt(input.shift());

    let allGrapes = x * y;
    let wine = (0.4 * allGrapes) / 2.5;

    if (wine < needLitWine) {
        let diff = Math.floor(needLitWine - wine);
        console.log(`It will be a tough winter! More ${diff.toFixed(0)} liters wine needed.`)
    } else {
        let diff = Math.ceil(wine - needLitWine);
        let winePerPerson = Math.ceil(diff / countWorker);
        console.log(`Good harvest this year! Total wine: ${wine.toFixed(0)} liters.`)
        console.log(`${diff} liters left -> ${winePerPerson} liters per person.`)

    }

}
harvest([650, 2, 175, 3]);