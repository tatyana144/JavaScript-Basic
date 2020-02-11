function triangleArea(input) {
    let side = Number(input.shift());
    let high = Number(input.shift());

    let area = side * high / 2;

    console.log(area.toFixed(2));

}

triangleArea([ '20', '30', '' ]);