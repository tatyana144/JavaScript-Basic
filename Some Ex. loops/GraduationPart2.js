function graduation(input) {

    let name = input.shift();
    let counter = 1;
    let total = 0;
    let excluded = 0;
    let isExcluded = false;

    while (counter <= 12) {
        let grade = Number(input.shift());

        if (grade < 4) {
            excluded++;
        }

        if (grade >= 4) {
            total += grade;
            counter++;
        }

        if(excluded>=2){
            isExcluded= true;
            break;
        }


    }

    if (isExcluded==false){
        let average = total/12;
console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }else{
        console.log(`${name} has been excluded at ${counter} grade`);

    }

}

graduation(["Pesho", "5", "6", "5", "6", "3", "6", "5", "6", "6", "5", "5"]);