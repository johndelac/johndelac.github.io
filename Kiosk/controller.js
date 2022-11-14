// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
var slideIndex = 1;
var slides = null;
function showSlides(n) {
    if (n > slides.length){
      slideIndex = 1
    }
  
    if (n < 1){
      slideIndex = slides.length
    }
  
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.visibility = "hidden";
    }
    slides[slideIndex-1].style.visibility = "visible";
}

function quickTicket(){
    document.getElementById('ticket-skip').style.visibility="visible";
    document.getElementById('zukey-skip').style.visibility="hidden";
    document.getElementById('laptop-skip').style.visibility="hidden";
    document.getElementById('printer-skip').style.visibility="hidden";
    document.getElementById('scanner-skip').style.visibility="hidden";
    document.getElementById('mobile-skip').style.visibility="hidden";
    document.getElementById('prev').style.visibility="visible";
    document.getElementById('next').style.visibility="visible";

    slides = document.getElementsByClassName("ticket-popup");

    var zukey = document.getElementsByClassName('zukey-popup')
    for(var i = 0; i < zukey.length; i++){
        zukey[i].style.visibility = 'hidden';
    }

    var laptop = document.getElementsByClassName('laptop-popup')
    for(var i = 0; i < laptop.length; i++){
        laptop[i].style.visibility = 'hidden';
    }

    var printer = document.getElementsByClassName('printer-popup')
    for(var i = 0; i < printer.length; i++){
        printer[i].style.visibility = 'hidden';
    }

    var scanner = document.getElementsByClassName('scanner-popup')
    for(var i = 0; i < scanner.length; i++){
        scanner[i].style.visibility = 'hidden';
    }

    var mobile = document.getElementsByClassName('mobile-popup')
    for(var i = 0; i < mobile.length; i++){
        mobile[i].style.visibility = 'hidden';
    }

    slideIndex = 1
    showSlides(slideIndex);
}

function zukey(){
    document.getElementById('zukey-skip').style.visibility="visible";
    document.getElementById('ticket-skip').style.visibility="hidden";
    document.getElementById('laptop-skip').style.visibility="hidden";
    document.getElementById('printer-skip').style.visibility="hidden";
    document.getElementById('scanner-skip').style.visibility="hidden";
    document.getElementById('mobile-skip').style.visibility="hidden";
    document.getElementById('prev').style.visibility="visible";
    document.getElementById('next').style.visibility="visible";

    slides = document.getElementsByClassName("zukey-popup");

    var ticket = document.getElementsByClassName('ticket-popup')
    for(var i = 0; i < ticket.length; i++){
        ticket[i].style.visibility = 'hidden';
    }

    var laptop = document.getElementsByClassName('laptop-popup')
    for(var i = 0; i < laptop.length; i++){
        laptop[i].style.visibility = 'hidden';
    }

    var printer = document.getElementsByClassName('printer-popup')
    for(var i = 0; i < printer.length; i++){
        printer[i].style.visibility = 'hidden';
    }

    var scanner = document.getElementsByClassName('scanner-popup')
    for(var i = 0; i < scanner.length; i++){
        scanner[i].style.visibility = 'hidden';
    }

    var mobile = document.getElementsByClassName('mobile-popup')
    for(var i = 0; i < mobile.length; i++){
        mobile[i].style.visibility = 'hidden';
    }


    slideIndex = 1
    showSlides(slideIndex);
}

function laptop(){
    document.getElementById('laptop-skip').style.visibility="visible";
    document.getElementById('ticket-skip').style.visibility="hidden";
    document.getElementById('zukey-skip').style.visibility="hidden";
    document.getElementById('printer-skip').style.visibility="hidden";
    document.getElementById('scanner-skip').style.visibility="hidden";
    document.getElementById('mobile-skip').style.visibility="hidden";
    document.getElementById('prev').style.visibility="visible";
    document.getElementById('next').style.visibility="visible";

    slides = document.getElementsByClassName("laptop-popup");

    var ticket = document.getElementsByClassName('ticket-popup')
    for(var i = 0; i < ticket.length; i++){
        ticket[i].style.visibility = 'hidden';
    }

    var zukey = document.getElementsByClassName('zukey-popup')
    for(var i = 0; i < zukey.length; i++){
        zukey[i].style.visibility = 'hidden';
    }

    var printer = document.getElementsByClassName('printer-popup')
    for(var i = 0; i < printer.length; i++){
        printer[i].style.visibility = 'hidden';
    }

    var scanner = document.getElementsByClassName('scanner-popup')
    for(var i = 0; i < scanner.length; i++){
        scanner[i].style.visibility = 'hidden';
    }
    
    var mobile = document.getElementsByClassName('mobile-popup')
        for(var i = 0; i < mobile.length; i++){
            mobile[i].style.visibility = 'hidden';
        }

    slideIndex = 1
    showSlides(slideIndex);   
}

