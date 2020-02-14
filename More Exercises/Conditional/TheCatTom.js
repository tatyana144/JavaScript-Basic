function theCat(input) {
    let holidayDays = Number(input.shift());
    let workDays = 365 - holidayDays;
    let minSleep = 30000;
    let minGameHolidayForDay = 127;
    let minGameWorkForDay = 63;

    let minHoliday = minGameHolidayForDay * holidayDays;
    let minWork = minGameWorkForDay * workDays;
    let all = minHoliday + minWork;

    if (minSleep < all) {
        let diff = all - minSleep;
        let hours = Math.floor(diff / 60);
        let min = all % 60;
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${min} minutes more for play`);
    } else {
        let diff = minSleep - all;
        let hours = Math.floor(diff / 60);
        let min = diff % 60;
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${min} minutes less for play`);

    }

}
theCat([113]);