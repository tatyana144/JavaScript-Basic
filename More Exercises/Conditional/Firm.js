function firm(input) {
    let needHours = Number(input.shift())
    let days = Number(input.shift());
    let worker = Number(input.shift());

    let daysWithoutLearn = days - (days * 0.1);
    let hoursForWork = daysWithoutLearn * 8;
    let hoursMore = worker * (2 * days);
    let allHours = Math.floor(hoursForWork + hoursMore);

    if (needHours <= allHours) {
        let diff = allHours - needHours;
        console.log(`Yes!${diff} hours left.`);

    } else {
        let diff = needHours - allHours;
        console.log(`Not enough time!${diff} hours needed.`);

    }

}

firm([99, 3, 1]);