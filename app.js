
const allBtns = document.querySelectorAll('.numpad button')
const topScreen = document.querySelector('.current-operand')
const bottomScreen = document.querySelector('.previous-operand')


topScreen.innerHTML = '0'
bottomScreen.innerHTML = ''
// let exp = ''

// allBtns.forEach(btn=> {
// btn.onclick = function (){
//     if (btn.classList.contains('clear')){
//         topScreen.innerHTML = '0'
//         bottomScreen.innerHTML = ''  
//     } else if (btn.classList.contains('delete')){
//         bottomScreen.innerHTML =  bottomScreen.innerText.slice(0, -1) 
//     } else if (btn.classList.contains('percentage')){
//         bottomScreen.innerHTML = '%' 
//     }else if (btn.classList.contains('equals')) {
//     topScreen.innerHTML = eval(bottomScreen.innerHTML)
//     } else{
//         bottomScreen.innerHTML += btn.innerHTML
//     }
// }
// })

allBtns.forEach(btn => {
    btn.onclick = function() {
        if (btn.classList.contains('clear')){
        topScreen.innerHTML = '0'
        bottomScreen.innerHTML = ''
    } else if  (btn.classList.contains('delete')) {
        bottomScreen.innerHTML = bottomScreen.innerText.slice(0, -1)
    }else if (btn.classList.contains('equals')) {
        topScreen.innerHTML = eval(bottomScreen.innerHTML)
    } else if (btn.classList.contains('percentage')) {
        bottomScreen.innerHTML = (bottomScreen.innerHTML)
    }else{
         bottomScreen.innerHTML += btn.innerHTML
    }
       
}
})

