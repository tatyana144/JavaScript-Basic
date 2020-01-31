function green(input) {
    let meters = Number(input.shift());
    let price = meters * 7.61;
    let discount = ((price) * (18 / 100));
    let lastprice = price - discount;

    console.log(`The final price is: ${lastprice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);

}
green(["540"]);