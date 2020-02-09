function password(input) {
    let userName = input.shift();
    let userPass = input.shift();

    let pass = input.shift();

    while (userPass != pass) {
        pass = input.shift();
    }
    console.log(`Welcome ${userName}!`);
}

password(["tatyana", "123", "344","345674","34444","123"]);