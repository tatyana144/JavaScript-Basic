function numbers(input) {

    let number = Number(input.shift());

    for (let i = 1; i <= number; i+=3) {
        console.log(i);
    }

}

numbers(["10"]);