let abc = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let allInfo = []
fetch(abc).then(data => data.json())
        .then(info => allInfo.push(...info))
// console.log(allInfo);
// console.log(allInfo.filter(place =>console.log(place)));
let output = document.querySelector('.list-array')
let input = document.querySelector(".input-num")
function inputUpdate(matchword, allInfo){
    return allInfo.filter(place => {
        let regex = new RegExp(matchword,'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}
function findMatch(){
    let matchArray = inputUpdate(this.value,allInfo)
    let html = matchArray.map(place => {
        return`<li><span>${place.city} ${place.state}</span></li>`
    })
    output.innerHTML = html
}
input.addEventListener("change",findMatch)
input.addEventListener("keyup",findMatch)
// let x =32

// for (let i = 0; i < 3; i++) {
//     x -= 5*i
// }
// console.log(x);
