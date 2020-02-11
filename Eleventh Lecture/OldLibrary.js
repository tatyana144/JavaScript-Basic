function old(input) {
    let herBook = input.shift();
    let countBook = Number(input.shift());
    let counter = 0;
    let result = false;
    while (counter < countBook) {
        let books = input.shift();

        if (books === herBook) {
            result = true;
            break;
        }
        counter++;
    }

    if(result == true){
        console.log(`You checked ${counter} books and found it.`);
    }else{
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }

}

old(["Troy", "8", "Stronger", "Life Style", "Troy"]);