let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

function valid(elementid,label,div){
    var result = document.getElementById(elementid).value;
    var div = document.getElementById(div);
    if(result===""){
        
       div.innerHTML= label+" is required...";
       document.getElementById(elementid).focus();
       div.style.color ="red";
        
       return false;
    }
    else{
        div.innerHTML= "";
        
    }
    return true;

    }
    
    function validation(){
    var result = valid("username","Username","user_error") && valid("password","Password","pass_error");
    if(result){
        document.cookie="status=user";
        window.location.href="index.html";
    }
    return false;
    }
    
    function admin(){
        var result = valid("username","Username","user_error") && valid("password","Password","pass_error");
        if(result){
            document.cookie="status=admin";
            window.location.href="index.html";
            
        }
        return false;
        }
    function validregis(){
        var result = valid("username1","Username","user1_error")
         && valid("email1","Email","email_error")
         && valid("pass1","Password","pass1_error");
        if(result){
            Swal.fire(
                'REGISTERED successfully...',
                'Now you can Login',
                'success'
              );
          
			toggle();
        }
        return false;
        }




