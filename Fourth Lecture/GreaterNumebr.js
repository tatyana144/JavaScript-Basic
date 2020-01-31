function greaterNumber(input) {

    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    if (firstNum > secondNum) {
        console.log(firstNum);
    } else {
        console.log(secondNum);
    }
}

greaterNumber(["3", "5"]);