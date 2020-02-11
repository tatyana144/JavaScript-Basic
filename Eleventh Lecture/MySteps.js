function steps(input) {

    let sum = 0;
    let goal = 10000;
    let goingHome = false;

    while (sum < goal) {

        let steps = input.shift()
        if (steps !== "Going home") {
            sum += Number(steps);

        }else if(steps ==="Going home"){
            goingHome = true;
            continue;
        }
        
        if(goingHome){
            break;
        }


    }

    if (sum >= goal) {
        console.log("Goal reached! Good job!");
    } else {
        let moreSteps = goal - sum;
        console.log(`${moreSteps} more steps to reach goal.`);
    }

}
steps([1500,
    300,
    2500,
    3000,
    "Going home",
    200])