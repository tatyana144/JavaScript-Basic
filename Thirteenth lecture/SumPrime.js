function sum(input) {
    let number = input.shift();
    let sumOfPrimeNum = 0;
    let sumOfNoPrimeNum = 0;

    while (number !== "stop") {
        number = Number(number);
        let isPrime = true;

        if (number < 0) {
            console.log("Number is negative.");
            number = input.shift();
            continue;
        }

        if (number === 1) {
            isPrime = true;
        }

        let maxDelimiter = Math.floor(Math.sqrt(number));

        for (let i = 2; i <= maxDelimiter; i++) {
            if (number % i == 0) {

                isPrime = false;
            }
        }

        if (isPrime) {
            sumOfPrimeNum += number;
        } else {
            sumOfNoPrimeNum += number;
        }
        number = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNoPrimeNum}`);
}
sum([0, -9,
    0,
    "stop"
])