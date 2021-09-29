function verify(input){
    if (input > 100 || input < 0){
        return true;
    }
}

function clicked(){
    var hwAvg = document.forms["myForm"].elements["hwAvg"].value;
    hwAvg = parseFloat(hwAvg);
    var midEx = document.forms["myForm"].elements["midEx"].value;
    midEx = parseFloat(midEx);
    var final = document.forms["myForm"].elements["final"].value;
    final = parseFloat(final);
    var participation = document.forms["myForm"].elements["participation"].value;
    participation = parseFloat(participation);
 
    if (isNaN(hwAvg) || verify(hwAvg) || !Number.isInteger(hwAvg)){
        document.forms["results"].elements["result"].value =  "Please enter a valid number for the Homework Average!";
        document.forms["myForm"].elements["hwAvg"].value = ""
    } else if (isNaN(midEx) || verify(midEx) || !Number.isInteger(midEx)){
        document.forms["results"].elements["result"].value =  "Please enter a valid number for the Midterm Exam Score!";
        document.forms["myForm"].elements["midEx"].value = ""
    } else if (isNaN(final) || verify(final) || !Number.isInteger(final)){
        document.forms["results"].elements["result"].value =  "Please enter a valid number for the Final Exam Score!";
        document.forms["myForm"].elements["final"].value = ""
    } else if (isNaN(participation) || verify(participation) || !Number.isInteger(participation)){
        document.forms["results"].elements["result"].value =  "Please enter a valid number for the Participation Score!";
        document.forms["myForm"].elements["participation"].value = ""
    } else {
        var finalAvg = (.5 * hwAvg) + (.2 * midEx) + (.2 * final) + (.1 * participation);
        document.forms["results"].elements["result"].style="color:black; font-size:20px";
        if (finalAvg >= 90){
            document.forms["results"].elements["result"].value = `With a final grade of ${Math.round(finalAvg)} student will be recieving an A`;
        } else if (finalAvg >= 80) {
            document.forms["results"].elements["result"].value = `With a final grade of ${Math.round(finalAvg)} student will be recieving a B`;
        } else if (finalAvg >= 70) {
            document.forms["results"].elements["result"].value = `With a final grade of ${Math.round(finalAvg)} student will be recieving a C`;
        } else if (finalAvg >= 60) {
            document.forms["results"].elements["result"].value = `With a final grade of ${Math.round(finalAvg)} student will be recieving a D. Student must retake the course.`;
        }else if (finalAvg <= 59) {
            document.forms["results"].elements["result"].value = `With a final grade of ${Math.round(finalAvg)} student will be recieving a F. Student must retake the course.`;
        }
    }
}



   
