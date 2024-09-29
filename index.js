// * Background setup


let heights = ["300px","320px","460px","350px","200px"];
const tiles = document.querySelectorAll('.row');

function tileSize() {
    tiles.forEach((tile) => {
        tile.style.height = heights[Math.floor(Math.random() * 5)];
        console.log(heights[Math.floor(Math.random() * 5)]);
    })
}
tileSize();
const heightSetting = window.addEventListener("resize" , () => {
    tileSize();
})
setInterval(() => {
    tileSize()
}, 2000);


// function moveUp(element) {
//     var elStyle = window.getComputedStyle(element);
//     var topValue = elStyle.getPropertyValue("top").replace("px", "");
//     console.log(topValue);
//     element.style.top = (Number(topValue) - 20) + "px";
//     console.log("Moved " +(Number(topValue) - 20) + "px");
// }

// const columns = document.querySelectorAll('.columns');

// const move = columns.forEach((column) => {
//     // setInterval(moveUp(column,2),200);
//     setInterval(() => {
//         moveUp(column,200)
//     }, 200);
// })


// * Cursor setup

const cordinates = { x:0 , y:0 };
const cursor_circules = document.querySelectorAll(".cursor");
const top_circle = document.querySelector(".cursor_");


cursor_circules.forEach(function (curcle) {
    curcle.x = 0;
    curcle.y = 0;
});

// const cursor = document.addEventListener("mousemove", function(e) {
    
//     cordinates.x = e.clientX;
//     cordinates.y = e.clientY + window.scrollY;
// });




document.addEventListener("mousemove", function(e) {
    cordinates.x = e.clientX + window.scrollX;
    cordinates.y = e.clientY + window.scrollY;
});

function animatecursor() {
    let x = cordinates.x;
    let y = cordinates.y;
    
    top_circle.style.left = x  -12 + "px";
    top_circle.style.top = y  -12 + "px";

    cursor_circules.forEach(function (cursor, index) {
        cursor.style.left = x  -12 + "px";
        cursor.style.top = y  -12 + "px";
        
        cursor.style.scale = (cursor_circules.length - index) / cursor_circules.length;

        cursor.x = x;
        cursor.y = y;

        const nextCircle = cursor_circules[index + 1] || cursor_circules[0];
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;
    });

    requestAnimationFrame(animatecursor)
}

animatecursor();
let clickCount = 0;
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
const home = document.getElementById('#hero');
const header = document.querySelector('.header');
menuIcon.addEventListener('click', () => {
    clickCount += 1;
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
    home.classList.toggle('hero');
    header.classList.toggle('active');
});



// * menu button transition

menuIcon.addEventListener("mouseover", (e) => {
    console.log("Hover nav");
    menuIcon.style.color = "#1a1a1a";
    menuIcon.style.backgroundColor = "#fff";
});

menuIcon.addEventListener("mouseout", (e) => {
    if (clickCount % 2 == 0) {}
    console.log("out nav");
    menuIcon.style.color = "#fff";
    menuIcon.style.backgroundColor = "#1a1a1a";
});

// * navbar Setup

const navEliments = document.querySelectorAll(".nav-eliment");

navbar.addEventListener("mouseover", (e)  => {
    console.log("Hovered nav bar");
    top_circle.style.scale = 5;
    cursor_circules.forEach(function(circle) {
        circle.style.display = "none";
    });
})
navbar.addEventListener("mouseout", (e)  => {
    top_circle.style.scale = 1;
    cursor_circules.forEach((circle) => {
        circle.style.display = "block";
        
    });
    console.log("mouse Out nab var");
})
navEliments.forEach((eliment , index) => {
    eliment.addEventListener("mouseover", (e)  => {
        eliment.style.fontSize = "30px";
    });
    eliment.addEventListener("mouseout", (e)  => {
        eliment.style.fontSize = "18px";
        console.log("mouse Out " + eliment.textContent);
    });
});