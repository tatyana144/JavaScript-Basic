function tableLayer(input) {
    let count = Number(input.shift());
    let length = Number(input.shift());
    let width = Number(input.shift());

    let areaRectangleLayer = count * (length + (2 * 0.30)) * (width + (2 * 0.30));
    let areaSquareLayer = (count * (length / 2) * (length / 2));

    let priceUsd = (areaRectangleLayer * 7) + (areaSquareLayer * 9);
    let priceBgn = priceUsd * 1.85;

    console.log(`${priceUsd.toFixed(2)} USD`);
    console.log(`${priceBgn.toFixed(2)} BGN`);
}

tableLayer(["5", "1.00", "0.50"]);