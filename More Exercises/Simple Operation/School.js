function school(input) {
    let h = Number(input.shift());
    let w = Number(input.shift());

    let wInCm = w * 100;
    let hInCm = h * 100;
    let withoutHall = wInCm - 100;

    let deskRow = Math.floor(withoutHall / 70);
    let col = Math.floor(hInCm / 120);
    let allPlace = col * deskRow;
    let allDesk = allPlace - 3;

    console.log(allDesk);


}

school([15,
    8.9]);