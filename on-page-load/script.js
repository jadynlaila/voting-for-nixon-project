
let alert = document.getElementById("alert")
let closebtn = document.getElementById("closebtn");

function whenLoad(){
    alert.style.display="flex";
    alert.style.position="relative"
    alert.style.top="5px";
}

function closeButton(){
    this.parentElement.style.display='none';
}

function getLarger(){
    alert.style.width="70%";
    alert.style.color="red";
    alert.style.transition="all 4s";
    alert.style.padding="0 5px";
}

function getSmaller(){
    alert.style.width="225px";
    alert.style.color="#bd5965";
    alert.style.transition="all 3s";
    alert.style.padding="0 5px 0 25px"
}

closebtn.addEventListener("click", closeButton);
window.addEventListener('load', whenLoad);
alert.addEventListener("mouseenter", getLarger);
alert.addEventListener("mouseleave", getSmaller);

