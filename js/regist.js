let last = document.querySelector("#last")
let email = document.querySelector("#email")
let password = document.querySelector("#pwd")
let first = document.querySelector("#name")

let register = document.querySelector("#register")

register.addEventListener ("click", function (e) {
    e.preventDefault()
    if (last.value === "" || email.value === "" || password.value === "" || first.value === "") {
        alert("please fill data")

    }
    else {
        localStorage.setItem("last" , last.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        localStorage.setItem("first", first.value);

        setTimeout( () => { 
            alert("account created successfully")

            window.location ="login.html"
        } , 1500)

     }
})
