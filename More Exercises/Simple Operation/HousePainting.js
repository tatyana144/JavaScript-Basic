function housePainting(input) {
    let hеightHouse = Number(input.shift());
    let long = Number(input.shift());
    let hеightRoof = Number(input.shift());

    let sideWall = hеightHouse * long;
    let window = Math.pow(1.5, 2);
    let twoSideWall = sideWall * 2 - window * 2;
    let wall = Math.pow(hеightHouse, 2);
    let door = 1.2 * 2;
    let twoWall = 2 * wall - door;
    let all = twoSideWall + twoWall;
    let green = 3.4;
    let greenPaint = all / green;

    let twoReactangule = hеightHouse * long * 2;
    let twoTriangle = 2 * (hеightHouse * hеightRoof / 2)

    let allRoof = twoTriangle + twoReactangule;
    let red = 4.3;
    let redPaint = allRoof / red;

            console.log(greenPaint.toFixed(2));
            console.log(redPaint.toFixed(2));


}

housePainting(['6', '10', '5.2']);