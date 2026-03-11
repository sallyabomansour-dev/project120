let email = document.querySelector("#email")
let password = document.querySelector("#password")
let login_Btn = document.querySelector("#login")
let getemail=localStorage.getItem("email")
let getpasssword = localStorage.getItem("password")
login_Btn.addEventListener("click", function (e) {

    e.preventDefault()
    if ( email.value ==="" || password.value ==="") {
        alert("please fill your information")
    }
    else {
        if ((getemail && getemail.trim() === email.value.trim() && getpasssword && getpasssword === password.value) ) {
            setTimeout(() => {
                window.location = "home1.html"
            }, 1500)
        }
     else {
        alert("username or password is wrong ")
    }


    }})
