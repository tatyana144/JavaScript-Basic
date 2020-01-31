function rectangleArea(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let rectangleArea = a * b;
    console.log(rectangleArea);
}

rectangleArea(["2", "7"]);