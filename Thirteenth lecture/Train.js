function train(input) {
    let n = Number(input[0]);
    let presentationName = input[1];
    let nextIndex = 2;
    let sumOfAllAverage = 0;
    let counter = 0;

    while (presentationName !== "Finish") {
        let sum = 0;

        for (let i = 1; i <= n; i++) {
            let grade = Number(input[nextIndex]);
            sum += grade;
            nextIndex++;
        }
        let averageGrade = sum / n;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
        sumOfAllAverage += averageGrade;
        presentationName = input[nextIndex];
        nextIndex++;
        counter++;

    }

    console.log(`Student's final assessment is ${(sumOfAllAverage / counter).toFixed(2)}.`);
}

train([
    '2', 'While-Loop',
    '6.00', '5.50',
    'For-Loop', '5.84',
    '5.66', 'Finish',
    ''
]);