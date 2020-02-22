function cooking(input) {
    let people = Number(input.shift());

    let bake = 0;
    let total = 0;

    for (let i = 1; i <= people; i++) {
        let name = input.shift();
        let command = input.shift();
        let number = Number(input.shift());
        let cookie = 0;
        let cake = 0;
        let waffles = 0;

        while (command !== "Stop baking!") {

            if (command === "cookies") {
                cookie = number;
                bake += cookie;
                total += cookie * 1.5;
            } else if (command === "cakes") {
                cake = number;
                bake += cake;
                total += cake * 7.8;
            } else if (command === "waffles") {
                waffles = number;
                bake += waffles;
                total += waffles * 2.3;
            }


            command = input.shift();
            if (command === "Stop baking!") {

                break;
            }

            number = Number(input.shift());

        }

        console.log(`${name} baked ${cookie} cookies, ${cake} cakes and ${waffles} waffles.`);


    }
    console.log(`All bakery sold: ${bake}`);
    console.log(`Total sum for charity: ${total.toFixed(2)} lv.`);


}
cooking([
    '3', 'George',
    'cookies', '10',
    'Stop baking!', 'Annie',
    'waffles', '8',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'waffles', '3',
    'Stop baking!'
]);