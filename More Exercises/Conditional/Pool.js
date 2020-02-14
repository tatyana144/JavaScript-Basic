function pool(input) {
    let v = Number(input.shift());
    let p1 = Number(input.shift());
    let p2 = Number(input.shift());
    let hours = Number(input.shift());

    let first = p1 * hours;
    let second = p2 * hours;
    let all = first + second;
    let percentForLPool = v / 100;
    let perPool = all / percentForLPool;

    let percent = all / 100;
    let perP1 = (first / percent);
    let perP2 = (second / percent);

    if (all <= v) {
        console.log(`The pool is ${perPool.toFixed(2)}% full. Pipe 1: ${perP1.toFixed(2)}%. Pipe 2: ${perP2.toFixed(2)}%.`);
    } else {
        let diff = all - v;
        console.log(`For ${hours} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }


}

pool([1000, 100, 120, 3]);