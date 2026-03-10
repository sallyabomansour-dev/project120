
let cartProductDiv = document.querySelector(".all .ux")
let badge = document.querySelector("#num")

let coursenum = localStorage.getItem("productstocourse")
    ? JSON.parse(localStorage.getItem("productstocourse"))
    : [];

let favorite = localStorage.getItem("productstofavo")
    ? JSON.parse(localStorage.getItem("productstofavo"))
    : [];
drawcoursenum()

updateBadge()


let allCourses = document.querySelector(".parent")
let products = [
    {
        id: 1,
        title: "Top front-end developer courses",
        img: "img1 fr.jpg",
        price: "1500",
        des: "teach essential skills like HTML, CSS, JavaScript, and frameworks like React."
    },
    {
        id: 2,
        title: "top Back-End Developer courses",
        img: "img2 ba.jpg",

        price: " 1800",
        des: "focus on server-side languages like Python, Go, Node.js, and .NET"

    },
    {
        id: 3,
        title: "top Flutter courses",
        img: "img3 flu.jpg",

        price: "4000",
        des: "Learn to build high-performance mobile apps with our free course on Flutter for beginners!"

    },
    {
        id: 4,
        title: "Cybersecurity courses",
        img: "img4 se.jpg",

        price: "3000",
        des: "Cybersecurity courses can help you learn network security, risk management, encryption techniques,"

    },
    {
        id: 5,
        title: "AI Course Creator tool",
        img: "img5 ai.jpg",

        price: " 2500",
        des: "Create complete online courses with AI-generated lessons, quizzes, and visuals — ready to sell or publish anywhere."

    },
    {
        id: 6,
        title: "Top Data Analyst Course",
        img: "img6 data.jpg",

        price: " 1200",
        des: "Get your Data Analytics career certificate with Grow with Google covering database management (SQL/NoSQL), API"

    },
    {
        id: 7,
        title: "Figma for UI and UX courses",
        img: "img7 fi.jpg",

        price: " 2400",
        des: " Discover the fundamentals of design with articles that cover the core principles, tools, and techniques designer."

    },
    {
        id: 8,
        title: "Explore Graphic Design courses",
        img: "img graghic.jpg",

        price: " 2000",
        des: " Master graphic design with our courses. Learn to create impactful visual communication and designs."

    },
    {
        id: 9,
        title: "Top java courses",
        img: "java img.jpg",

        price: " 3200",
        des: "Learn to code in Java — a robust programming language used to create software, web and mobile apps, and more."

    },

]

