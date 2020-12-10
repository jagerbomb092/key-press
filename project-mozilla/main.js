let array =[['Willy the Goblin','Big Daddy','Father Christmas'],['the soup kitchen','Disneyland','the White House'],['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']]

let customName = document.querySelector('.customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');
let rdName = array[0]
let rdPlace = array[1]
let rdThing = array[2]
randomize.addEventListener('click', result);
let abc = ''
let weight = ''
let temperature = ''
let xyz = ''
let kg = ''
function result() {
    let random = Math.floor(Math.random()*array.length)
  if(customName.value !== '') {
     abc = customName.value;
  }
  else{
    abc = 'Bob'
  }
  if(document.getElementById("us").checked) {
     weight = Math.round(300);
     temperature =  Math.round(94);
     xyz = 'fahrenheit'
     kg='pounds'
  }
  if(document.getElementById("uk").checked){
    weight = Math.round(21);
    temperature =  Math.round(34);
    xyz = 'centigrade'
    kg = 'stone'
  }
//   else if(document.getElementById("uk").checked)
  
  story.textContent = `It was ${temperature} ${xyz} outside, so ${rdName[random]} went for a walk. When they got to ${rdPlace[random]}, they stared in horror for a few moments, then ${rdThing[random]}. ${abc} saw the whole thing, but was not surprised — ${rdName[random]} weighs  ${weight} ${kg}, and it was a hot day.`;
  story.style.visibility = 'visible';
}
