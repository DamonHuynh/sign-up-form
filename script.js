const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const match = document.getElementById("match");

password.addEventListener("input", ()=>{
    removeError();
});

confirm.addEventListener("input", ()=>{
   removeError();
});

function removeError(){
    if(password.value == confirm.value && password.value != ""){
        match.textContent = "";
        password.classList.toggle("error");
        confirm.classList.toggle("error");
        password.setCustomValidity("");

    }
    else{
        match.textContent = "~ Passwords do not match";
        password.classList.add("error");
        confirm.classList.add("error");
        password.setCustomValidity("Passwords are not matching");
        
    }
}