function devide(input) {
    let n = Number(input.shift());

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());

        if (number % 2 == 0) {
            p1Count++
        } 
        if (number % 3 == 0) {
            p2Count++
        } 
        if (number % 4==0) {
            p3Count++
        }

    }

    let p1Percent =(p1Count/n)*100;
    let p2Percent =(p2Count/n)*100;
    let p3Percent =(p3Count/n)*100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);

}

devide([10,
    680,
    2,
    600,
    200,
    800,
    799,
    199,
    46,
    128,
    65]);