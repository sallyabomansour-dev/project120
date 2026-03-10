
let user = document.querySelector("#user")
let logOut = document.querySelector("#log")

let sign = document.querySelector("#in")
let out = document.querySelector("#up")

if (localStorage.getItem("first")) {
    sign.remove()
    out.remove()
    user.style.display = "block"
    logOut.style.display = "block"

    user.innerHTML = "Hi," + localStorage.getItem("first")
}
logOut.addEventListener("click", function (e) {
e.preventDefault()
    // localStorage.removeItem("first")
    // localStorage.removeItem("last")
    // localStorage.removeItem("email")
    // localStorage.removeItem("password")
    localStorage.clear();
    setTimeout(() => {
        window.location ="index.html"
    }, 1500)


})
