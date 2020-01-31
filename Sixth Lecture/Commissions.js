function commissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());

    let comm ;
    switch (city) {
        case "Sofia":
            {
                if (sales >=0 && sales <= 500) {
                    comm = sales * 0.05;
                    console.log(comm.toFixed(2));
                } else if (sales > 500 && sales <=1000){
                    comm = sales * 0.07;
                    console.log(comm.toFixed(2));
                } else if (sales >1000 && sales<=10000){
                    comm = sales * 0.08;
                    console.log(comm.toFixed(2));
                }else if(sales> 10000) {
                    comm = sales * 0.12;
                    console.log(comm.toFixed(2));
                }else{
                    console.log("error");
                }
            }; break;
        case "Varna": {
            if (sales >=0 && sales <= 500) {
                comm = sales * (4.5/100);
                console.log(comm.toFixed(2));
            } else if (sales > 500 && sales <=1000){
                comm = sales * (7.5/100);
                console.log(comm.toFixed(2));
            } else if (sales >1000 && sales<=10000){
                comm = sales * 0.10;
                console.log(comm.toFixed(2));
            }else if(sales >10000){
                comm = sales * 0.13;
                console.log(comm.toFixed(2));
            }else{
                console.log("error");
            }
        }; break;
        case "Plovdiv":{
            if (sales >=0 && sales <= 500) {
                comm = sales * 0.055;
                console.log(comm.toFixed(2));
            } else if (sales > 500 && sales <=1000){
                comm = sales * 0.08;
                console.log(comm.toFixed(2));
            } else if (sales >1000 && sales<=10000){
                comm = sales * 0.12;
                console.log(comm.toFixed(2));
            }else if(sales>10000) {
                comm = sales * 0.145;
                console.log(comm.toFixed(2));
            }else {
                console.log("error");
            }
        }; break;
        default: console.log("error");
    }

}

commissions(["Varna", "-1"]);