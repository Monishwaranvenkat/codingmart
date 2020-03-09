var error;
var name_regx="^[a-b A-z]{2,35}$";
var email_regx="^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";
var user_regx="^(?!\\d+$)\\w{8,20}$"
var pass_regx="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
function validate(){
    if (vfname())
    {
        return false
    }
    if(vlname()){
        return false
    }if(vemail()){
        return false
    }
    if(vuserid())
    {
        return false
    }
    if(vpass()){
        return false
    }
    if(vcnfpass()){
        return false
    }
    $( "form" ).submit();
    alert("Registeration Success");
}
function vfname(){
    if ($("#fname").val()==""|| !$("#fname").val().match(name_regx))
    {
        document.getElementById("fname").style.borderColor="red";
        document.getElementById("fname-warn").innerText="Enter the valid name";
        return true;
        
    }else{
        document.getElementById("fname").style.borderColor="green";
        document.getElementById("fname-warn").innerText="valid";
        return false;
    }
}
function vlname(){
    if ($("#lname").val()==""|| !$("#lname").val().match(name_regx))
    {
        document.getElementById("lname").style.borderColor="red";
        document.getElementById("lname-warn").innerText="Enter the valid last name";
        return true;
        
    }else{
        document.getElementById("lname").style.borderColor="green";
        document.getElementById("lname-warn").innerText="valid";
        return false;
    }
}
function vuserid(){
    if ($("#userid").val()==""|| !$("#userid").val().match(user_regx))
    {
        document.getElementById("userid").style.borderColor="red";
        document.getElementById("userid-warn").innerText="Enter the valid user id";
        return true;
        
    }else{
        document.getElementById("userid").style.borderColor="green";
        document.getElementById("userid").innerText="valid";
        return false;
    }
}
function vemail(){
    if ($("#email").val()==""|| !$("#email").val().match(email_regx))
    {
        document.getElementById("email").style.borderColor="red";
        document.getElementById("email-warn").innerText="Enter the valid email";
        return true;
        
    }else{
        document.getElementById("email").style.borderColor="green";
        document.getElementById("email-warn").innerText="valid";
        return false;
    }
}
function vpass(){
    if ($("#pass").val()==""|| !$("#pass").val().match(pass_regx))
    {
        document.getElementById("pass").style.borderColor="red";
        document.getElementById("pass-warn").innerText="Enter the valid password";
        return true;
        
    }else{
        document.getElementById("pass").style.borderColor="green";
        document.getElementById("pass-warn").innerText="valid";
        return false;
    }
}
function vcnfpass(){
    if ($("#cnf-pass").val()=="" || $("#pass").val()!= $("#cnf-pass").val() || !$("#cnf-pass").val().match(pass_regx))
    {
        document.getElementById("cnf-pass").style.borderColor="red";
        document.getElementById("cnf-pass-warn").innerText="Password did not match";
        return true;
        
    }else{
        document.getElementById("cnf-pass").style.borderColor="green";
        document.getElementById("cnf-pass-warn").innerText="valid";
        return false;
    }
}


