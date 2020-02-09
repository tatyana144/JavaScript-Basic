function onotherGraduatin(input) {
    let name = input.shift();
    let sum = 0;
    let count = 1;
    let secondCount = 0;
    let isExcluded = false;
    let average = 0;

    while (count <= 12) {

        let grade = Number(input.shift());
        if (grade >= 4) {
            sum += grade;
            count++;
        }

        if(grade <4) {
            secondCount++;
        }

        if (secondCount >= 2) {
            isExcluded = true;
            break;
        }

    }

    if (isExcluded ==false) {
        average = sum / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);

    } else {
        console.log(`${name} has been excluded at ${count} grade`);
    }

}
onotherGraduatin(["Pesho", "5", "6", "5", "6", "6", "6", "5", "6", "6", "5", "5","6"]);