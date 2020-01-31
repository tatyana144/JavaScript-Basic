function zooShop(input) {
    let dogs = Number(input.shift());
    let otherPets = Number(input.shift());

    let dogsPrice = dogs * 2.50;
    let petsPrice = otherPets * 4;

    let sum = dogsPrice + petsPrice;

    console.log(sum.toFixed(2) + " lv.");

}
zooShop(["13", "9"]);