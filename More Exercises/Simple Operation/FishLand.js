function fishland(input) {

    let priceScumria = Number(input.shift());
    let priceCaca = Number(input.shift());
    let kgPalamud = Number(input.shift());
    let kgSafrid = Number(input.shift());
    let kgMidi = Number(input.shift());

    let pricePalamudKg = priceScumria + priceScumria * 0.6;
    let priceSafridKg = priceCaca + priceCaca * 0.8;
    let priceMidiKg = 7.50;

    let pricePalamud = kgPalamud * pricePalamudKg;
    let priceSafrid = kgSafrid * priceSafridKg;
    let priceMidi = kgMidi * priceMidiKg;

    let sum = priceMidi + priceSafrid + pricePalamud;

    console.log(sum.toFixed(2));

}
fishland([ '6.90', '4.20', '1.5', '2.5', '1' ]);