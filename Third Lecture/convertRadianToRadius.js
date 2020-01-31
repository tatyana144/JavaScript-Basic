function convertRadianToRadius(input) {
    let radian = Number(input.shift());
    let radius = radian * (180 / Math.PI);

    console.log(radius.toFixed(0));
}

convertRadianToRadius(["6.2832"]);