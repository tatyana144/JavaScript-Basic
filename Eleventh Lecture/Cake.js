function cake(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let sizeCake = width * length;
    let sum = 0;
    let diff = 0;

    while (sum < sizeCake) {

        let cake = input.shift();
        if (cake !== "STOP") {
            sum += Number(cake);
        } else {
            break;
        }

    }

    if (sum >= sizeCake) {
        diff = sum - sizeCake;
        console.log(`No more cake left! You need ${diff} pieces more.`);
    } else {
        diff = sizeCake - sum;
        console.log(`${diff} pieces are left.`);
    }

}

cake(['10', '2', '2', '4', '6', 'STOP']);