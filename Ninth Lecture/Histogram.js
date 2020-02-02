function histogram(input) {
    let n = Number(input.shift());
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());


        if (number < 200) {
            p1Count++;
        }else if (number>=200 && number<=399){
            p2Count++;

        }else if (number>=400 && number <=599){
            p3Count++;
            
        }else if (number>= 600 & number<=799){
            p4Count++;
            
        }else if (number>=800){
            p5Count++;
            
        }

    }

    let p1Percent =(p1Count/n)*100;
    let p2Percent =(p2Count/n)*100;
    let p3Percent =(p3Count/n)*100;
    let p4Percent =(p4Count/n)*100;
    let p5Percent =(p5Count/n)*100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);

}

histogram([14,
    53,
    7,
    56,
    180,
    450,
    920,
    12,
    7,
    150,
    250,
    680,
    2,
    600,
    200]);