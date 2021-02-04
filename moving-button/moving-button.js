


hoverCount = 0;

let mcgovern = document.getElementById("mcgovern");


function moveAfterHover() {
    // if (hoverCount <= 7) {
    //     let randyCoord1 = Math.floor(Math.random() * 200);
    //     let randyCoord2 = Math.floor(Math.random() * 200);
    //     console.log(randyCoord1);
    //     console.log(randyCoord2);
    //     this.style.transform = `translate(${randyCoord1}px, ${randyCoord2}px); `
    //     hoverCount++;
    //     console.log(hoverCount);
    //     console.log('hello');
    // }
    // hoverCount++
    // console.log("helloo")

    let space = document.getElementById("space");
    let spaceCoords = space.getBoundingClientRect();
    console.log(spaceCoords);
    let randyCoord1 = Math.floor(Math.random() * 860);
    let randyCoord2 = Math.floor(Math.random() * 720);
    console.log(randyCoord1);
    console.log(randyCoord2);
    if (hoverCount <= 7) {
        

        hoverCount++;

    }   
}

mcgovern.addEventListener("click", moveAfterHover);