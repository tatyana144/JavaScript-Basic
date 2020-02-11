function weather(input){
    let word = input.shift();

    if(word ==="sunny"){
        console.log("It's warm outside!")
    }else{
        console.log("It's cold outside!");
    }

}

weather(["sunny"]);