const menuBtn_open=document.querySelector("#menu-btn_open");
const menuBtn_close=document.querySelector("#menu-btn_close");
const nav_links=document.querySelector(".nav-links");
menuBtn_open.onclick=()=>{
    menuBtn_open.classList.toggle("close");
    menuBtn_close.classList.toggle("open");
    nav_links.classList.toggle("active");
};
menuBtn_close.onclick=()=>{
    menuBtn_open.classList.toggle("close");
    menuBtn_close.classList.toggle("open");
    nav_links.classList.toggle("active");
};