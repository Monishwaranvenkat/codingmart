function test(){
    return "submit()";
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
            alert(" login succces full");
        }else{
             alert(" error");
             check();
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
        }else{
            document.getElementById("fname-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
    });
    $("#cnf-fname").on('keypress keydown keyup',function(){
        fname=document.getElementById("fname").value;
        if ($(this).val()!=fname){
            document.getElementById("cnf-fname-warn").innerHTML='<p class="text-danger">First name did not match</p>';
        }else{
            document.getElementById("cnf-fname-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
    });
    $("#mname").on('keypress keydown keyup',function(){
        if (!$(this).val().match(name_regx)){
            document.getElementById("mname-warn").innerHTML='<p class="text-danger">Enter The Valid Name</p>';
        }else{
            document.getElementById("mname-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
    });
    $("#cnf-mname").on('keypress keydown keyup',function(){
        lname=document.getElementById("mname").value;
        if ($(this).val()!=lname){
            document.getElementById("cnf-mname-warn").innerHTML='<p class="text-danger">Middle name did not match</p>';
        }else{
            document.getElementById("cnf-mname-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
    });
    $("#lname").on('keypress keydown keyup',function(){
        if (!$(this).val().match(lname_regx)){
            document.getElementById("lname-warn").innerHTML='<p class="text-danger">Enter The Valid Name</p>';
        }else{
            document.getElementById("lname-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
    });
    $("#cnf-lname").on('keypress keydown keyup',function(){
        lname=document.getElementById("lname").value;
        if ($(this).val()!=lname){
            document.getElementById("cnf-lname-warn").innerHTML='<p class="text-danger">Last name did not match</p>';
        }else{
            document.getElementById("cnf-lname-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
    });
    //name
    setInterval

    //mobile
   var phone_regex="^[6-9][0-9]{9}$"
   $("#mobile").on('keypress keyup keydown',function(){
       if(!$(this).val().match(phone_regex)){
            document.getElementById("mobile-warn").innerHTML='<p class="text-danger">Enter valid pnone no</p>';
        }else{
            document.getElementById("mobile-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
   });
   $("#cnf-mobile").on('keypress keyup keydown',function(){
       if($(this).val()!=$("#mobile").val()){
            document.getElementById("cnf-mobile-warn").innerHTML='<p class="text-danger">Pnone no did not match</p>';
        }else{
            document.getElementById("cnf-mobile-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
   });
   $("#alt-no").on('keypress keyup keydown',function(){
       if(!$(this).val().match(phone_regex)){
            document.getElementById("altno-warn").innerHTML='<p class="text-danger">Enter valid pnone no</p>';
        }else{
            document.getElementById("altno-warn").innerHTML='<p class="text-success"> Valid </p>';
        }
   });
});