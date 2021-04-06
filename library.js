



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

    let form = document.getElementById('form');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    let  btn = document.getElementsByClassName('solid btn');
    btn.addEventListener('submit',()=>{
        if(fname.value==="" && lname===""){
            console.log('name is entered');

        }
        if(email.value===""){
            console.log('email is entered');
            
        }
        else(email.value===null)
        { 
            alert('incorrect email id');

        }
        if(password.length<=8){
        conosle.log('password is entered');
        }
        if(password.length>=8){
            alert('incorrect password');
        }

   
    
    
    let form = document.getElementById('form');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    let  btn = document.getElementsByClassName('solid btn');
    btn.addEventListener('submit',()=>{
        if(fname.value==="" && lname===""){
            console.log('name is entered');

        }
        if(email.value===""){
            console.log('email is entered');
            
        }
        else(email.value===null)
        { 
            alert('incorrect email id');

        }
        if(password.length<=8){
        conosle.log('password is entered');
        }
        if(password.length>=8){
            alert('incorrect password');
        }

    let form = document.getElementById('form');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    let  btn = document.getElementsByClassName('solid btn');
    btn.addEventListener('submit',()=>{
        if(fname.value==="" && lname===""){
            console.log('name is entered');

        }
        if(email.value===""){
            console.log('email is entered');
            
        }
        else(email.value===null)
        { 
            alert('incorrect email id');

        }
        if(password.length<=8){
        conosle.log('password is entered');
        }
        if(password.length>=8){
            alert('incorrect password');
        }

    
    

});
         var users = [

{
    username: 'Rohini Munnangi',
    password : 'Rohini123'
},
  {
    username: 'Nandini Munnangi',
    password : 'nandu087'
  },
 
 { 
      username: 'Kiran reddy',
    password : 'kiran1995'
 }

]
var admin=[
    {
        username: 'Rohini',
        password : 'Chandu1997'
    }
]

var username = document.getElementById('username');
var form = document.getElementById('form');
var passwordInput = document.getElementById('password-field');

function submit(){
    for(i=0;i<users.length;i++)
    if (username.value==="users[i].username" && passwordInput.value==="users[i].password")
    {
        console.log("user" +  users[i].username + 'has login.');
        href.location="https://www.mcneese.edu/";
    } 
    else(username.value==="admin[i].username" && passwordInput.value==="admin[i].password")
    
    {
        console.log('admin login success');
        href.location="www.facebook.com";

    }
}

function viewPassword()
{
  var passwordInput = document.getElementById('password-field');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type =='password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye-slash';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye';
  }
}

    function register()
    {
    location.href="file:///C:/Users/Rohinimunnangi/Desktop/HTML%20AND%20CSS/libraryRegister.html";
    }


});
