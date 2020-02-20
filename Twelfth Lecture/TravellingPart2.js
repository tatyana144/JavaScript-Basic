function travel(input) {
    let destination = input.shift();
    let minSum = Number(input.shift());
    let sum = 0;
    let stop = false;


    for (let x = 0; x >= 0; x++) {
        for (let y = 0; y >= 0; y++) {
            let price = Number(input.shift());
            sum += price;
            if (sum >= minSum) {
                console.log(`Going to ${destination}!`)
                destination = input.shift();
                break;
            }

        }
        if (destination === "End") {
            break;
        } else {
            minSum = Number(input.shift());
            sum = 0;
        }

    }
}
travel([
    'Greece', '1000', '200',
    '200', '300', '100',
    '150', '240', 'Spain',
    '1200', '300', '500',
    '193', '423', 'End',
    ''
]);