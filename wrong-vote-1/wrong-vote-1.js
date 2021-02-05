
function toggleText(){
    let text = document.getElementById("afterClick");
    if(text.style.display === "none"){
        text.style.display = "flex";
    }
}

let mcgovern = document.getElementById("mcgovern");
console.log(mcgovern);

function wrongChoice(){
    alert("We detected that you may have made the wrong choice. Try again");
    this.removeEventListener("click", wrongChoice);
    this.addEventListener("click", areYouSure);
}

function areYouSure(){
    alert("Hmm.. lets try something else. Click OK to move on");

    this.removeEventListener("click", areYouSure);
    this.addEventListener("click", link());
}

function link(){
    this.location.href="../moving-button/moving-button.html";
    this.removeEventListener("click", link);
}

mcgovern.addEventListener("click", wrongChoice);

function mcgovernFrown(){
    this.style.cursor = `crosshair, pointer;`
    console.log("this is working");
}

mcgovern.addEventListener("mouseenter", mcgovernFrown);