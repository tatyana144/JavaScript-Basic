function operations(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operation = input.shift();

    let result = 0;
    let whichOperatin;

    if (operation === "+") {
        whichOperatin = "+"
        result = n1 + n2;
    } else if (operation === "-") {
        whichOperatin = "-"

        result = n1 - n2;
    } else if (operation === "*") {
        whichOperatin = "*"
        result = n1 * n2;
    } else if (operation === "/") {
        whichOperatin = "/"

        if (n1 === 0) {
            console.log(`Cannot divide ${n2} by zero`)
        } else if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            result = (n1 / n2).toFixed(2);
        }
    } else if (operation === "%") {
        whichOperatin = "%"

        if (n1 === 0) {
            console.log(`Cannot divide ${n2} by zero`)
        } else if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            result = n1 % n2;
        }
    }

    if ((operation != "%" && operation != "/")) {
        if (result % 2 === 0) {
            console.log(`${n1} ${whichOperatin} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${whichOperatin} ${n2} = ${result} - odd`);

        }
    } else if ((operation === "%" || operation === "/") && (n1 != 0 && n2 != 0)) {
        console.log(`${n1} ${whichOperatin} ${n2} = ${result}`);

    }


}

operations(["10", "0", "%"]);