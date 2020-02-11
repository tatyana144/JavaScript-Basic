function examPreparation(input) {
    let badGrade = Number(input.shift());
    let countForBadGrades = 0;
    let sum = 0;
    let count = 0;
    let lastProblem = "";

    while (countForBadGrades < badGrade) {
        let nameProblem = input.shift();
        let grade = Number(input.shift());



        if (grade <= 4) {
            countForBadGrades++;
        }

        if (nameProblem === "Enough") {
            let average = sum / count;
            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${count}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        
        sum += grade;
        count++;
        lastProblem = nameProblem;
    }

    if (countForBadGrades>=badGrade){
        console.log(`You need a break, ${countForBadGrades} poor grades.`);
    }

}

examPreparation(["2", "Money", "6", "Story","5","Spring Time","6","Buss","6","Enough"]);