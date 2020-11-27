let abc = ["dvbasvdbashdvhajvhjdas","dbshafhasdjba","dbhawbhjasnfa"]
let count= 0
let index = 0
let currentText = ""
let text = ""
function textAni(){
    if (count === abc.length) {
        count = 0
    }
    currentText = abc[count]
    text = currentText.slice(0,++index)
    document.querySelector('.typing').textContent = text
    if (text.length === currentText.length) {
        count++
        index= 0
    }
    setTimeout(textAni,400)
}
textAni()