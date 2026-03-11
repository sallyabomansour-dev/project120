let allCourses1 = document.querySelector(".parent1"); 
let allCourses2 = document.querySelector(".parent2"); 
let badge = document.querySelector("#num");
let totalPriceEl = document.querySelector("#total-price");

let productstocourse = JSON.parse(localStorage.getItem("productstocourse")) || [];
let productstofavo = JSON.parse(localStorage.getItem("productstofavo")) || [];

function drawCourses() {
    
    allCourses1.innerHTML = productstocourse.map(item =>
        `            <div class="course1">
                                <img class="img" src=" ${item.img}" alt="">

<div class="des">
<b >    ${item.title}
</b>
<h5 >  price ${item.price}$
</h5>
                        <h5 style="font-size: 15px;opacity: 0.5;">${item.des}</h5>

                    <div class="add to">
            <div class="incres">
                <div class="min" onclick="mincourse(${item.id})">-</div>

                <p>${item.quantity}</p>

                <div class="plus" onclick="pluscourse(${item.id})">+</div>
                                        <button class="favorite"onclick="addToCarttwo(${item.id}, this)">remove course</button>

            </div>
        </div></div>



    </div> `

    ).join("");
    updateBadge();
    updateTotal();
}
function drawFavorites() {
    allCourses2.innerHTML = productstofavo.map(item =>
        `
        <div class="course1">
            <img class="img" src="${item.img}" alt="">
                <div class="des">
                    <b>${item.title}</b>
                    <h5>Price: ${item.price}$</h5>
                    <h5 style="opacity:0.5;font-size:15px">${item.des}</h5>
                </div>
                <div class="add to">
                    <i class="fa-solid fa-heart heart" onclick="removeFavorite(${item.id})"></i>
                </div>
        </div>`
    ).join("");
}

function addToCarttwo(id) {
    productstocourse = productstocourse.filter(item => item.id !== id);
    localStorage.setItem("productstocourse", JSON.stringify(productstocourse));
    drawCourses();
}

function removeFavorite(id) {
    productstofavo = productstofavo.filter(item => item.id !== id);
    localStorage.setItem("productstofavo", JSON.stringify(productstofavo));
    drawFavorites();
}

function updateBadge() {
    let products = JSON.parse(localStorage.getItem("productstocourse"))|| []
    let total = products.reduce((sum, item) => sum +item.quantity, 0);

    badge.textContent = total
}

function updateTotal() {
    let total = productstocourse.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (totalPriceEl) totalPriceEl.textContent = `Total Price: $${total}`;
}

drawCourses();
drawFavorites();
function mincourse(id) {

    let products = JSON.parse(localStorage.getItem("productstocourse")) || []

    let item = products.find(p => p.id === id)

    if (item.quantity > 1) {

        item.quantity -= 1

    } else {

        products = products.filter(p => p.id !== id)

    }

    localStorage.setItem("productstocourse", JSON.stringify(products))

    badge.innerHTML = products.length
    productstocourse = products

    drawCourses()

}



function pluscourse(id) {

    let products = JSON.parse(localStorage.getItem("productstocourse")) || []

    let item = products.find(p => p.id === id)

    if (item) {

        item.quantity += 1

    }

    localStorage.setItem("productstocourse", JSON.stringify(products))
    productstocourse=products
    drawCourses()

}

window.onload = function () {
    drawFavorites()}