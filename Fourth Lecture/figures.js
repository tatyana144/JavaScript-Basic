function areaFigures(input) {
    let figure = input.shift();
    let result = 0;

    if (figure == "square") {
        let side = Number(input.shift());
        let area = Math.pow(side, 2);
        console.log(area.toFixed(3));

    } else if (figure == "rectangle") {
        let sideOne = Number(input.shift());
        let sideTwo = Number(input.shift());
        let area = sideOne * sideTwo;
        console.log(area.toFixed(3));

    } else if (figure == "circle") {
        let radius = Number(input.shift());
        let area = Math.PI * Math.pow(radius, 2);
        console.log(area.toFixed(3));

    } else if (figure == "triangle") {
        let side = Number(input.shift());
        let height = Number(input.shift());
        let area = (side * height) / 2;
        console.log(area.toFixed(3));

    }


}

areaFigures(["circle", "6", "20"]);