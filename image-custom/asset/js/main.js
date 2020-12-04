let controls = document.querySelectorAll(".controls input")
function handleUpdate(){
    let counter = this.dataset.sizing || ''
    console.log(counter);
    let test = document.documentElement.style.setProperty(`--${this.name}`,this.value + counter)
    
}
controls.forEach(control => control.addEventListener('change',handleUpdate))
controls.forEach(control => control.addEventListener('mousemove',handleUpdate))