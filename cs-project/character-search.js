const $ = function(id) { return document.getElementById(id); };

function textOnly(input){
    var regex = /^[$&+,:;=?@#/"_|'<>.^*(){}%!-]/g;
    input.value = input.value.replace(regex, "");
}

function count(){
    var counter = 0;
    var input = $('input');
    var searchingFor = $('search')
    var output = $('output');
    var str = input.value;

    str = str.replace(/[^a-zA-Z ]/g, "");
    str = str.toLowerCase();
    searchingFor = searchingFor.value.toLowerCase();
    var array = str.split(" ");

    for(var i = 0; i < array.length; i++){
        if(array[i] === searchingFor){
            counter++
        }

    }
        output.value = `${counter} occurence(s) of ${searchingFor} found`;
}