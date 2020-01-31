function danceStation(input){
let length = Number(input.shift());
let width = Number(input.shift());
let wardrobeSide = Number(input.shift());

let wardrobeSideIntoSm = wardrobeSide * 100;

let room = (length * 100) * (width * 100);
let wardrobeSize = Math.pow(wardrobeSideIntoSm,2);
let benchSize = room / 10;
let freeSpace = room - wardrobeSize - benchSize;
let countDancer = freeSpace / (40 + 7000);

console.log(Math.floor(countDancer));

}

danceStation(["50", "25", "2"]);