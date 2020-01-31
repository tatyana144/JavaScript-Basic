function metricConvertion(input) {
    let number = Number(input.shift());
    let metric = input.shift();
    let metricOut = input.shift();
    let result = 0.0;

    if (metric === "mm" && metricOut === "m") {
        result = number / 1000;
    } else if (metric === "mm" && metricOut === "cm") {
        result = number / 10;
    } else if (metric === "m" && metricOut === "cm") {
        result = number * 100;

    } else if (metric === "m" && metricOut === "mm") {
        result = number * 1000;
    } else if (metric === "cm" && metricOut === "m") {
        result = number / 100;
    } else if (metric === "cm" && metricOut === "mm") {
        result = number * 10;
    }
    console.log(result.toFixed(3));

}

metricConvertion(["150", "m", "cm"]);