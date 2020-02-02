function halfSumElement(input) {
    let n = Number(input.shift());
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        sum += number;
        if (number > max) {
            max = number
        }

    }

    let total = sum - max;
    if(total ===max){
        console.log(`Yes`);
        console.log(`Sum = ${total}`);
    }else {
        let dif = Math.abs(total -max);
        console.log(`No`);
        console.log(`Diff = ${dif}`);

    }

}

halfSumElement([7,3,4,1,1,2,12,1]);