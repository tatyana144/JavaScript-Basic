function greetingByName(input){
    let name = input.shift();
    let age = input.shift();
    let grade = input.shift();

console.log(`Hello, ${name}! You are ${age} years old and your grade is ${grade} .`);
}

greetingByName(["Tatyana Andreeva", 21, 6.00]);