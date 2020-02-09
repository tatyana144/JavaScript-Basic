function graduation(input) {
    let name = input.shift();
    let sum = 0;
    let count = 1;

    while (count <= 12) {
        let grade = Number(input.shift());
        
        if (grade >= 4) {
            sum += grade;
            count++;
        }
    }

    let average = sum/12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);


}
graduation(["Pesho","4","5.5","6","5.43","4.5","6","5.55","5","6","6","5.43","5"]);