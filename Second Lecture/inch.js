function inches(input) {
    let inches = Number(input.shift());
    let inchesIntoSm = inches * 2.54;
    console.log(inchesIntoSm);
}

inches(["5"]);