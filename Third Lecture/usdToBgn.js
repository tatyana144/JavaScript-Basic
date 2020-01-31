function convertUsdToBgn(input){
    let usd = Number(input.shift());
    let convert = usd * 1.79549;
    console.log(`${convert.toFixed(2)}`);

}

convertUsdToBgn(["20"]);