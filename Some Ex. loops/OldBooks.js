function oldBooks(input){

    let corectBook = input.shift();
    let countOfBooks = Number(input.shift());
    let book = input.shift();
    let counter =0;
    let isFound = false;

    while(isFound != true){

        counter +=1;
        book = input.shift();

        if(corectBook=== book){
            isFound=true;
            console.log(`You checked ${counter} books and you found it.`);
        }


    }
    if(isFound = false ){
        console.log("The book you serch is not here!");
        console.log(`You checked ${counter} books`);
    }

}

oldBooks(["Troy","8","Stronger","Life Style","Troy"]);