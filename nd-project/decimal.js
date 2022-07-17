var $ = function( id ) { return document.getElementById( id ); };
const float = $('float');
const form = $('form');
const error = $('error');
const regex = /^\d{1,}(\.\d{4,})$/;




form.addEventListener('submit', (e) => {
    const float = $('float').value;
    const isValid = float.match(regex);

    if(isValid === null){
        error.innerText = "Please enter valid number.\n Ex: 12.1234";
        $('float').value = "";
        $('textarea').value = "";
        e.preventDefault();
    } else {
        error.innerText = "";
        var round = parseFloat(Math.round(float)).toLocaleString();
        var squared = parseFloat(Math.round(Math.sqrt(float))).toLocaleString();

        $('textarea').value = `You entered: ${parseFloat(float).toLocaleString()} \n` + `If we round that number to the nearest integer, the result is: ${round} \n` + `If we round the square root of that number, the result is: ${squared} \n` + `If we round that number to the nearest tenth, the result is: ${parseFloat(float).toLocaleString(undefined, {maximumFractionDigits:1})} \n` + `If we round that number to the nearest hundreth, the result is: ${parseFloat(float).toLocaleString(undefined, {maximumFractionDigits:2})} \n` + `If we round that number to the nearest thousanth, the result is: ${parseFloat(float).toLocaleString(undefined, {maximumFractionDigits:3})}`
    }


  
})