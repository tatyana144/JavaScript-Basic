function godzilla(input) {
    let buget = Number(input.shift());
    let people = Number(input.shift());
    let price = Number(input.shift());

    let decor = buget * 0.1;
    let clothеs = people * price;
    let disscount = 0;

    if (people >= 150) {
        disscount = clothеs * 0.1;
        clothеs = clothеs - disscount;
    }

    let allMoney = decor + clothеs;
    let diff = Math.abs(buget - allMoney);
    if (buget >= allMoney) {

        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }



}

godzilla([9587.88, 222, 55.68]);