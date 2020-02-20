function sum(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let printLine = "";

    for (let i = firstNum; i <= secondNum; i++) {

        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let t = 0; t < currentNum.length; t++) {

            let currentDigit = currentNum.charCodeAt(t);

            if (t % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum == oddSum) {
            printLine += " " + i;
        }
    }

    console.log(printLine);
}
sum(['100000', '100050', '']);