function scholarship(input) {
    let salary = Number(input.shift());
    let averageGrade = Number(input.shift());
    let minSalary = Number(input.shift());
    let socialScholarship = 0;
    let gradeScholarship = 0;

    if (averageGrade >= 5.50) {
        gradeScholarship = Math.floor(averageGrade * 25);
    }

    if (salary < minSalary) {
        if (averageGrade > 4.50) {
            socialScholarship = Math.floor(minSalary * 0.35);
        }
    }

    if (socialScholarship > gradeScholarship){
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    }else if (gradeScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
    }else {
        console.log(`You cannot get a scholarship!`);

    }
}
scholarship(["300.00", "4.00", "300.00"]);