function faith(input) {
    let budget = Number(input.shift());
    let people = Number(input.shift());
    let priceForCloth = Number(input.shift());

    let sumOfDecor = (budget * 0.10);
    let sumForCloths = people * priceForCloth;
    let needSumForAll = 0.0;
    let sumLeft = 0.0;


    if(people > 150){
     sumForCloths = sumForCloths - (sumForCloths*0.10);
     needSumForAll = sumForCloths + sumOfDecor;
    }else{
        needSumForAll = sumOfDecor + sumForCloths;
    }

    if(needSumForAll > budget){
        sumLeft = needSumForAll - budget;
        console.log("Not enough money!")
        console.log(`Wingard needs ${sumLeft.toFixed(2)} leva more.`)

      
    }else {
        sumLeft= budget - needSumForAll;
        console.log("Action!")
        console.log(`Wingard starts filming with ${sumLeft.toFixed(2)} leva left.`)

    }
}

faith(["9587.88", "222", "55.68"]);