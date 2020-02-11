function celsius(input) {
    let celsius = Number(input.shift());
    let f = celsius * 1.8 + 32;

    console.log(f.toFixed(2));

}

celsius(['25']);