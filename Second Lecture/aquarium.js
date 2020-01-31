function aquarium(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let heigth = Number(input.shift());
    let percent = Number(input.shift());

    let v = length * width * heigth;
    let liters = v * 0.001;
    let water = liters - (liters * percent / 100);

    console.log(water.toFixed(3));
}

aquarium(["85", "75", "47", "17"])