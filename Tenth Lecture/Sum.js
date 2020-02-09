function sum(input) {
    let number = Number(input.shift());
    let sum = 0;

    while (number != "Stop") {
        sum += number;
        number = Number(input.shift())
        if(number ===number){
            continue;
        }else{

            break;
        }

    }

    console.log(sum);

}

sum(["1", "2", "3", "4", "5", "6", "Stop"]);