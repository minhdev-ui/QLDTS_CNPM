function on_form() {
    document.getElementById('overlay1').style.display = "block";
}
function off_form() {
    document.getElementById('overlay1').style.display = "none";
}

function on_benchmark() {
    document.getElementById('overlay2').style.display = "block";
}

function off_benchmark() {
    document.getElementById('overlay2').style.display = "none";
}

const subnav = document.getElementById("subnav")
const avatar = document.getElementById("avatar")

avatar.onclick = function() {
    if(subnav.className == "subnav active"){
        subnav.classList.remove("active");
    }else{
        subnav.classList.add("active");
    }
}