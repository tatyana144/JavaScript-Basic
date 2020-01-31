function hotelRoom(input) {
    let month = input.shift();
    let night = Number(input.shift());

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;
        if (night > 7 && night<14) {
            studioPrice = studioPrice - (studioPrice * 0.05);
        } else if (night > 14) {
            studioPrice = studioPrice - (studioPrice * 0.3);
            apartmentPrice = apartmentPrice - (apartmentPrice * 0.1);
        }
        apartmentPrice = night * apartmentPrice;
        studioPrice = night * studioPrice;
    } else if (month === "June" || month === "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if (night > 14) {
            studioPrice = studioPrice - (studioPrice * 0.2);
            apartmentPrice = apartmentPrice - (apartmentPrice * 0.1);

        }
        apartmentPrice = night * apartmentPrice;
        studioPrice = night * studioPrice;
    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;
        if (night > 14) {
            apartmentPrice = apartmentPrice - (apartmentPrice * 0.1);
        }
        apartmentPrice = night * apartmentPrice;
        studioPrice = night * studioPrice;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);



}

hotelRoom(["August", "20"]);