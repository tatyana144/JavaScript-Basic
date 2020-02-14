function pets(input) {
    let days = Number(input.shift());
    let foodKg = Number(input.shift());
    let dogFoodPerDay = Number(input.shift());
    let catFoodPerDay = Number(input.shift());
    let turtleFoodPerDay = Number(input.shift());

    let dogFood = dogFoodPerDay * days;
    let catFood = catFoodPerDay * days;
    let turtleFood = (turtleFoodPerDay / 1000) * days;
    let total = dogFood + catFood + turtleFood;

    if (foodKg >= total) {
        let diff = Math.floor(foodKg - total);
        console.log(`${diff} kilos of food left.`);
    } else {
        let diff = Math.ceil(total - foodKg);
        console.log(`${diff} more kilos of food are needed.`);
    }


}

pets([5, 10, 2.1, 0.8, 321]);