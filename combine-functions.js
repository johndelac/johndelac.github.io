$(document).on('click', "#submit", function () {
    var first = parseFloat(document.getElementById("first-entry").value)
    var second = parseFloat(document.getElementById("second-entry").value)
    var third = parseFloat(document.getElementById("third-entry").value)
 
    if (isNaN(first)){
        alert("Please enter a valid number")
        document.getElementById("first-entry").value = "";
    } else if (isNaN(second)){
        alert("Please enter a valid number")
        document.getElementById("second-entry").value = "";
    } else if (isNaN(third)){
        alert("Please enter a valid number")
        document.getElementById("third-entry").value = "";
    } else {
        document.getElementById("sum").innerHTML = first + second + third;
        document.getElementById("product").innerHTML = first * second * third;
        document.getElementById("average").innerHTML = (first + second + third) / 3;
        document.getElementById("largest").innerHTML = Math.max(first, second, third);
        document.getElementById("smallest").innerHTML = Math.min(first, second, third);
    }
});


$(document).on('click', "#reset", function () {
  document.getElementById("first-entry").value = "";
  document.getElementById("second-entry").value = "";
  document.getElementById("third-entry").value = "";

  document.getElementById("sum").value = "";
  document.getElementById("product").value = "";
  document.getElementById("average").value = "";
  document.getElementById("largest").value = "";
  document.getElementById("smallest").value = "";

});
