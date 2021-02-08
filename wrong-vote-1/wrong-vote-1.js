
function toggleText(){
    let text = document.getElementById("afterClick");
    if(text.style.display === "none"){
        text.style.display = "flex";
    }
}

let mcgovern = document.getElementById("mcgovern");
console.log(mcgovern);
let alert= document.getElementById("alert");
let h1 = document.getElementById("hone");
let okButton = document.getElementById("okButton");

function wrongChoice(){
    alert.style.display='flex';
    h1.style.margin="0";
    // alert("We detected that you may have made the wrong choice. Try again");
    // this.removeEventListener("click", wrongChoice);
    // this.addEventListener("click", areYouSure);
    ///gonna make a div space equal to the top margin and then make that an alert that when you click it clears the stuff below try again and puts a canvas instead

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


function mcgovernRight(){
    window.location.href="https://en.wikipedia.org/wiki/George_McGovern";
}

function nixonRight(){
    window.location.href="https://en.wikipedia.org/wiki/Richard_Nixon";
}

function openSignatureSpace(){

}

mcgovern.addEventListener("contextmenu", mcgovernRight);
nixon.addEventListener("contextmenu", nixonRight);
mcgovern.addEventListener("click", wrongChoice);
okButton.addEventListener("click", openSignatureSpace);

