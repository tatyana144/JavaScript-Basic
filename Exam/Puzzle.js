function puzzle(input) {
    let key = Number(input.shift());
    let result1 = 0;
    let result2 = 0;
    let no = false;
    for (let a = 1; a <= 30; a++) {
        for (let b = 1; b <= 30; b++) {
            for (let c = 1; c <= 30; c++) {
                result1 = a + b + c;
                result2 = a * b * c;
                if (result1 === key) {
                    if (a < b && b < c) {
                        console.log(`${a} + ${b} + ${c} = ${result1}`);
                        no = true;
                    }
                }

                if (result2 === key) {
                    if (a > b && b > c) {
                        console.log(`${a} * ${b} * ${c} = ${result2}`);
                        no = true;
                    }
                }

            }
        }
    }

    if (no !== true) {
        console.log(`No!`)
    }

}

puzzle(['93']);