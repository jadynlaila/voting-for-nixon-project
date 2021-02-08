

///////making a right click function that redirects to a page with information on them

function mcgovernRight(){
    window.location.href="https://en.wikipedia.org/wiki/George_McGovern";
}

function nixonRight(){
    window.location.href="https://en.wikipedia.org/wiki/Richard_Nixon";
}

mcgovern.addEventListener("contextmenu", mcgovernRight);
nixon.addEventListener("contextmenu", nixonRight);