function drawItems() {
    let y = products.map((item) => {
        let exist = coursenum.find(p => p.id === item.id)
        let fav = favorite.find(f => f.id === item.id)
        return `
            <div class="course1">
                                <img class="img" src=" ${item.img}" alt="">

<div class="des">
<b style="padding-bottom: 50px;">    ${item.title}
</b>
<h5 style="padding: 10px;">price    ${item.price}$
</h5>
<h5 style="font-size: 15px;opacity: 0.5;">    ${item.des}
 </h5>
</div>
                    <div class="add to">
                                                <i <i class="${fav ? "fa-solid" : "fa-regular"} fa-heart heart"onclick="addfavorite(${item.id}, this)"></i>

                        <button class="favorite"onclick="addToCart(${item.id}, this)"
                        style="background:${exist ? ` linear-gradient(90deg, #ffffff 0%, #00ff99 100%)` : ` linear-gradient(90deg, #00ff99 0%, #00ccff 100%)`}"> ${exist ? "Remove Course" :
                "add to course"}
                </button>
                    </div>


    </div>

        `;
    }).join("")
    allCourses.innerHTML = y;

}
drawItems()


let addedfavo = [];

let addeditem = [];

function addfavorite(id, btn) {

    let item = products.find((item) => item.id === id);
    let exist = favorite.find((item) => item.id === id);


    if (exist) {
        favorite = favorite.filter(p => p.id !== id);
        btn.style.marginRight = "10px"
        btn.classList.add("fa-regular");
        btn.classList.remove("fa-solid");

    }
    else {

        favorite.push(item)
        btn.classList.add("fa-solid");
        btn.classList.remove("fa-regular");


    }
    localStorage.setItem("productstofavo", JSON.stringify(favorite))


        ;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let addeditem = localStorage.getItem("productstocourse") ? JSON.parse(localStorage.getItem("productstocourse")):[];
// if (addeditem){
//     addeditem.map((item) =>{
//         cartProductDiv.innerHTML = `  <p>${item.id}</p>
// `

//     })
//     badge.innerHTML = addeditem.length
// }
function addToCart(id, btn) {

    let item = products.find((item) => item.id === id);
    let exist = coursenum.find((item) => item.id === id);
    if (exist) {
        coursenum = coursenum.filter(p => p.id !== id);
        btn.textContent = "Add To Course";
        btn.style.background = "linear-gradient(90deg, #00ff99 0%, #00ccff 100%)"

    }
    else {

        btn.textContent = "Remove Course";
        btn.style.background = "linear-gradient(90deg, #ffffff 0%, #00ff99 100%)"
        coursenum.push({ ...item, quantity: 1 })

    }
    localStorage.setItem("productstocourse", JSON.stringify(coursenum))

    drawcoursenum()
    updateBadge()
}
function drawcoursenum() {

    let y = coursenum.map((item) => {
        let totalprice = item.price * item.quantity;
        return `
        <div class="ui">
            <div class="tit-1">${item.title}</div>
            <div class="tit-pr">price ${totalprice}$</div>

            <div class="incres">
                <div class="min" onclick="mincourse(${item.id})">-</div>

                <p>${item.quantity}</p>

                <div class="plus" onclick="pluscourse(${item.id})">+</div>
            </div>
        </div>
`
    }).join("");

    cartProductDiv.innerHTML = y;
}
function updateBadge() {
    let total = coursenum.reduce((sum, item) => sum + item.quantity, 0);

    if (badge) badge.textContent = total
}


let shoppingCartIcon = document.querySelector(".sall")
let cartsProducts = document.querySelector(".all")
shoppingCartIcon.addEventListener("click", opencart)

function opencart() {
    cartsProducts.classList.toggle("show")
}

function drawProducts(arr) {
    let y = arr.map((item) => {
        return `
            <div class="course1">
                                <img class="img" src=" ${item.img}" alt="">

<div class="des">
<b style="padding-bottom: 50px;">    ${item.title}
</b>
<h5 style="padding: 10px;">  price  ${item.price}$
</h5>
<h5 style="font-size: 15px;opacity: 0.5;">    ${item.des}
 </h5>
</div>
                    <div class="add to">
                                                <i class="fa-regular fa-heart heart"onclick="addfavorite(${item.id}, this)"></i>

                        <button class="favorite"onclick="addToCarttwo(${item.id}, this)">Add To couses</button>
                    </div>


    </div>

        `;


    }).join("");

    allCourses.innerHTML = y;
}
let serch = document.querySelector("#sear")
let selecttype = document.querySelector("#sel")
function searchProducts() {
    const text = serch.value.toUpperCase();
    const type = selecttype.value;
    let results = products.filter((product) => {
        const name = product.title.toUpperCase();
        const price = product.price.toString();
        const description = product.des.toUpperCase();


        if (type === "name") {
            return name.includes(text);
        }
        else if (type === "price") {
            return price.includes(text);
        }
        else if (type === "description") {
            return description.includes(text);
        }

        else {
            return name.includes(text) || price.includes(text) || description.includes(text);
        }

    });
    drawProducts(results)

}

serch.addEventListener("input", searchProducts);
selecttype.addEventListener("change", searchProducts);
function addfavorite(id, btn) {

    let item = products.find((item) => item.id === id);
    let exist = favorite.find((item) => item.id === id);
    if (exist) {
        favorite = favorite.filter(p => p.id !== id);
        btn.style.marginRight = "10px"
        btn.classList.add("fa-regular");
        btn.classList.remove("fa-solid");

    }
    else {

        favorite.push({ ...item, quantity: 1 })
        btn.classList.add("fa-solid");
        btn.classList.remove("fa-regular");


    }
    localStorage.setItem("productstofavo", JSON.stringify(favorite))


}


function addToCarttwo(id, btn) {
    let item = products.find((item) => item.id === id);
    let exist = coursenum.find((item) => item.id === id);

    if (exist) {
        coursenum = coursenum.filter(p => p.id !== id);
        btn.textContent = "Add To Course";
        btn.style.background = "linear-gradient(90deg, #00ff99 0%, #00ccff 100%)"


    }
    else {

        btn.textContent = "Remove Course";
        btn.style.background = "linear-gradient(90deg, #ffffff 0%, #00ff99 100%)"

        btn.style.backgroundColor = "white"
        coursenum.push({ ...item, quantity: 1 })
    }
    localStorage.setItem("productstocourse", JSON.stringify(coursenum))
    updateBadge()

    drawcoursenum()



        ;
}
// cartProductDiv.innerHTML += `<div>${choosenItem.title}</div>`
// cartprice.innerHTML += `<p>${choosenItem.price}</p>`
// cartincrese.innerHTML = `<div>${choosenItem.id} </div>`

function mincourse(id) {
    event.stopPropagation()

    let item = coursenum.find(p => p.id === id);

    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        coursenum = coursenum.filter(p => p.id !== id);
    }

    localStorage.setItem("productstocourse", JSON.stringify(coursenum))
    drawcoursenum()

    updateBadge()

}
function pluscourse(id) {
    event.stopPropagation()
    let item = coursenum.find(p => p.id === id);

    item.quantity += 1;

    localStorage.setItem("productstocourse", JSON.stringify(coursenum))
    drawcoursenum()

    updateBadge()


}
function drawcoursenum() {

    let y = coursenum.map((item) => {
        let totalprice = item.price * item.quantity;
        return `
        <div class="ui">
            <div class="tit-1">${item.title}</div>
            <div class="tit-pr">price ${totalprice}$</div>

            <div class="incres">
                <div class="min" onclick="mincourse(${item.id},event)">-</div>

                <p>${item.quantity}</p>

                <div class="plus" onclick="pluscourse(${item.id},event)">+</div>
            </div>
        </div>
`
    }).join("");

    cartProductDiv.innerHTML = y;
} 
drawcoursenum()
drawItems()
updateBadge()
