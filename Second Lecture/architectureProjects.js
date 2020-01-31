function projects(input) {
    let name = input.shift();
    let projectNumber = Number(input.shift());
    let time = projectNumber * 3;

    console.log(`The architect ${name} will need ${time} hours to complete ${projectNumber} project/s.`);

}

projects(["Georgi", "5"]);