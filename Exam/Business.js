function business(input) {
    let width = Number(input.shift());
    let long = Number(input.shift());
    let hight = Number(input.shift());

    let space = width * long * hight;
    let allComputers = 0;
    let diff = 0;

    let command = input.shift();

    while (command !== "Done") {
        command = Number(command);
        allComputers += command;

        if (space < allComputers) {
            diff = allComputers - space;
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        } else {
            diff = space - allComputers;

        }

        command = input.shift();
        if (command === "Done") {
            console.log(`${diff} Cubic meters left.`);
        }
    }
}

business(['10', '1', '2', '4', '6', 'Done']);