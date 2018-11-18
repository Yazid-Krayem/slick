var all = document.getElementById("all");
var category1 = document.getElementById("category1");
var category2 = document.getElementById("category2");
var category3 = document.getElementById("category3");
var category4 = document.getElementById("category4");
var allC = document.getElementById("all-c");
var c1 = document.getElementById("c-1");
var c2 = document.getElementById("c-2");
var c3 = document.getElementById("c-3");
var c4 = document.getElementById("c-4");
// on load do this function
    function AllOn(){
        c1.style.visibility = 'hidden';
        c2.style.visibility = 'hidden';
        c3.style.visibility = 'hidden';
        c4.style.visibility = 'hidden';
        allC.style.visibility= 'visible';
    }
//function for show to all categroy
all.addEventListener("click",AllOn());
///////////////////////////////////////////
//function for show the categroy1
category1.addEventListener("click",function(){
    c1.style.visibility = 'visible';
    c2.style.visibility = 'hidden';
    c3.style.visibility = 'hidden';
    c4.style.visibility = 'hidden';
    allC.style.visibility= 'hidden';
})
///////////////////////////////////////////
//function for show the categroy2
category2.addEventListener("click",function(){
    c1.style.visibility = 'hidden';
    c2.style.visibility = 'visible';
    c3.style.visibility = 'hidden';
    c4.style.visibility = 'hidden';
    allC.style.visibility= 'hidden';
})
///////////////////////////////////////////
//function for show the categroy3
category3.addEventListener("click",function(){
    c1.style.visibility = 'hidden';
    c2.style.visibility = 'hidden';
    c3.style.visibility = 'visible';
    c4.style.visibility = 'hidden';
    allC.style.visibility= 'hidden';
})
///////////////////////////////////////////
//function for show the categroy4
category4.addEventListener("click",function(){
    c1.style.visibility = 'hidden';
    c2.style.visibility = 'hidden';
    c3.style.visibility = 'hidden';
    c4.style.visibility = 'visible';
    allC.style.visibility= 'hidden';
})