function circle(input){
    let radius = Number(input.shift());
    let circleArea = Math.pow(radius,2) * Math.PI;
    let circlePerimiter = 2 * Math.PI *radius ;
    console.log(circleArea.toFixed(2));
    console.log(circlePerimiter.toFixed(2));

}
circle(["3"]);