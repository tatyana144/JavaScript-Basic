function saving(input) {
    let salary = Number(input.shift());
    let numberMonth = Number(input.shift());
    let neededSum = Number(input.shift());

    let persenolSum = (salary * 0.30);
    let sumForMonthSave = salary - (neededSum + persenolSum);
    let saveForMonts = numberMonth * sumForMonthSave;
    let percent = (sumForMonthSave / salary) *100;

    console.log(`She can save ${percent.toFixed(2)}%`);
    console.log(saveForMonts.toFixed(2));
}

saving(["2050", "5", "900"]);