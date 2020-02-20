function sum(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combination = 0;

    let found = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            combination++;
            if (x + y == magicNumber) {
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNumber})`)
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    if (!found) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`)
    }
}
sum([23, 24, 20]);