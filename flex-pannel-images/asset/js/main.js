let panel = document.querySelectorAll(".panel")
function toggleOpen(){
    panel.forEach(panels => {
        panels.classList.remove('open')
    });
    this.classList.add('open')
    return
}
function toggleActive(e){
        panel.forEach(panels => {
            panels.classList.remove('active')
        });
        this.classList.add('active')
}

panel.forEach(panels =>panels.addEventListener("click",toggleOpen));
panel.forEach(panels =>panels.addEventListener("click",toggleActive));