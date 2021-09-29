function reset(){
    document.getElementById("temp").value="";
    document.getElementById("output").value="";
}

function celcius(){
    var fahrenheit = parseFloat(document.getElementById("temp").value);

    if (!Number.isInteger(fahrenheit)){
        document.getElementById("output").value="Please enter a valid number.";
    } else {
        var celcius = 5/9 * (fahrenheit-32);
        document.getElementById("output").value=`With a temperature of ${fahrenheit} degrees Fahrenheit, that is ${Math.round(celcius.toFixed(0))} Celcius.`;

    }
}

function fahrenheit(){
    var celcius = parseFloat(document.getElementById("temp").value);

    if (!Number.isInteger(celcius)){
        document.getElementById("output").value="Please enter a valid number.";
    } else {
        var fahrenheit = (9/5 * celcius) + 32;
        document.getElementById("output").value=`With a temperature of ${celcius} degrees Celcius, that is ${Math.round(fahrenheit.toFixed(0))} Fahrenheit.`;

    }
}