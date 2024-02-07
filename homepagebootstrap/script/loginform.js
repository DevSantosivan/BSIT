
function btnsubmit() {
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   if(email == "admin" && password == "password"){
      window.location.assign("index.html");
   }
   else{
      document.getElementById("caption").style.color = "red";
      document.getElementById("caption").innerHTML = "Incorrect email or password!";
   }

   if(email == "" || password == ""){
      document.getElementById("caption").innerHTML = "Please input field!";
   }
}