function swimmingRecord(input) {

    let record = Number(input.shift());
    let lenght = Number(input.shift());
    let timeForAMeter = Number(input.shift());

    let timeForSwim = lenght * timeForAMeter;
    let moreMeters = Math.floor(lenght / 15);
    let moreTime = moreMeters * 12.5;
    let allTime = (timeForSwim + moreTime);
    let howTimeNeed = 0;

    if (record <= allTime) {
        howTimeNeed = allTime - record;
        console.log(`No, he failed! He was ${howTimeNeed.toFixed(2)} seconds slower.`);
    } else {

        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`);

    }
}

swimmingRecord(["10464", "1500", "20"]);