function displayResult1(){
    var result1 = 0;
    for (var i = 5; i <= 25; i+=4){
       result1 = result1 + i;
       document.getElementById("result1").innerHTML= "5 + 9 + 13 + 17 + 21 + 25 = " + result1;
    }

    var result2 = 1;
    for (var i = 5; i <= 25; i+=4){
       result2 = result2 * i;
       document.getElementById("result2").innerHTML= "5 * 9 * 13 * 17 * 21 * 25 = " + result2.toLocaleString();
    }
}

function displayResult2(){
    var i = 3;
    var result = 0
    var result2 = 1;

    while(i <= 18){
        result = result + i;
        i += 3;
        document.getElementById("result3").innerHTML= "3 + 6 + 9 + 12 + 15 + 18 = " + result

        result2 = result2 * i;
        document.getElementById("result4").innerHTML= "3 * 6 * 9 * 12 * 15 * 18 = " + result2.toLocaleString();
    }
}
