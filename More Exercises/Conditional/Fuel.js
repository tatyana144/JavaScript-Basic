function fuel(input) {
    let type = input.shift();
    let liters = Number(input.shift());
    let result = '';
    let booleanType = false;

    if (type === "Diesel") {
        result = "diesel";
    } else if (type === "Gasoline") {
        result = 'gasoline';
    } else if (type === "Gas") {
        result = "gas";
    } else {
        booleanType = true;
    }

    if (booleanType) {
        console.log(`Invalid fuel!`)
    } else if (liters >= 25) {
        console.log(`You have enough ${result}.`);
    } else if (liters < 25) {
        console.log(`Fill your tank with ${result}!`);
    }

}
fuel(['Kerosene', '200']);