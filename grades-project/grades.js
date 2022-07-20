function clearData() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = '');
    document.getElementById('result').innerHTML = "";
}

function addRow() {

    var row = document.createElement('tr');
    row.innerHTML = '<td><input type="text" id="assignments"></td> <td><input type="text" class= "grade"></td> <td><input type="text" class="weight"></td>';

    var table = document.getElementById('the-table');
    table.appendChild(row);
}

function splitIntoChunk(arr, chunk) {

    var newArray = [];

    for (i = 0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        newArray.push(tempArray);
    }

    return newArray;

}

function getSum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function computeGrade() {
    var array = []
    var grades = document.getElementsByClassName("grade");
    var weights = document.getElementsByClassName("weight");
    var totalWeight = 0;

    for (let i = 0; i < grades.length; i++) {
        array.push(parseFloat(grades[i].value));
        array.push(parseFloat(weights[i].value));

        if(isNaN(parseFloat(weights[i].value))){
            weights[i] === 0;
        } else {
          totalWeight += parseFloat(weights[i].value);
        }
    }

    var pairedArray = (splitIntoChunk(array, 2));
    var multipliedArray = [];

    for (let i = 0; i < pairedArray.length; i++) {
        for (let n = 0; n < pairedArray[i].length; n += 2) {

            if (isNaN(pairedArray[i][n])) {
                pairedArray[i][n] === 0;
            } else {
                let multiply = pairedArray[i][n] * pairedArray[i][n + 1];
                multipliedArray.push(multiply);
            }

        }
    }

    let final = getSum(multipliedArray) / totalWeight;

    if (isNaN(final) || final < 1) {
        document.getElementById('result').innerHTML = "Please check your inputs.";
    } else {
        document.getElementById('result').innerHTML = `${final.toFixed(2)}%`;
    }

}

