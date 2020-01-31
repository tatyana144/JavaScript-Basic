function circleArea(input){
let radius = Number(input.shift());
let circleArea = Math.pow(radius,2) * Math.PI;

console.log(`Circle area is: ${circleArea}`);
console.log(circleArea.toFixed(2));
}

circleArea(["3"]);