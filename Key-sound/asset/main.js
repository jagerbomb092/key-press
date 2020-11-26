window.addEventListener("keydown",(e)=>{
    let keySound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let keys=document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!keySound) return 
    keySound.currentTime=0
    keySound.play()
    stopFunction()
    keys.classList.add("active")
    keys.addEventListener("transitionend",()=>{
        keys.classList.remove("active")
    })
})
let key =document.querySelectorAll(".key")
let stopFunction = ()=>{
    for (let i = 0; i < key.length; i++) {
        let keys = key[i];
        keys.classList.remove("active")
        
    }
}
