function steps(input) {
    const goal = 10000;
    let curuntSteps = input.shift();
    steps = 0;
    let goingHome = false;

    while (steps < goal) {

        if (curuntSteps === "Going home") {
            goingHome = true;
            curuntSteps = input.shift();
            continue;
        } else if (goingHome) {
            steps += Number(curuntSteps);
            break;
        }
        steps += Number(curuntSteps);
        curuntSteps = input.shift();

    }

    if (steps >= goal) {
        console.log("Goal reached. Good job!");
    } else {
        let moreSteps = goal - steps;
        console.log(`${moreSteps} more steps to reach goal.`);
    }

}

steps([1000,
    1500,
    2000,
    6500]);