function printer(){
    document.getElementById('printer-skip').style.visibility="visible";
    document.getElementById('ticket-skip').style.visibility="hidden";
    document.getElementById('zukey-skip').style.visibility="hidden";
    document.getElementById('laptop-skip').style.visibility="hidden";
    document.getElementById('scanner-skip').style.visibility="hidden";
    document.getElementById('mobile-skip').style.visibility="hidden";
    document.getElementById('prev').style.visibility="visible";
    document.getElementById('next').style.visibility="visible";

    slides = document.getElementsByClassName("printer-popup");

    var ticket = document.getElementsByClassName('ticket-popup')
    for(var i = 0; i < ticket.length; i++){
        ticket[i].style.visibility = 'hidden';
    }

    var zukey = document.getElementsByClassName('zukey-popup')
    for(var i = 0; i < zukey.length; i++){
        zukey[i].style.visibility = 'hidden';
    }

    var laptop = document.getElementsByClassName('laptop-popup')
    for(var i = 0; i < laptop.length; i++){
        laptop[i].style.visibility = 'hidden';
    }

    var scanner = document.getElementsByClassName('scanner-popup')
    for(var i = 0; i < scanner.length; i++){
        scanner[i].style.visibility = 'hidden';
    }
    
    var mobile = document.getElementsByClassName('mobile-popup')
        for(var i = 0; i < mobile.length; i++){
            mobile[i].style.visibility = 'hidden';
    }

    slideIndex = 1
    showSlides(slideIndex);
}

function scanner(){
    document.getElementById('scanner-skip').style.visibility="visible";
    document.getElementById('ticket-skip').style.visibility="hidden";
    document.getElementById('zukey-skip').style.visibility="hidden";
    document.getElementById('laptop-skip').style.visibility="hidden";
    document.getElementById('printer-skip').style.visibility="hidden";
    document.getElementById('prev').style.visibility="visible";
    document.getElementById('next').style.visibility="visible";

    slides = document.getElementsByClassName("scanner-popup");

    var ticket = document.getElementsByClassName('ticket-popup')
    for(var i = 0; i < ticket.length; i++){
        ticket[i].style.visibility = 'hidden';
    }

    var zukey = document.getElementsByClassName('zukey-popup')
    for(var i = 0; i < zukey.length; i++){
        zukey[i].style.visibility = 'hidden';
    }

    var laptop = document.getElementsByClassName('laptop-popup')
    for(var i = 0; i < laptop.length; i++){
        laptop[i].style.visibility = 'hidden';
    }

    var printer = document.getElementsByClassName('printer-popup')
    for(var i = 0; i < printer.length; i++){
        printer[i].style.visibility = 'hidden';
    }

    var mobile = document.getElementsByClassName('mobile-popup')
        for(var i = 0; i < mobile.length; i++){
            mobile[i].style.visibility = 'hidden';
    }

    slideIndex = 1
    showSlides(slideIndex);
}

function mobileCart(){
    document.getElementById('mobile-skip').style.visibility="visible";
    document.getElementById('ticket-skip').style.visibility="hidden";
    document.getElementById('zukey-skip').style.visibility="hidden";
    document.getElementById('laptop-skip').style.visibility="hidden";
    document.getElementById('printer-skip').style.visibility="hidden";
    document.getElementById('scanner-skip').style.visibility="hidden";
    document.getElementById('prev').style.visibility="visible";
    document.getElementById('next').style.visibility="visible";

    slides = document.getElementsByClassName("mobile-popup");

    var ticket = document.getElementsByClassName('ticket-popup')
    for(var i = 0; i < ticket.length; i++){
        ticket[i].style.visibility = 'hidden';
    }

    var zukey = document.getElementsByClassName('zukey-popup')
    for(var i = 0; i < zukey.length; i++){
        zukey[i].style.visibility = 'hidden';
    }

    var laptop = document.getElementsByClassName('laptop-popup')
    for(var i = 0; i < laptop.length; i++){
        laptop[i].style.visibility = 'hidden';
    }

    var printer = document.getElementsByClassName('printer-popup')
    for(var i = 0; i < printer.length; i++){
        printer[i].style.visibility = 'hidden';
    }

    var scanner = document.getElementsByClassName('scanner-popup')
    for(var i = 0; i < scanner.length; i++){
        scanner[i].style.visibility = 'hidden';
    }

    slideIndex = 1
    showSlides(slideIndex);
}

