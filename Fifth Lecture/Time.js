function time(input) {

    let hours = Number(input.shift());
    let minets = Number(input.shift());

    minets += hours * 60;
    minets += 15;

    let endHours = Math.floor(minets / 60);
    let endMinets = minets - (endHours * 60)

    if (endMinets < 10) {
        endMinets = "0" + endMinets;
    }

    if (endHours > 23) {
        endHours -= 24;
    }

    console.log(`${endHours}:${endMinets}`);
}

time(["0", "01"]);