let inPut = document.querySelector(".color")
let draw = document.querySelector('.draw')
let width = document.querySelector('.width')
let ctx = draw.getContext('2d')
draw.height = window.innerHeight
draw.width = window.innerWidth
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
function changeColor(){
    ctx.strokeStyle = this.value
    
}
function changeWidth() {
    ctx.lineWidth = this.value
}

let isAbc = false
let lastX =0
let lastY =0
function isDraw(e){
    if (!isAbc) return
    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    
    lastX = e.offsetX
    lastY=e.offsetY
    
}
draw.addEventListener('mousemove',isDraw)
draw.addEventListener('mousedown',(e)=>{
    isAbc=true
    lastX = e.offsetX
    lastY=e.offsetY
})
draw.addEventListener('mouseup',()=>isAbc=false)
draw.addEventListener('mouseout',()=>isAbc=false)
inPut.addEventListener('change',changeColor)
width.addEventListener('change',changeWidth)