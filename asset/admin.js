const subnav = document.getElementById("subnav")
const avatar = document.getElementById("avatar")

avatar.onclick = function() {
    if(subnav.className == "subnav active"){
        subnav.classList.remove("active");
    }else{
        subnav.classList.add("active");
    }
}