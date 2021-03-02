
function toggleText() {
    let text = document.getElementById("afterClick");
    if (text.style.display === "none") {
        text.style.display = "flex";
    }
}

let mcgovern = document.getElementById("mcgovern");
let nixon = document.getElementById('nixon');
let alert = document.getElementById("alert");
let h1 = document.getElementById("hone");
let okButton = document.getElementById("okButton");
let space = document.getElementById('space');
let goAgain = document.getElementById('goAgain');
let submitSignature = document.getElementById('submitSignature');
let spaceSubmit = document.getElementById('spaceSubmit')

function wrongChoice() {
    alert.style.display = 'flex';
    h1.style.margin = "0";
    space.style.display = 'block';
    mcgovern.style.display = "none";
    nixon.style.display = "none";
    goAgain.style.display = "none";
    submitSignature.style.display="flex";
    spaceSubmit.style.display="flex";
    // alert("We detected that you may have made the wrong choice. Try again");
    // this.removeEventListener("click", wrongChoice);
    // this.addEventListener("click", areYouSure);
    ///gonna make a div space equal to the top margin and then make that an alert that when you click it clears the stuff below try again and puts a canvas instead

}

function areYouSure() {
    alert("Hmm.. lets try something else. Click OK to move on");

    this.removeEventListener("click", areYouSure);
    this.addEventListener("click", link());

}

function link() {
    this.location.href = "../moving-button/moving-button.html";
    this.removeEventListener("click", link);
}


function mcgovernRight() {
    window.location.href = "https://en.wikipedia.org/wiki/George_McGovern";
}

function nixonRight() {
    window.location.href = "https://en.wikipedia.org/wiki/Richard_Nixon";
}


function moveOn(){
    window.location.href = "../on-page-load/index.html";
}

submitSignature.addEventListener("click", moveOn);
mcgovern.addEventListener("contextmenu", mcgovernRight);
nixon.addEventListener("contextmenu", nixonRight);
mcgovern.addEventListener("click", wrongChoice);


let isDrawing = false;
let x = 0;
let y = 0;

let context = space.getContext('2d');

space.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

space.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}
