function table(input) {
    let number = input.shift();
    let first = Number(number[2]);
    let second = Number(number[1]);
    let third = Number(number[0]);
    let result = 0;
    let string = 0;

    for (let a = 1; a <= first; a++) {
        for (let b = 1; b <= second; b++) {
            for (let c = 1; c <= third; c++) {
                result = a * b * c;
                string = `${a} * ${b} * ${c} = ${result};`;
                console.log(string)
            }
        }
    }

}
table(['222']);