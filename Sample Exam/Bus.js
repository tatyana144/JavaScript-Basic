function bus(input) {
    let people = Number(input.shift());
    let busStop = Number(input.shift());
    let down = Number(input.shift());
    let up = Number(input.shift());

    for (let i = 1; i <= busStop; i++) {

        if (i % 2 !== 0) {
            people -= down;
            people += up + 2;
        } else {
            people -= down + 2;
            people += up;
        }
        down = Number(input.shift());
        up = Number(input.shift());
    }
    console.log(`The final number of passengers is : ${people}`);

}
bus([
    '25', '5', '14', '15',
    '9', '11', '10', '13',
    '6', '7', '10', '8',
    ''
]);