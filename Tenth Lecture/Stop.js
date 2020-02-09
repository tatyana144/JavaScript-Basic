function stop(input){

    let stop = false;

    while(stop != true){
        let words =input.shift();
        
        if (words === "Stop"){
            stop =true;
        }
    }

}

stop(["Tatyana","Asenova","Andreeva","Stop"])