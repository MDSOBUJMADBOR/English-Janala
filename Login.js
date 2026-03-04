
document.getElementById('login-button').addEventListener('click', function (e) {

e.preventDefault()
          //1.get the inpur name
 const userInpur = document.getElementById('user-name')
const userName =userInpur.value ;
// console.log(userName);

//2.get the password
const passwordInput=document.getElementById('password-input');
const passwordName = passwordInput.value;
// console.log(passwordName);


//3.match username and password
if(userName === 'MD.SOBUJ MADBOR' && passwordName === '1234') {
          alert('Login Successfully');
// window.location.replace("sobuj.html")
          window.location.assign("index.html");
}
else{
          alert("Login Failed");
          return;
}
} )


