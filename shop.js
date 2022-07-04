if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

const button = document.getElementById('siu')
const inputb = document.getElementById('a4')
const list = document.querySelector('ul')
const body = document.querySelector('body')
const clr = document.getElementById('fr')
let delet = document.querySelectorAll('.pee')

function ready (){
    if(inputb.value.length > 2 ) {
        const li = document.createElement('li')
        const details = `${inputb.value}<input className="pee" type="button" value="remove">`;
        li.innerHTML = details
        list.appendChild(li)
        inputb.value = ''
    } else {

    }
    
}
button.addEventListener('click', function(){
    if(inputb.value.length > 2 ) {
        const li = document.createElement('li')
        const details = `${inputb.value}<input class="pee" type="button" value="remove">`;
        li.innerHTML = details
        list.appendChild(li)
        inputb.value = ''
        li.querySelector('.pee').addEventListener('click', function(e){
            e.target.parentElement.remove()
        })
    } else {

    }
})

clr.addEventListener('input', function(){
    body.style.backgroundColor = `${clr.value}`
})

delet.forEach((data, index)=>{
    let button = delet[index]
    button.addEventListener('click', function(e){
        e.target.parentElement.remove()
    })
}) 