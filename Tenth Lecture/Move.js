function move(input) {
    let width = Number(input.shift());
    let lenght = Number(input.shift());
    let hight = Number(input.shift());

    let freeSpace = width * lenght * hight;
    let allSpace = 0;
    let spaceDif = 0;

    let command = input.shift();

    while (command != "Done") {
        let cartoonSpace = Number(command);
        allSpace += cartoonSpace;
        spaceDif = Math.abs(allSpace - cartoonSpace);

        if (allSpace >= freeSpace) {
            console.log(`No more free space! You need ${spaceDiff} Cubic meters more.`);
            break;

        }
        command = input.shift();
    }

    if (command === "Done") {
        console.log(`${spaceDiff} Cubic meters left.`);
    }

}

move(["", "", "", ""]);