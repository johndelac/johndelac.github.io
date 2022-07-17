const $ = function(id) { return document.getElementById(id); };

function count(){
    var counter = 0;
    var input = $('input');
    var searchingFor = $('search')
    var output = $('output');

    searchingFor = searchingFor.value.toLowerCase().charAt(0);
    localStorage.setItem('searchingFor', searchingFor);
    input = input.value.toLowerCase();

    for(var i = 0; i < input.length; i++){
        if(input.charAt(i) === searchingFor){
            counter++
        }

    }

    if(counter === 0){
        var myWindow = window.open("error.html", "marian","width=300,height=100,top=1,left=300");
        location.reload();
    } else {
        output.value = `${counter} occurence(s) of ${searchingFor} found`;
    }
}