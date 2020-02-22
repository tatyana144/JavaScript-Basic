function bake(input) {
    let people = Number(input.shift());
    let total = 0;
    let allMoney = 0;

    for (let i = 1; i <= people; i++) {
        let name = input.shift();
        let sweet = input.shift();
        let cookies = 0;
        let cakes = 0;
        let waffles = 0;

        while (sweet !== "Stop baking!") {

            let number = Number(input.shift());
            total += number;
            if (sweet == "cookies") {
                cookies += number;
                allMoney += number * 1.50;
            } else if (sweet == "cakes") {
                cakes += number;
                allMoney += number * 7.80;
            } else if (sweet == "waffles") {
                waffles += number;
                allMoney += number * 2.30;
            }

            sweet = input.shift();

        }
        console.log(`${name} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`)

    }
    console.log(`All bakery sold: ${total}`)
    console.log(`Total sum for charity: ${allMoney.toFixed(2)} lv.`)

}
bake(['3', 'George',
    'cookies', '10',
    'Stop baking!', 'Annie',
    'waffles', '8',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'waffles', '3',
    'Stop baking!'
]);