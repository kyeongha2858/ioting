const btn = document.querySelector("#my-btn");

const HIDING_CL ="hiding";


function hidingFN(){
    btn.classList.toggle(HIDING_CL);
}

function inits(){
    btn.addEventListener("click",hidingFN)
}
inits();