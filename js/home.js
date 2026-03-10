
let allCourses = document.querySelector(".parent")
let products = [
    {
        id: 1,
        title: "Top front-end developer courses",
        img: "img1 fr.jpg",
        price: "price 1500$",
        des: "teach essential skills like HTML, CSS, JavaScript, and frameworks like React."
    },
    {
        id: 2,
        title: "top Back-End Developer courses",
        img: "img2 ba.jpg",

        price: "price 1800$",
        des: "focus on server-side languages like Python, Go, Node.js, and .NET"

    },
    {
        id: 3,
        title: "top Flutter courses",
        img: "img3 flu.jpg",

        price: "blue",
        des: "Learn to build high-performance mobile apps with our free course on Flutter for beginners!"

    },
    {
        id: 4,
        title: "Cybersecurity courses",
        img: "img4 se.jpg",

        price: "price 3000$",
        des: "Cybersecurity courses can help you learn network security, risk management, encryption techniques,"

    },
    {
        id: 5,
        title: "AI Course Creator tool",
        img: "img5 ai.jpg",

        price: "price 2500$",
        des: "Create complete online courses with AI-generated lessons, quizzes, and visuals — ready to sell or publish anywhere."

    },
    {
        id: 6,
        title: "Top Data Analyst Course",
        img: "img6 data.jpg",

        price: "price 1200$",
        des: "Get your Data Analytics career certificate with Grow with Google covering database management (SQL/NoSQL), API"

    },
    {
        id: 7,
        title: "Figma for UI and UX courses",
        img: "img7 fi.jpg",

        price: "price 2400$",
        des: " Discover the fundamentals of design with articles that cover the core principles, tools, and techniques every designer should know."

    },
    {
        id: 8,
        title: "Explore Graphic Design courses",
        img: "img graghic.jpg",

        price: "price 2000$",
        des: " Master graphic design with our courses. Learn to create impactful visual communication and designs. Start your journey"

    },
    {
        id: 9,
        title: "Top java courses",
        img: "java img.jpg",

        price: "price 3200$",
        des: "Learn to code in Java — a robust programming language used to create software, web and mobile apps, and more."

    },

]
function drawItems() {
    let y = products.map((item) => {
        return `
            <div class="course1">
                                <img class="img" src=" ${item.img}" alt="">

<div class="des">
<b style="padding-bottom: 50px;">    ${item.title}
</b>
<h5 style="padding: 10px;">    ${item.price}
</h5>
<h5 style="font-size: 15px;opacity: 0.5;">    ${item.des}
 </h5>
</div>
                    <div class="add to">
                                                <i class="fa-regular fa-heart"onclick="faccheck( ${item.id})"></i>

                        <button class="favorite"onclick="check( ${item.id} )">Add To couses</button>
                    </div>


    </div>

        `
    }).join("")
    allCourses.innerHTML = y;
}
drawItems()
function check() {
    if (localStorage.getItem("first")) {
        window.location = "home1.html"
    } else {
        window.location = "register12.html"
    }
}
function faccheck() {
    if (localStorage.getItem("first")) {
        window.location = "home1.html"
    } else {
        window.location = "register12.html"
    }
}
function drawProducts(arr) {
    let y = arr.map((item) => {
        return `
            <div class="course1">
                                <img class="img" src=" ${item.img}" alt="">

<div class="des">
<b style="padding-bottom: 50px;">    ${item.title}
</b>
<h5 style="padding: 10px;">    ${item.price}
</h5>
<h5 style="font-size: 15px;opacity: 0.5;">    ${item.des}
 </h5>
</div>
                    <div class="add to">
                                                <i class="fa-regular fa-heart heart"></i>

                        <button class="favorite"onclick="check()">Add To couses</button>
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







