 var error=false;
function validate(){
   if($("#fname").val()=="")
   {
       document.getElementById("fname-warn").innerHTML='<p class="text-danger">please fill the first name</p>';
        error=true
        
    }
    if($("#cnf-fname").val()=="")
   {
       document.getElementById("cnf-fname-warn").innerHTML='<p class="text-danger">Firstname did not match</p>';
       error=true
    }
    if($("#mname").val()==""){
        document.getElementById("mname-warn").innerHTML='<p class="text-danger">please fill the middle name</p>';
        error=true
    }
   if($('#cnf-mname').val()=="")
   {
        document.getElementById("cnf-mname-warn").innerHTML='<p class="text-danger">Middle name did not match</p>';
        error=true
   }
   if($('#lname').val()=="")
   {
        document.getElementById("lname-warn").innerHTML='<p class="text-danger">please fill the last name</p>';
        error=true
   }
   if($('#cnf-lname').val()=="")
   {
        document.getElementById("cnf-lname-warn").innerHTML='<p class="text-danger">last name did not match</p>';
        error=true
   }
   if($('#mobile').val()=="")
   {
        document.getElementById("mobile-warn").innerHTML='<p class="text-danger">Enter valid pnone no</p>';
        error=true
   }
   if($('#cnf-mobile').val()=="")
   {
        document.getElementById("cnf-mobile-warn").innerHTML='<p class="text-danger">Phone No did not match</p>';
        error=true
   }
   if($('#email').val()=="" || $('#domain').val()=='domain')
   {
       
        document.getElementById("email-warn").innerHTML='<p class="text-danger">Enter the valid email id</p>';
        error=true
   }
   if($('#cnf-email').val()=="")
   {
        document.getElementById("cnf-email-warn").innerHTML='<p class="text-danger">Email No did not match</p>';
        error=true
   }
   if(!checkcap()){
       error=true
   }
   
   if (!error){
       alert("registered successfully")
       
       location.reload()
   }else{
       check();
   }
  
}
//captha function
 var randomstring = '';
      function check(){
          var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 10;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.getElementById("cap").innerHTML=randomstring;
      }
      function checkcap()
      {
          v1=document.getElementById("cap").innerHTML
          v2=document.getElementById("capthcha").value
        if(v1==v2)
        {
            return true
        }else{
            check();
             return false
             
        }
      }
//validation
var name="";
var name_regx="^[a-b A-z]{2,35}$"
var lname_regx="^[a-b A-z]{1,35}$"
$(document).ready(function(){
    $("#fname").on('keypress keydown keyup',function(){
        if (!$(this).val().match(name_regx)){
            document.getElementById("fname-warn").innerHTML='<p class="text-danger">Enter The Valid Name</p>';
            error=true
        }else{
            document.getElementById("fname-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
            
        }
    });
    $("#cnf-fname").on('keypress keydown keyup',function(){
        fname=document.getElementById("fname").value;
        if ($(this).val()!=fname){
            document.getElementById("cnf-fname-warn").innerHTML='<p class="text-danger">First name did not match</p>';
        }else{
            document.getElementById("cnf-fname-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
    });
    $("#mname").on('keypress keydown keyup',function(){
        if (!$(this).val().match(name_regx)){
            document.getElementById("mname-warn").innerHTML='<p class="text-danger">Enter The Valid Name</p>';
            error=true
        }else{
            document.getElementById("mname-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
    });
    $("#cnf-mname").on('keypress keydown keyup',function(){
        lname=document.getElementById("mname").value;
        if ($(this).val()!=lname){
            document.getElementById("cnf-mname-warn").innerHTML='<p class="text-danger">Middle name did not match</p>';
            error=true
        }else{
            document.getElementById("cnf-mname-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
    });
    $("#lname").on('keypress keydown keyup',function(){
        if (!$(this).val().match(lname_regx) || $(this).val()=="" ){
            document.getElementById("lname-warn").innerHTML='<p class="text-danger">Enter The Valid Name</p>';
            error=true
        }else{
            document.getElementById("lname-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
    });
    $("#cnf-lname").on('keypress keydown keyup',function(){
        lname=document.getElementById("lname").value;
        if ($(this).val()!=lname || $(this).val()=="" ){
            document.getElementById("cnf-lname-warn").innerHTML='<p class="text-danger">Last name did not match</p>';
            error=true
        }else{
            document.getElementById("cnf-lname-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
    });
    //name
    function name(){
    document.getElementById("name").value=fname+mname+lname;
    }
    //mobile
   var phone_regex="^[6-9][0-9]{9}$"
   $("#mobile").on('keypress keyup keydown',function(){
       if(!$(this).val().match(phone_regex)){
            document.getElementById("mobile-warn").innerHTML='<p class="text-danger">Enter valid pnone no</p>';
            error=true
        }else{
            document.getElementById("mobile-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
   });
   $("#cnf-mobile").on('keypress keyup keydown',function(){
       if($(this).val()!=$("#mobile").val()){
            document.getElementById("cnf-mobile-warn").innerHTML='<p class="text-danger">Pnone no did not match</p>';
            error=true
        }else{
            document.getElementById("cnf-mobile-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
   });
   $("#alt-no").on('keypress keyup keydown',function(){
       if(!$(this).val().match(phone_regex)){
            document.getElementById("altno-warn").innerHTML='<p class="text-danger">Enter valid pnone no</p>';
            error=true
        }else{
            document.getElementById("altno-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
   });
   //email
   var email_regex='^[a-z0-9._-]{1,60}$'
   $("#email").on('keypress keyup keydown',function(){
       if(!$(this).val().match(email_regex)){
            document.getElementById("email-warn").innerHTML='<p class="text-danger">Enter valid email</p>';
            error=true
        }else{
            document.getElementById("email-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
   });
   $("#cnf-email").on('keypress keyup keydown',function(){
       email=$("#email").val()+'@'+$("#domain").val()
       if($(this).val()!=email){
            document.getElementById("cnf-email-warn").innerHTML='<p class="text-danger">Email did not match</p>';
            error=true
        }else{
            document.getElementById("cnf-email-warn").innerHTML='<p class="text-success"> Valid </p>';
            error=false
        }
   });
});