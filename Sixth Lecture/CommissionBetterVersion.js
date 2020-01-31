function commission(input) {
    let city = input.shift();
    let sales = Number(input.shift());

    let comm ;

    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            comm = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            comm = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            comm = sales * 0.08;
        } else if (sales > 10000) {
            comm = sales * 0.12;

        } else {
            console.log("error");
        }

    } else if (city === "Varna") {
        if (sales >= 0 && sales <= 500) {
            comm = sales * (4.5 / 100);
        } else if (sales > 500 && sales <= 1000) {
            comm = sales * (7.5 / 100);
        } else if (sales > 1000 && sales <= 10000) {
            comm = sales * 0.10;
        } else if (sales > 10000) {
            comm = sales * 0.13;
        } else {
            console.log("error");
        }

    } else if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            comm = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            comm = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            comm = sales * 0.12;
        } else if (sales > 10000) {
            comm = sales * 0.145;
        } else {
            console.log("error");
        }
        
    } else {
        console.log("error");
    }
    if (comm >=0){
        console.log(comm.toFixed(2));
    }

}
commission(["Sofia", "-1500"]);