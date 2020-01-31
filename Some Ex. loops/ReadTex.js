function readText(input){
    let number = Number(input.shift());

    while (number<1 || number>100){
        console.log("Invalid Number!");
         number = Number(input.shift());

    }

    console.log(`The number is: ${number}`);
}

readText(["1","-30","101","100","5","3","200","367"]);