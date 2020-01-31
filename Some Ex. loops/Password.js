function password(input) {
    let username = input.shift();
    let userPass = input.shift();

    let inputPass = input.shift();
    while (userPass != inputPass) {
        inputPass = input.shift();
    }

    console.log(`Welcome ${username}!`);

}

password(["Tatyana", "2406", "2040", "3760", "2406"]);