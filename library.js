



    var acc = document.getElementsByClassName("accordion");
    var i ;
    for (i= 0; i< acc.length; i++){
        acc[i].addEventListener('click',function(){
            this.classList.toggle("active");
            var panel = this.NextElementSibling;
            
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
         
            }
        });
}
    ///book class to reperesent a book 
// search filter 


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (!(a.innerHTML.toUpperCase().indexOf(filter) > -1) && filter=="")
        {
            li[i].style.display = "none";
        }else
        {
            li[i].style.display = "block";
        }
    }
}