$('html').click(function(e) {   
    if( !$(e.target).hasClass('dead') )
    {
        document.getElementById('popups').style.visibility="hidden";
        var popup = document.getElementsByClassName('popup')
        for (var i = 0; i < popup.length; i++){
            popup[i].style.visibility="hidden";
        }
    }
});    

$('html').click(function(e) {   
    if( !$(e.target).hasClass('dead') )
    {
        document.getElementById('popups').style.visibility="hidden";
        var skip = document.getElementsByClassName('control')
        for (var i = 0; i < skip.length; i++){
            skip[i].style.visibility="hidden";
        }
    }
}); 

function links(f){
    if (f == 1){
        window.open("https://river.amazon.com/SCK4/workflows?buildingType=fc&q0=7b9a7b73-4e72-4618-9468-fffa41143ced&q1=5c52ad64-02db-4375-af54-58c956eb4e7b&id=5c52ad64-02db-4375-af54-58c956eb4e7b");
    }

    if (f == 2){
        window.open("https://river.amazon.com/SCK4/workflows?buildingType=fc&q0=7b9a7b73-4e72-4618-9468-fffa41143ced&q1=e890e8fd-5293-491a-88b9-46975c5194da&q2=12a34797-6d3f-442e-9046-b82529943ba9&q3=c900decc-385a-4a85-9eb3-973a2258bd17&id=c900decc-385a-4a85-9eb3-973a2258bd17");
    }

    if (f == 3){
        window.open("https://river.amazon.com/SCK4/workflows?buildingType=fc&q0=7b9a7b73-4e72-4618-9468-fffa41143ced&q1=5f158d98-b9ef-4040-9964-d127d5fa93d0&q2=07cb7205-722a-4ada-b80f-8adf16db3280&q3=6a647e86-c646-4639-b271-98adb870fb7a&id=6a647e86-c646-4639-b271-98adb870fb7a");
    }

    if (f == 4){
        window.open("https://river.amazon.com/SCK4/workflows?buildingType=fc&q0=7b9a7b73-4e72-4618-9468-fffa41143ced&q1=5f158d98-b9ef-4040-9964-d127d5fa93d0&q2=a7378c7b-5fd0-4fe2-af23-0d1cec1ec3df&q3=7004248d-8527-41cc-b2c5-f2871746e7dd&id=7004248d-8527-41cc-b2c5-f2871746e7dd");
    }

    if (f == 5){
        window.open("https://river.amazon.com/SCK4/workflows?buildingType=fc&q0=7b9a7b73-4e72-4618-9468-fffa41143ced&q1=2a4d148b-d120-49a1-a960-e8626e4f1530&q2=8171e283-1a22-430e-9805-89785b029ebd&id=8171e283-1a22-430e-9805-89785b029ebd");
    }

    if (f == 6){
        window.open("https://river.amazon.com/SCK4/workflows?buildingType=fc&q0=7b9a7b73-4e72-4618-9468-fffa41143ced&q1=5f158d98-b9ef-4040-9964-d127d5fa93d0&q2=7b28f56d-d708-40b3-bf7b-5ba7722077ea&id=7b28f56d-d708-40b3-bf7b-5ba7722077ea");
    }
}

const element6 = document.getElementById('mobile-skip');
element6.addEventListener("click", function(){
    links(6);
});

const element1 = document.getElementById('ticket-skip');
element1.addEventListener("click", function(){
    links(1);
});

const element2 = document.getElementById('zukey-skip');
element2.addEventListener("click", function(){
    links(2);
});

const element3 = document.getElementById('laptop-skip');
element3.addEventListener("click", function(){
    links(3);
});

const element4 = document.getElementById('printer-skip');
element4.addEventListener("click", function(){
    links(4);
});

const element5 = document.getElementById('scanner-skip');
element5.addEventListener("click", function(){
    links(5);
});



function fly(){
    var marquee = document.getElementById("myMarquee")

    marquee.innerHTML = 
    (
    `
    <marquee loop="1" direction="left" scrollamount="75" id="marquee">          
        <img src="./images/super-bezos.png" alt="GeeksforGeeks logo"> 
    </marquee> 
    `
    );
    
    document.getElementById("main").style.margin = 0;

    remove();
}

function remove(){
    setTimeout(
        function(){
            var marquee = document.getElementById("myMarquee")
            marquee.innerHTML = "";
            document.getElementById("main").style.margin = "2% 7%";
        }, 2275);
}




