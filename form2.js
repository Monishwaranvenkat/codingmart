var error;
var name_regx="^[a-b A-z]{2,35}$";
var email_regx="^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";
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

