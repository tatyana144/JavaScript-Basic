function area(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let area = length * width;
    let perimiter = 2 * (length + width);

    console.log(area.toFixed(2));
    console.log(perimiter.toFixed(2));

}
area(["60", "20", "10", "50"]);