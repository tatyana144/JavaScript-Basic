function isExcellent(input) {

    let grade = Number(input.shift());

    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}

isExcellent(["5.0"]);