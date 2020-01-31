function correctPass(input) {
    let pass = input.shift();
    let correctPass = "s3cr3t!P@ssw0rd";

    if (pass === correctPass) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

correctPass(["s3cr3t!P@ssw0rd"]);