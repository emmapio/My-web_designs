function welcome(){
    let username=document.getElementById("username" ).value;
    let txtpassword=document.getElementById("txtpassword").value;
    if((username=="emma")&& (txtpassword=="emma")){
        window.open("frontend2course.html")
    
        /*window.open("https://mail.google.com/mail/u/0/#inbox?projector=1"); */
    }
    else{
        alert("Incorrect password or Username");
    

    }
    
}/*
function Joinnow(){
    while(welcome()=true)&&
        window.open("twiter.html")
        
    }
}*/
