
function toggleText(){
    let text = document.getElementById("afterClick");
    if(text.style.display === "none"){
        text.style.display = "flex";
    }
}

let mcgovern = document.getElementById("mcgovern");
console.log(mcgovern);
// mcgovern.addEventListener("mouseenter", function(event) {
//     event.target.style.color = "red";

//     setTimeout(function() {
//         event.target.style.color = "#bd5965";

//     },500);
// }