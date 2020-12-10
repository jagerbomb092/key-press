let modal = document.querySelector('.modal')
window.addEventListener('click',(e)=>{
    if(modal.contains(e.target)){
        console.log('in');
    }
    else{
        console.log('out');
    }
})