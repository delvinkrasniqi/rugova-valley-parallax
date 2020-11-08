let sky = document.querySelector("#sky");
let mountain = document.querySelector("#mountain");
let horse = document.querySelector("#horse");
let heading = document.querySelector("#heading");
let sun = document.querySelector('#sun');

window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY;

    sky.style.top = scrollValue * 0.5 + 'px';
    mountain.style.top = -scrollValue * 0.1+ 'px';
    horse.style.top = scrollValue * 0.1 +'px';
    sun.style.left = scrollValue/0.8 + 'px';
})