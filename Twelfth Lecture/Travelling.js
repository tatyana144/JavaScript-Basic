function travel(input) {
    let destination = input.shift();
    let minSum = Number(input.shift());
    let sum = 0;
    let stop = false;
    while (stop !== true) {


        while (sum <= minSum) {
            let price = Number(input.shift());
            sum += price;
            if (sum >= minSum) {
                console.log(`Going to ${destination}!`)
                destination = input.shift();
            }

        }
        if (destination === "End") {
            stop = true;
            break;
        } else {
            minSum = Number(input.shift());
            sum = 0;
        }

    }

}
travel([
    'France', '2000', '300',
    '300', '200', '400',
    '190', '258', '360',
    'Portugal', '1450', '400',
    '400', '200', '300',
    '300', 'Egypt', '1900',
    '1000', '280', '300',
    '500', 'End', ''
]);