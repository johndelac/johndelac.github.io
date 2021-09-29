function submit(){
    var item1 = document.forms["items"].elements["item1"].value;
    item1 = parseFloat(item1);
    var item2 = document.forms["items"].elements["item2"].value;
    item2 = parseFloat(item2);
    var item3 = document.forms["items"].elements["item3"].value;
    item3 = parseFloat(item3);
    var item4 = document.forms["items"].elements["item4"].value;
    item4 = parseFloat(item4);
    var employee = document.forms["salesperson"].elements["employee"].value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890 ]+/;

    if (format.test(employee) || employee == ""){
        document.getElementById("employee").value="";
        document.getElementById("test").value = "Please enter a valid name";
    } else {
        document.getElementById("test").value = "";
    }
    
    if (isNaN(item1) || item1 < 0){
        document.getElementById("item1").value="";
        document.getElementById("test1").value="Please enter valid numbers.";
    } else {
        document.getElementById("test1").value="";
    }
    
    if (isNaN(item2) || item2 < 0){
        document.getElementById("item2").value="";
        document.getElementById("test2").value="Please enter valid numbers";
    } else {
        document.getElementById("test2").value="";
    }
    
    if (isNaN(item3) || item3 < 0){
        document.getElementById("item3").value="";
        document.getElementById("test3").value="Please enter valid numbers";
    } else {
        document.getElementById("test3").value="";
    }
   
    if (isNaN(item4) || item4 < 0){
        document.getElementById("item4").value="";
        document.getElementById("test4").value="Please enter valid numbers";
    } else { 
        document.getElementById("test4").value="";
        var total1 = item1 * 239.99;
        var total2 = item2 * 129.75;
        var total3 = item3 * 99.95;
        var total4 = item4 * 350.89;
        var weekly = total1 + total2 + total3 + total4;
        var commission = (weekly * .09) + 250;
        
        document.getElementById("numberSold1").innerHTML=item1
        document.getElementById("numberSold2").innerHTML=item2
        document.getElementById("numberSold3").innerHTML=item3
        document.getElementById("numberSold4").innerHTML=item4

        document.getElementById("total1").innerHTML=total1.toFixed(2);
        document.getElementById("total2").innerHTML=total2.toFixed(2);
        document.getElementById("total3").innerHTML=total3.toFixed(2);
        document.getElementById("total4").innerHTML=total4.toFixed(2);

        document.getElementById("totalSold").innerHTML=weekly.toFixed(2);
        document.getElementById("totalWeekly").innerHTML=commission.toFixed(2);
    }
}


function reset(){
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
        if (elements[i].type == "text") {
             elements[i].value = "";
        }
    }

    var element = document.getElementsByClassName("inner");
    for (var i=0; i < element.length; i++) {
        if (element[i].type == "number") {
             element[i].value = "";
        }
    }
}

