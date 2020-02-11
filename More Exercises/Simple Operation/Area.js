function area(input) {
    let b1 = Number(input.shift());
    let b2 = Number(input.shift());
    let h = Number(input.shift());

    let area = (b1 + b2) * h / 2;

    console.log(area.toFixed(2));

}

area([4,
    6,
    8]);