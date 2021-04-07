const toggle = document.getElementById("switch-button");
const text = document.querySelector(".color-style");

function switchThemes() {
    document.body.classList.add("l-colors");
    text.innerText="Switch Back?"
}

if(localStorage.getItem("l-colors")){
    //Swtich looks to light colors if switching off current page in light colors mode
    switchThemes();
}

toggle.onclick = (event) => {
    if(document.body.classList.contains("l-colors")){
        //Switch looks back to original
        document.body.classList.remove("l-colors");
        text.innerText = "Switch Colors?";
        localStorage.removeItem("l-colors");
    }else{
        //Switch looks to light colors
        switchThemes();
        localStorage.setItem("l-colors",true);
    }
}