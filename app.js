
//MENU
const btnmenu = document.querySelector('#icon')
const menu = document.querySelector('.conteiner-menu')
const btnSairMenu = document.querySelector('#icon-menu')



btnmenu.addEventListener('click', function(){
    menu.classList.toggle('active')
    btnmenu.style.display = 'none'
    btnSairMenu.style.display = 'block'
})

btnSairMenu.addEventListener('click', function(){
    menu.classList.remove('active')
    btnmenu.style.display = 'block'
    btnSairMenu.style.display = 'none'
})


//CARROSSEL

document.querySelector('#radio1').checked = true

let contador = 1

setInterval(() =>{
    proximaImg()
}, 5000)

function proximaImg(){
    contador++;

    if(contador > 4){
        contador = 1
    }

    document.getElementById('radio' +contador).checked = true
}