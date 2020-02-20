function tickets(input) {
    let nameMovie = input.shift();
    let totalTicket = 0;
    let studentCounter = 0;
    let standartCounter = 0;
    let kidCounter = 0;

    while (nameMovie !== "Finish") {
        let freeSpace = Number(input.shift());
        let typeTicket = input.shift();
        let sellTicket = 0;

        while (typeTicket !== "End") {
            if (typeTicket === "student") {
                studentCounter++;
            }

            if (typeTicket === "standard") {
                standartCounter++;
            }

            if (typeTicket === "kid") {
                kidCounter++;
            }

            sellTicket++;
            totalTicket++;
            if (sellTicket >= freeSpace) {
                break;
            }
            typeTicket = input.shift();

        }
        console.log(`${nameMovie} - ${(sellTicket / freeSpace * 100).toFixed(2)}% full.`);
        nameMovie = input.shift();
    }
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${(studentCounter / totalTicket * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartCounter / totalTicket * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTicket * 100).toFixed(2)}% kids tickets.`);
}
tickets([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Finish'
]);