function salary(input) {
    let countTab = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i < countTab; i++) {
        let name = input.shift();

        if (name === "Facebook") {
            salary -= 150;

        } else if (name === "Instagram") {
            salary -= 100;

        } else if (name === "Reddit") {
            salary -= 50;
        }

        if (salary === 0) {
            console.log(`You have lost your salary.`);
            break;
        }

    }

    if(salary>0){
        console.log(salary);
    }

}

salary([10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);